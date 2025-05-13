const { sum } = require('./index');

describe("テストスイート", () => {
	test("sumのテスト", () => { expect(sum(2, 3)).toBe(5); });
	test("sumのテスト２", () => { expect(sum(1, 3)).toBe(4) });
});