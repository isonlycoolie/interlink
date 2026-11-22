// SPDX-License-Identifier: Apache-2.0
'use client';
import { ModalContext } from '@interlink/react/modal-dialog';
import { useId, type CSSProperties, type ReactNode } from 'react';

/**
 * A modal frozen in place for guideline pictures: the real ModalHeader, ModalTitle, ModalBody and ModalFooter
 * render inside it, over a blanket, without taking over the page or trapping focus.
 */
export function ModalShape({ children, width = '22rem', blanket = true }: { children: ReactNode; width?: string; blanket?: boolean }) {
  const titleId = useId();
  return (
    <div className="ilk-blanket" data-tinted={blanket || undefined}>
      <ModalContext.Provider value={{ titleId }}>
        <section className="il-modal ilk-modal" role="dialog" aria-labelledby={titleId} style={{ '--il-modal-width': width } as CSSProperties}>
          {children}
        </section>
      </ModalContext.Provider>
    </div>
  );
}

/** The overlay surface of a menu, shown open for guideline pictures. */
export function MenuShape({ children, width = '16rem' }: { children: ReactNode; width?: string }) {
  return (
    <div className="ilk-menu" style={{ width }}>
      {children}
    </div>
  );
}
