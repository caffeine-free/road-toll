/* eslint-disable no-undef */
const { isEmailValid } = require('../../src/utils/index');

describe('isEmailValid', () => {
  it('email lucas@email.com must be valid (true)', () => {
    const valid = isEmailValid('lucas@email.com');
    expect(valid).toBe(true);
  });

  it('email lucasemail.com must be invalid (false)', () => {
    const valid = isEmailValid('lucasemail.com');
    expect(valid).toBe(false);
  });
});
