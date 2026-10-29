const { linearSearch, globalLinearSearch } = require("./linearSearch.js");

// Tests for linearSearch functions.

describe("tests linearSearch", () => {
  test("linearSearch(1, [1, 2, 3]) === 0", () => {
    expect(linearSearch(1, [1, 2, 3])).toBe(0);
  });

  test("linearSearch(3, [1, 2, 3]) === 2", () => {
    expect(linearSearch(3, [1, 2, 3])).toBe(2);
  });

  test("linearSearch(4, [1, 2, 3]) === undefined", () => {
    expect(linearSearch(4, [1, 2, 3])).toBe(undefined);
  });

  test("linearSearch(2, [1, 2, 3]) === 1", () => {
    expect(linearSearch(2, [1, 2, 3])).toBe(1);
  });

  test("linearSearch(1, [1, 1, 1]) === 0", () => {
    expect(linearSearch(1, [1, 1, 1])).toBe(0);
  });

  test("linearSearch(5, [1, 2, 3, 4, 5]) === 4", () => {
    expect(linearSearch(5, [1, 2, 3, 4, 5])).toBe(4);
  });

  test("linearSearch('a', ['a', 'b', 'a']) === 0", () => {
    expect(linearSearch('a', ['a', 'b', 'a'])).toBe(0);
  });

  test("linearSearch('1', [1, 2, 3]) === undefined", () => {
    expect(linearSearch('1', [1, 2, 3])).toBe(undefined);
  });
});

// Tests for globalLinearSearch functions.

describe("tests globalLinearSearch", () => {
  test("globalLinearSearch('a', 'bananas'.split('')) === [1, 3, 5]", () => {
    expect(globalLinearSearch("a", "bananas".split(""))).toEqual([1, 3, 5]);
  });

  test("globalLinearSearch('s', 'bananas'.split('')) === [6]", () => {
    expect(globalLinearSearch("s", "bananas".split(""))).toEqual([6]);
  });

  test("globalLinearSearch('n', 'bananas'.split('')) === [2, 4]", () => {
    expect(globalLinearSearch("n", "bananas".split(""))).toEqual([2, 4]);
  });

  test("globalLinearSearch('b', 'bananas'.split('')) === [0]", () => {
    expect(globalLinearSearch("b", "bananas".split(""))).toEqual([0]);
  });

  test("globalLinearSearch('z', 'bananas'.split('')) === []", () => {
    expect(globalLinearSearch("z", "bananas".split(""))).toEqual([]);
  });

  test("globalLinearSearch('a', 'apple'.split('')) === [0]", () => {
    expect(globalLinearSearch("a", "apple".split(""))).toEqual([0]);
  });

  test("globalLinearSearch('a', 'banana'.split('')) === [1, 3, 5]", () => {
    expect(globalLinearSearch("a", "banana".split(""))).toEqual([1, 3, 5]);
  });

  test("globalLinearSearch('1', [1, 2, 3]) === []", () => {
    expect(globalLinearSearch('1', [1, 2, 3])).toEqual([]);
  });
});

// Falsy values tests for linearSearch and globalLinearSearch.

describe("falsy values tests", () => {
  test("linearSearch(0, [0, 1, 2]) === 0", () => {
    expect(linearSearch(0, [0, 1, 2])).toBe(0);
  });

  test("linearSearch(false, [true, false, true]) === 1", () => {
    expect(linearSearch(false, [true, false, true])).toBe(1);
  });

  test("globalLinearSearch(0, [0, 1, 0, 2]) === [0, 2]", () => {
    expect(globalLinearSearch(0, [0, 1, 0, 2])).toEqual([0, 2]);
  });

  test("globalLinearSearch(false, [true, false, true, false]) === [1, 3]", () => {
    expect(globalLinearSearch(false, [true, false, true, false])).toEqual([1, 3]);
  });
});

// Empty array tests for linearSearch and globalLinearSearch.

describe("empty array tests", () => {
  test("linearSearch(1, []) === undefined", () => {
    expect(linearSearch(1, [])).toBe(undefined);
  });

  test("globalLinearSearch(1, []) === []", () => {
    expect(globalLinearSearch(1, [])).toEqual([]);
  });
});
