// SPDX-License-Identifier: Apache-2.0
'use client';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';

const SAMPLES = {
  JavaScript: `import { Fieldline } from '@fieldline/sdk';

const client = new Fieldline({ key: process.env.FIELDLINE_KEY });
const run = await client.jobs.create({ pipeline: 'nightly-report' });
console.log(run.status); // "queued"`,
  Python: `from fieldline import Fieldline

client = Fieldline(key=os.environ["FIELDLINE_KEY"])
run = client.jobs.create(pipeline="nightly-report")
print(run.status)  # "queued"`,
  cURL: `curl https://api.fieldline.example/v2/jobs \\
  -H "Authorization: Bearer $FIELDLINE_KEY" \\
  -d pipeline=nightly-report`,
};

/** The same first request in three languages, one tab each. */
export function CodeSamples() {
  return (
    <div className="scr-code-card">
      <Tabs id="sdk">
        <TabList aria-label="Language">
          {Object.keys(SAMPLES).map((lang) => (
            <Tab key={lang}>{lang}</Tab>
          ))}
        </TabList>
        {Object.entries(SAMPLES).map(([lang, code]) => (
          <TabPanel key={lang}>
            <pre className="scr-code" aria-label={`${lang} example`}>
              <code>{code}</code>
            </pre>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}
