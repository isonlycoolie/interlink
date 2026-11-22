// SPDX-License-Identifier: Apache-2.0
import { Image } from '@interlink/react/image';

/** Title: Light and dark sources */
export default function Example() {
  return (
    <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='120'%3E%3Crect width='240' height='120' rx='12' fill='%23E9F2FE'/%3E%3Crect x='24' y='28' width='120' height='12' rx='6' fill='%23669DF1'/%3E%3Crect x='24' y='56' width='180' height='12' rx='6' fill='%23CFE1FD'/%3E%3C/svg%3E" srcDark="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='120'%3E%3Crect width='240' height='120' rx='12' fill='%231C2B42'/%3E%3Crect x='24' y='28' width='120' height='12' rx='6' fill='%23669DF1'/%3E%3Crect x='24' y='56' width='180' height='12' rx='6' fill='%23123263'/%3E%3C/svg%3E" alt="Two progress bars on a card" width={240} height={120} />
  );
}
