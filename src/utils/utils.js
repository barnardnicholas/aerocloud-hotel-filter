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

const removeItemFromArray = (array, item) => {
  if (!array.includes(item) || !item) {
    return [...array];
  } else {
    return array.filter(element => {
      return element !== item;
    });
  }
};

module.exports = {
  detectMatch,
  removeItemFromArray
};
