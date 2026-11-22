// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';
import { Stack, Text } from '@interlink/react/primitives';
import { ProgressIndicator } from '@interlink/react/progress-indicator';

/** Title: Interactive */
export default function Example() {
  const [step, setStep] = useState(0);
  return (
    <Stack space="space.200" alignInline="center">
      <Text>Step {step + 1} of 4</Text>
      <ProgressIndicator values={[1, 2, 3, 4]} selectedIndex={step} appearance="primary" onSelect={({ index }) => setStep(index)} />
    </Stack>
  );
}
