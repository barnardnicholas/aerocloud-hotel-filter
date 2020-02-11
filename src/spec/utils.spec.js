const { expect } = require("chai");
const { detectMatch } = require("../utils/utils");

describe("detectMatch", () => {
  it("1 - Returns a boolean", () => {
    const hotel = { name: "", starRating: 0, facilities: [] };
    const searchTerms = [];
    const actualResult = detectMatch(hotel, searchTerms);
    expect(actualResult).to.be.a("boolean");
  });
  it("2 - Returns true for a single search term", () => {
    const hotel = { name: "", starRating: 0, facilities: ["car park"] };
    const searchTerms = ["car park"];
    const actualResult = detectMatch(hotel, searchTerms);
    expect(actualResult).to.equal(true);
  });
});
