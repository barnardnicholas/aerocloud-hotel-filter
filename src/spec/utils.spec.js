const { expect } = require("chai");
const { detectMatch } = require("../utils/utils");

describe("detectMatch", () => {
  it("returns a boolean", () => {
    const hotel = { name: "", starRating: 0, facilities: [] };
    const searchTerms = [];
    const actualResult = detectMatch(hotel, searchTerms);
    expect(actualResult).to.be.a("boolean");
  });
});
