import test from 'node:test';
import assert from 'node:assert';

import say from '../src/internal-esmodule.js';

// eslint-disable-next-line no-unused-vars
test('Success test', async (t) => {
  assert.strictEqual(say(), 'Hello, Internal ES Module!');
});
