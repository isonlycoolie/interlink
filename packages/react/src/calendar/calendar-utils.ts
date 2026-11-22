// SPDX-License-Identifier: Apache-2.0
/** Calendar dates are ISO strings (YYYY-MM-DD) in local time: they compare and sort as plain strings. */
export type ISODate = string;
export type WeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;

const pad = (n: number) => String(n).padStart(2, '0');
/** Month is 0-based, like Date. */
export const toIso = (year: number, month: number, day: number): ISODate => {
  const d = new Date(year, month, day);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};
export function parseIso(iso: string | undefined): { year: number; month: number; day: number } | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso ?? '');
  if (!m) return null;
  const [year, month, day] = [Number(m[1]), Number(m[2]) - 1, Number(m[3])];
  return toIso(year, month, day) === `${m[1]}-${m[2]}-${m[3]}` ? { year, month, day } : null;
}
export const todayIso = () => {
  const d = new Date();
  return toIso(d.getFullYear(), d.getMonth(), d.getDate());
};
export const addDays = (iso: ISODate, n: number) => {
  const p = parseIso(iso)!;
  return toIso(p.year, p.month, p.day + n);
};
/** Same day in another month, clamped to that month's last day. */
export const addMonths = (iso: ISODate, n: number) => {
  const p = parseIso(iso)!;
  const last = new Date(p.year, p.month + n + 1, 0).getDate();
  return toIso(p.year, p.month + n, Math.min(p.day, last));
};

/** The weeks shown for a month: whole weeks from the week that holds the 1st to the week that holds the last day. */
export function weeksOf(year: number, month: number, weekStartDay: WeekDay): ISODate[][] {
  const first = new Date(year, month, 1);
  const lead = (first.getDay() - weekStartDay + 7) % 7;
  const days = new Date(year, month + 1, 0).getDate();
  const total = Math.ceil((lead + days) / 7) * 7;
  const weeks: ISODate[][] = [];
  for (let i = 0; i < total; i++) {
    if (i % 7 === 0) weeks.push([]);
    weeks[weeks.length - 1]!.push(toIso(year, month, 1 - lead + i));
  }
  return weeks;
}

/** Short and long weekday names in display order, from the locale. */
export function weekdays(locale: string, weekStartDay: WeekDay) {
  // 1 January 2023 was a Sunday, so day n of that week is weekday n.
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(2023, 0, 1 + ((i + weekStartDay) % 7));
    return { short: new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(d), long: new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(d) };
  });
}
export const monthTitle = (locale: string, year: number, month: number) => new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(new Date(year, month, 1));
export const longDate = (locale: string, iso: ISODate) => {
  const p = parseIso(iso)!;
  return new Intl.DateTimeFormat(locale, { dateStyle: 'full' }).format(new Date(p.year, p.month, p.day));
};

export interface DateRules {
  minDate?: ISODate;
  maxDate?: ISODate;
  disabled?: ISODate[];
  disabledDateFilter?: (iso: ISODate) => boolean;
}
export const isDisabledDate = (iso: ISODate, r: DateRules) =>
  (!!r.minDate && iso < r.minDate) || (!!r.maxDate && iso > r.maxDate) || !!r.disabled?.includes(iso) || !!r.disabledDateFilter?.(iso);
