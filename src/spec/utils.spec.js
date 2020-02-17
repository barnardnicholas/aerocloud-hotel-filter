const { expect } = require("chai");
const { detectMatch, removeItemFromArray } = require("../utils/utils");

// Takes a hotel object and an array of search terms and returns true/false if all facilities are present

describe("detectMatch", () => {
  it("1 - Returns a boolean", () => {
    const hotel = { name: "", starRating: 0, facilities: [] };
    const searchTerms = [];
    const actualResult = detectMatch(hotel, searchTerms);
    expect(actualResult).to.be.a("boolean");
  });
  it("2 - Returns true for a single correct search term", () => {
    const hotel = { name: "", starRating: 0, facilities: ["car park"] };
    const searchTerms = ["car park"];
    const actualResult = detectMatch(hotel, searchTerms);
    expect(actualResult).to.equal(true);
  });
  it("3 - Returns false for a single incorrect search term", () => {
    const hotel = { name: "", starRating: 0, facilities: ["pool"] };
    const searchTerms = ["car park"];
    const actualResult = detectMatch(hotel, searchTerms);
    expect(actualResult).to.equal(false);
  });
  it("4 - Returns true for multiple correct search terms", () => {
    const hotel = { name: "", starRating: 0, facilities: ["pool", "car park"] };
    const searchTerms = ["car park", "pool"];
    const actualResult = detectMatch(hotel, searchTerms);
    expect(actualResult).to.equal(true);
  });
  it("5 - Returns false for multiple incorrect search terms", () => {
    const hotel = {
      name: "",
      starRating: 0,
      facilities: ["spa", "ice machine"]
    };
    const searchTerms = ["car park", "pool"];
    const actualResult = detectMatch(hotel, searchTerms);
    expect(actualResult).to.equal(false);
  });
  it("6 - Returns false for multiple mixed search terms", () => {
    const hotel = {
      name: "",
      starRating: 0,
      facilities: ["car park", "ice machine"]
    };
    const searchTerms = ["car park", "pool"];
    const actualResult = detectMatch(hotel, searchTerms);
    expect(actualResult).to.equal(false);
  });
  it("7 - Returns true for no search terms", () => {
    const hotel = {
      name: "",
      starRating: 0,
      facilities: ["car park", "ice machine"]
    };
    const searchTerms = [];
    const actualResult = detectMatch(hotel, searchTerms);
    expect(actualResult).to.equal(true);
  });
});

describe("removeItemFromArray", () => {
  it("1 - Returns an array", () => {
    const testArray = ["A", "B", "C", "D"];
    const testItem = "A";
    const actualResult = removeItemFromArray(testArray, testItem);
    expect(actualResult).to.be.an("array");
  });
  it("2 - Does not mutate original array", () => {
    const testArray = ["A", "B", "C", "D"];
    const testArray2 = ["A", "B", "C", "D"];
    const testItem = "A";
    removeItemFromArray(testArray, testItem);
    expect(testArray).to.eql(testArray2);
  });
  it("3 - Returns copy of array with original item removed if item is present", () => {
    const testArray = ["A", "B", "C", "D"];
    const testItem = "A";
    const actualResult = removeItemFromArray(testArray, testItem);
    const expectedResult = ["B", "C", "D"];
    expect(actualResult).to.eql(expectedResult);
    expect(actualResult).to.not.equal(testArray);
  });
  it("4 - Returns copy of original array unchanged if item is not present", () => {
    const testArray = ["A", "B", "C", "D"];
    const testItem = "E";
    const actualResult = removeItemFromArray(testArray, testItem);
    expect(actualResult).to.eql(testArray);
    expect(actualResult).to.not.equal(testArray);
  });
});
