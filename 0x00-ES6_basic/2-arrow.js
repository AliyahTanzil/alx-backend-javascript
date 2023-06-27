// Export the function as the default export
export default function getNeighborhoodsList() {
    // Declare an array property "sanFranciscoNeighborhoods" on the "this" object and assign it initial values
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
    // Assign "this" to a constant variable "self" to maintain the reference to the outer context
    const self = this;
    // Define the "addNeighborhood" property on the "this" object using an arrow function
    this.addNeighborhood = (newNeighborhood) => {
      // Access the "sanFranciscoNeighborhoods" property through "self" and push the new neighborhood to the array
      self.sanFranciscoNeighborhoods.push(newNeighborhood);
      // Return the updated array of neighborhoods
      return self.sanFranciscoNeighborhoods;
    };
  }

