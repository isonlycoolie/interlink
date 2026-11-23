// SPDX-License-Identifier: Apache-2.0
import { maker } from './types';

const c = maker('Commerce');

export const commerce = [
  c('store', 'Your shop', ['shop', 'storefront', 'retail']),
  c('product', 'A product for sale', ['item', 'goods', 'package']),
  c('delivery', 'On its way by truck', ['shipping', 'truck', 'logistics']),
  c('order-tracking', 'Follow an order to the door', ['tracking', 'map', 'pin']),
  c('returns', 'Send it back', ['return', 'exchange', 'box']),
  c('inventory', 'Stock on the shelves', ['stock', 'warehouse', 'shelves']),
  c('coupon', 'A discount to use', ['discount', 'voucher', 'promo']),
  c('checkout', 'Pay and finish the order', ['checkout', 'pay', 'cart']),
  c('marketplace', 'Many sellers, one place', ['marketplace', 'stalls', 'vendors']),
  c('customer-review', 'What customers say', ['review', 'stars', 'rating']),
];
