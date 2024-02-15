const { compterMots, inverserChaine, camelCase } = require('../index');

describe('TextUtils Functions', () => {
  test('compterMots counts words correctly', () => {
    expect(compterMots('Hello world')).toBe(2);
    expect(compterMots('')).toBe(0);
  });

  test('inverserChaine reverses string correctly', () => {
    expect(inverserChaine('Hello')).toBe('olleH');
    expect(inverserChaine('')).toBe('');
  });

  test('camelCase converts to camelCase correctly', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
    expect(camelCase('Hello world')).toBe('helloWorld');
    expect(camelCase('')).toBe('');
  });
});
