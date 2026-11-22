// SPDX-License-Identifier: Apache-2.0
import { people, type Person } from '../../src/people';

export const BALANCES = [
  { currency: 'TZS', country: 'Tanzania', amount: 48_250_000, change: 12.4, pending: 3_100_000 },
  { currency: 'KES', country: 'Kenya', amount: 2_184_500, change: 8.1, pending: 96_000 },
  { currency: 'USD', country: 'Card settlements', amount: 18_420, change: -2.3, pending: 1_250 },
];

export const money = (currency: string, n: number) => `${currency} ${n.toLocaleString('en-US')}`;

/** Weekly volume in thousands of USD, by channel. */
export const WEEKS = [
  { week: '6 Oct', mobile: 62, card: 21 },
  { week: '13 Oct', mobile: 70, card: 24 },
  { week: '20 Oct', mobile: 66, card: 26 },
  { week: '27 Oct', mobile: 81, card: 25 },
  { week: '3 Nov', mobile: 88, card: 29 },
  { week: '10 Nov', mobile: 84, card: 31 },
  { week: '17 Nov', mobile: 97, card: 33 },
];

export interface Payout {
  id: string;
  to: Person;
  business: string;
  method: 'M-Pesa' | 'Airtel Money' | 'Bank transfer' | 'Card';
  amount: string;
  status: 'Paid' | 'Processing' | 'Scheduled';
  date: string;
}

const { juma, wanjiru, emeka, folake, kofi, baraka, imani, jabari } = people;
export const PAYOUTS: Payout[] = [
  { id: 'PO-8812', to: juma, business: 'Hassan Hardware', method: 'M-Pesa', amount: 'TZS 1,250,000', status: 'Paid', date: 'Today, 09:14' },
  { id: 'PO-8811', to: wanjiru, business: 'Kamau Greens', method: 'M-Pesa', amount: 'KES 84,300', status: 'Paid', date: 'Today, 08:52' },
  { id: 'PO-8810', to: emeka, business: 'Obi Prints', method: 'Bank transfer', amount: 'USD 2,400', status: 'Processing', date: 'Today, 08:30' },
  { id: 'PO-8809', to: folake, business: 'Adeyemi Foods', method: 'Card', amount: 'USD 960', status: 'Paid', date: 'Yesterday' },
  { id: 'PO-8808', to: kofi, business: 'Asante Logistics', method: 'Airtel Money', amount: 'TZS 3,800,000', status: 'Scheduled', date: 'Tomorrow' },
  { id: 'PO-8807', to: baraka, business: 'Mwangi Studio', method: 'M-Pesa', amount: 'KES 41,000', status: 'Paid', date: 'Yesterday' },
  { id: 'PO-8806', to: imani, business: 'Achieng Crafts', method: 'Airtel Money', amount: 'KES 12,750', status: 'Paid', date: '21 Nov' },
  { id: 'PO-8805', to: jabari, business: 'Otieno Motors', method: 'Bank transfer', amount: 'TZS 9,600,000', status: 'Paid', date: '21 Nov' },
];

export const CHANNELS = [
  { label: 'M-Pesa', share: 54 },
  { label: 'Airtel Money', share: 21 },
  { label: 'Cards', share: 17 },
  { label: 'Bank transfer', share: 8 },
];
