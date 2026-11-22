// SPDX-License-Identifier: Apache-2.0
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import axe from 'axe-core';
import { useState } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Button } from '../src/button';
import { place } from '../src/layering/place';
import { ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle } from '../src/modal-dialog';
import { Popup } from '../src/popup';

afterEach(cleanup);
const noViolations = async (el: HTMLElement) => {
  const r = await axe.run(el, { rules: { 'color-contrast': { enabled: false } } });
  expect(r.violations.map((v) => `${v.id}: ${v.nodes[0]?.html}`)).toEqual([]);
};
const rect = (top: number, left: number, w = 80, h = 32) => ({ top, left, bottom: top + h, right: left + w, width: w, height: h, x: left, y: top, toJSON: () => ({}) }) as DOMRect;

describe('place', () => {
  it('flips to the other side when the preferred side has no room', () => {
    expect(place(rect(window.innerHeight - 40, 100), 200, 300, 'bottom-start').side).toBe('top');
    expect(place(rect(20, 100), 200, 100, 'bottom-start').side).toBe('bottom');
  });
  it('shifts inside the viewport', () => {
    expect(place(rect(100, window.innerWidth - 20), 200, 100, 'bottom-start').left).toBeLessThanOrEqual(window.innerWidth - 200);
  });
});

function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <Popup isOpen={open} onClose={() => setOpen(false)} role="dialog" label="Details" trigger={(p) => <Button {...p} onClick={() => setOpen(!open)}>Details</Button>} content={() => <button type="button">Inside</button>} />
  );
}

describe('Popup', () => {
  it('opens, focuses its content, and returns focus on Escape', () => {
    render(<Menu />);
    const trigger = screen.getByRole('button', { name: 'Details' });
    fireEvent.click(trigger);
    expect(trigger.getAttribute('aria-expanded')).toBe('true');
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Inside' }));
    fireEvent.keyDown(document.activeElement as Element, { key: 'Escape' });
    expect(screen.queryByRole('button', { name: 'Inside' })).toBeNull();
    expect(document.activeElement).toBe(trigger);
  });
});

function Confirm({ onClose }: { onClose: () => void }) {
  return (
    <ModalDialog onClose={onClose}>
      <ModalHeader hasCloseButton>
        <ModalTitle appearance="danger">Delete page</ModalTitle>
      </ModalHeader>
      <ModalBody>This page will be deleted.</ModalBody>
      <ModalFooter>
        <Button appearance="subtle" onClick={onClose}>Cancel</Button>
        <Button appearance="danger">Delete</Button>
      </ModalFooter>
    </ModalDialog>
  );
}

describe('ModalDialog', () => {
  it('is named by its title and closes on Escape', async () => {
    const onClose = vi.fn();
    const { baseElement } = render(<Confirm onClose={onClose} />);
    const dialog = screen.getByRole('dialog', { name: /Delete page/ });
    expect(dialog.getAttribute('aria-modal')).toBe('true');
    fireEvent.keyDown(document.body, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledOnce();
    await noViolations(baseElement as HTMLElement);
  });
  it('closes on an overlay click and from the close button', () => {
    const onClose = vi.fn();
    render(<Confirm onClose={onClose} />);
    fireEvent.click(screen.getByRole('dialog'));
    fireEvent.click(screen.getByRole('button', { name: 'Close modal' }));
    expect(onClose).toHaveBeenCalledTimes(2);
  });
});
