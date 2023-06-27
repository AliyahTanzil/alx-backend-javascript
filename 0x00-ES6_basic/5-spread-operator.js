// Export the function as the default export
export default function concatArrays(array1, array2, string) {
    // Concatenate array1, array2, and each character of the string using spread syntax
    return [...array1, ...array2, ...string];
  }
