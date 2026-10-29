function linearSearch(searchTerm, arr) {
  // Iterate through the array to find the first occurrence of searchTerm
  // loop through each element in the array
  // start from first element and use .length to determine the loop boundary
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element matches the searchTerm, use === for strict equality
    if (arr[i] === searchTerm) {
      // Return the index of the first matching element
      return i;
    }
  }
  // If no matching element is found, return undefined
  return undefined;
}

function globalLinearSearch(searchTerm, arr) {
  // Iterate through the array to find all occurrences of searchTerm
  // create a container to store the indices of all matching elements
  const indices = [];
  // Iterate through the array to find all occurrences of searchTerm
  // loop through each element in the array
  // start from first element and use .length to determine the loop boundary
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element matches the searchTerm, use === for strict equality
    if (arr[i] === searchTerm) {
      // Add the index of the matching element to the indices array
      indices.push(i);
    }
  }
  // Return the array of indices of all matching elements
  return indices;
}
// Export the search functions for use 
module.exports = { linearSearch, globalLinearSearch };

