const { sum } = require('../src/sum');

describe('sum()', () => {
  test('adds positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('adds negatives', () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  test('throws on non-number', () => {
    expect(() => sum('a', 2)).toThrow(TypeError);
  });
});
