import { cleanup } from '@testing-library/react';
import deepMerge from './deep-merge';

afterEach(cleanup);

describe('Deep Merge', function () {
  it('Should merge two simple object', () => {
    const mergedObject = deepMerge({ a: 1 }, { b: 2 });

    expect(mergedObject).toEqual({ a: 1, b: 2 });
  });

  it('Should merge two deep object', () => {
    const mergedObject = deepMerge({ a: 1, b: { c: 2 } }, { b: { d: 3 } });

    expect(mergedObject).toEqual({ a: 1, b: { c: 2, d: 3 } });
  });

  it('Should merge two deep object with different keys', () => {
    const mergedObject = deepMerge({ a: 1, b: { c: 3 } }, { a: 2, b: { d: 4 } });

    expect(mergedObject).toEqual({ a: 2, b: { c: 3, d: 4 } });
  });

  it('Should merge two deep object with array', () => {
    const mergedObject = deepMerge({ a: 1, b: { c: [1, 2] } }, { b: { c: [3, 4], d: 3 } });

    expect(mergedObject).toEqual({ a: 1, b: { c: [1, 2, 3, 4], d: 3 } });
  });
});
