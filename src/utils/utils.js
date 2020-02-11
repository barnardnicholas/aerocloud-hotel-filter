// Takes a hotel object and an array of search terms and returns true/false if all facilities are present

const detectMatch = (hotel, searchTerms) => {
  const { facilities } = hotel;
  let result = true;
  searchTerms.forEach(term => {
    if (!facilities.includes(term)) {
      result = false;
    }
  });
  return result;
};

module.exports = {
  detectMatch
};
