// SPDX-License-Identifier: Apache-2.0
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  transpilePackages: ['@interlink/guidelines'],
  // Two static-generation workers: each one highlights code with shiki, and more run out of memory on small machines.
  experimental: { cpus: 2 },
};

export default withMDX(config);
