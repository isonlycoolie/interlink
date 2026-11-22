// SPDX-License-Identifier: Apache-2.0
import { AvatarGroup } from '@interlink/react/avatar';

/** Title: Avatar group */
export default function Example() {
  return (
    <AvatarGroup maxCount={4} data={[{ name: 'Kai Moto' }, { name: 'Lena Ruiz' }, { name: 'Omar Haddad' }, { name: 'Sam Ito' }, { name: 'Ada Byron' }, { name: 'Eli Cole' }]} />
  );
}
