const { expect } = require("chai");
const { detectMatch } = require("../utils/utils");

describe("detectMatch", () => {
  it("returns an array", () => {
    const hotel = { name: "", starRating: 0, facilities: [] };
    const searchTerm = [];
    const actualResult = utils.detectMatch(hotel, searchTerm);
    expect(actualResult).to.be.an("object");
  });
});
