// Export the function as the default export
export default function appendToEachArrayValue(array, appendString) {
    // Iterate over each value in the array using the `for...of` loop
    for (let value of array) {
      // Append the `appendString` to each value in the array
      value = appendString + value;
    }

    // Return the modified array
    return array;
  }
