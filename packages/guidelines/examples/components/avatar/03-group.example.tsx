// SPDX-License-Identifier: Apache-2.0
import { AvatarGroup } from '@interlink/react/avatar';
import { people } from '../../../src/people';

/** Title: Avatar group */
export default function Example() {
  const team = [people.amara, people.kwame, people.zawadi, people.tunde, people.imani, people.kofi, people.neema];
  return <AvatarGroup maxCount={5} data={team.map((p) => ({ name: p.name, src: p.photo }))} />;
}
