// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { Card, FieldShape, Gap, Skeleton } from '../../../src/kit';

function Field() {
  return (
    <Stack space="space.075">
      <Skeleton width="25%" size="label" />
      <FieldShape />
    </Stack>
  );
}

/** Every field in the form sits the same distance from the next. */
export default function Example() {
  return (
    <Card width="20rem">
      <Skeleton width="45%" size="heading" tone="strong" />
      <Gap space="space.200" />
      <Field />
      <Gap space="space.200" />
      <Field />
      <Gap space="space.200" verdict="good" />
      <Field />
    </Card>
  );
}
