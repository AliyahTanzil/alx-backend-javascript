// Export the function as the default export
export default function getBudgetObject(income, gdp, capita) {
    // Define the budget object using the key names directly
    const budget = {
      income,
      gdp,
      capita,
    };
    // Return the budget object
    return budget;
  }
