// SPDX-License-Identifier: Apache-2.0
import { parseIso, toIso, type ISODate } from '../calendar/calendar-utils';

/** A date as the locale writes it in numbers, such as 28/05/2026 or 5/28/2026. */
export function formatDate(iso: ISODate, locale: string) {
  const p = parseIso(iso);
  return p ? new Intl.DateTimeFormat(locale, { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(p.year, p.month, p.day)) : '';
}

/** Order of day, month and year in the locale's numeric dates. */
const order = (locale: string) =>
  new Intl.DateTimeFormat(locale, { year: 'numeric', month: '2-digit', day: '2-digit' })
    .formatToParts(new Date(2026, 4, 28))
    .filter((p) => p.type === 'day' || p.type === 'month' || p.type === 'year')
    .map((p) => p.type);

/** Parse typed text: an ISO date, or three numbers in the locale's order. Returns null when it is not a real date. */
export function parseDate(text: string, locale: string): ISODate | null {
  const t = text.trim();
  if (parseIso(t)) return t.slice(0, 10);
  const nums = t.split(/\D+/).filter(Boolean).map(Number);
  if (nums.length !== 3) return null;
  const parts = Object.fromEntries(order(locale).map((k, i) => [k, nums[i]])) as Record<'day' | 'month' | 'year', number>;
  const year = parts.year < 100 ? 2000 + parts.year : parts.year;
  const iso = toIso(year, parts.month - 1, parts.day);
  return parseIso(iso)?.day === parts.day && parseIso(iso)?.month === parts.month - 1 ? iso : null;
}

/** Times are 24-hour HH:mm strings. */
export const formatTime = (time: string, locale: string) => {
  const m = /^(\d{2}):(\d{2})/.exec(time);
  return m ? new Intl.DateTimeFormat(locale, { hour: 'numeric', minute: '2-digit' }).format(new Date(2026, 0, 1, Number(m[1]), Number(m[2]))) : time;
};

/** Parse "9", "9:30", "9.30pm", "21:30" into HH:mm; null when it is not a time. */
export function parseTime(text: string): string | null {
  const m = /^\s*(\d{1,2})(?:[:.](\d{2}))?\s*([ap])?\.?m?\.?\s*$/i.exec(text);
  if (!m) return null;
  let hour = Number(m[1]);
  const minute = Number(m[2] ?? 0);
  const half = m[3]?.toLowerCase();
  if (half === 'p' && hour < 12) hour += 12;
  if (half === 'a' && hour === 12) hour = 0;
  if (hour > 23 || minute > 59) return null;
  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
}

/** Every half hour from 09:00 to 17:30, the usual working day. */
export const DEFAULT_TIMES = Array.from({ length: 18 }, (_, i) => `${String(9 + Math.floor(i / 2)).padStart(2, '0')}:${i % 2 ? '30' : '00'}`);
