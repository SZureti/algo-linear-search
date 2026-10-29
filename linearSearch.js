function linearSearch(searchTerm, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchTerm) {
      return i;
    }
  }
  return undefined;
}

function globalLinearSearch(searchTerm, arr) {
  const indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchTerm) {
      indices.push(i);
    }
  }
  return indices;
}
module.exports = { linearSearch, globalLinearSearch };
