// Define a function to get the current year
function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }

  // Export the function as the default export
  export default function getBudgetForCurrentYear(income, gdp, capita) {
    // Define an empty budget object
    const budget = {};

    // Set the properties on the budget object using computed property names with the current year
    budget[`income-${getCurrentYear()}`] = income;
    budget[`gdp-${getCurrentYear()}`] = gdp;
    budget[`capita-${getCurrentYear()}`] = capita;

    // Return the budget object
    return budget;
  }
