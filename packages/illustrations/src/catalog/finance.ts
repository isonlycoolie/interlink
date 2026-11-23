// SPDX-License-Identifier: Apache-2.0
import { maker } from './types';

const f = maker('Finance');

export const finance = [
  f('payments', 'Take payments by card', ['card', 'coins', 'checkout']),
  f('invoices', 'Invoices sent and paid', ['billing', 'document', 'paid']),
  f('growth', 'Numbers going up', ['revenue', 'chart', 'trend']),
  f('growth-hero', 'Steady growth over time', ['revenue', 'chart', 'trend'], true),
  f('wallet', 'Money you hold', ['balance', 'funds']),
  f('security', 'Protected and private', ['shield', 'lock', 'compliance']),
  f('security-hero', 'Data protected end to end', ['shield', 'lock', 'compliance'], true),
  f('savings', 'Money put aside', ['jar', 'deposit']),
  f('subscriptions', 'Billing that renews', ['recurring', 'plan', 'calendar']),
  f('transfer', 'Money moving between accounts', ['send', 'payout', 'exchange']),
  f('reports', 'Reports and breakdowns', ['pie', 'document', 'statement']),
  f('mobile-money', 'Pay from a phone', ['mobile', 'wallet', 'mpesa', 'transfer']),
  f('refund', 'Money sent back', ['return', 'refund', 'reverse']),
  f('payout', 'Money paid out to you', ['withdraw', 'payout', 'settlement']),
  f('exchange-rate', 'One currency into another', ['currency', 'fx', 'convert']),
  f('budget', 'Spending planned against a limit', ['budget', 'spend', 'plan']),
  f('tax', 'Tax worked out', ['tax', 'vat', 'calculator']),
  f('receipt', 'Proof of payment', ['receipt', 'paid', 'slip']),
  f('loan', 'Money lent and repaid', ['credit', 'loan', 'borrow']),
  f('bank', 'Your bank account', ['bank', 'account', 'deposit']),
  f('split-bill', 'Share a bill between people', ['split', 'share', 'pay']),
  f('qr-payment', 'Pay by scanning a code', ['qr', 'scan', 'pay']),
  f('pos-terminal', 'Pay at the counter', ['pos', 'terminal', 'card reader']),
  f('overdue-invoice', 'An invoice is past due', ['overdue', 'late', 'reminder']),
];
