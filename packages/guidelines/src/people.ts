// SPDX-License-Identifier: Apache-2.0
/**
 * Sample people for examples and screens. Photos are served by the docs site from /photos (see
 * apps/docs/public/photos/CREDITS.md). Names are invented and do not belong to the people shown.
 */
export interface Person {
  name: string;
  role: string;
  photo: string;
}

const p = (slug: string, name: string, role: string): Person => ({ name, role, photo: `/photos/people/${slug}.webp` });

export const people = {
  amara: p('amara-okafor', 'Amara Okafor', 'Head of product'),
  zawadi: p('zawadi-mushi', 'Zawadi Mushi', 'Product designer'),
  neema: p('neema-kileo', 'Neema Kileo', 'Finance lead'),
  imani: p('imani-achieng', 'Imani Achieng', 'Software engineer'),
  folake: p('folake-adeyemi', 'Folake Adeyemi', 'Operations director'),
  wanjiru: p('wanjiru-kamau', 'Wanjiru Kamau', 'Customer success'),
  kwame: p('kwame-mensah', 'Kwame Mensah', 'Engineering manager'),
  tunde: p('tunde-bakare', 'Tunde Bakare', 'Frontend engineer'),
  baraka: p('baraka-mwangi', 'Baraka Mwangi', 'Data analyst'),
  jabari: p('jabari-otieno', 'Jabari Otieno', 'Backend engineer'),
  kofi: p('kofi-asante', 'Kofi Asante', 'Chief executive'),
  juma: p('juma-hassan', 'Juma Hassan', 'Support specialist'),
  emeka: p('emeka-obi', 'Emeka Obi', 'Product marketing'),
  sipho: p('sipho-ndlovu', 'Sipho Ndlovu', 'Security engineer'),
} satisfies Record<string, Person>;

export const scenes = {
  teamReview: '/photos/scenes/team-review.webp',
  teamMeeting: '/photos/scenes/team-meeting.webp',
  twoColleagues: '/photos/scenes/two-colleagues.webp',
  callsAndLaptop: '/photos/scenes/calls-and-laptop.webp',
  serverRoom: '/photos/scenes/server-room.webp',
  deskWork: '/photos/scenes/desk-work.webp',
};
