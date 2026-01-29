import { expect } from 'vitest';
import * as jestDomMatchers from '@testing-library/jest-dom/matchers';
import * as React from 'react';

// Ensure React is available globally for transformed JSX in tests
globalThis.React = React;

const matchers = jestDomMatchers.default ?? jestDomMatchers;
if (matchers && typeof matchers === 'object') {
  expect.extend(matchers);
}
