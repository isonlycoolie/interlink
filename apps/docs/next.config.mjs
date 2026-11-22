// SPDX-License-Identifier: Apache-2.0
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  transpilePackages: ['@interlink/guidelines'],
};

export default withMDX(config);
