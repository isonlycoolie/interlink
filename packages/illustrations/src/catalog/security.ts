// SPDX-License-Identifier: Apache-2.0
import { maker } from './types';

const x = maker('Security and identity');

export const security = [
  x('two-factor', 'A second step to sign in', ['2fa', 'mfa', 'code']),
  x('password', 'Set a strong password', ['password', 'key', 'sign in']),
  x('identity-check', 'Prove who you are', ['kyc', 'id', 'verify']),
  x('audit-log', 'Every action recorded', ['audit', 'log', 'compliance']),
  x('permissions', 'Who can do what', ['permissions', 'access', 'roles']),
  x('privacy', 'Your data stays private', ['privacy', 'hidden', 'eye']),
  x('fraud-alert', 'Suspicious activity stopped', ['fraud', 'alert', 'risk']),
  x('backup', 'A copy kept safe', ['backup', 'restore', 'copy']),
  x('single-sign-on', 'One sign in for everything', ['sso', 'login', 'saml']),
  x('api-key', 'A key for your code', ['api key', 'token', 'secret']),
];
