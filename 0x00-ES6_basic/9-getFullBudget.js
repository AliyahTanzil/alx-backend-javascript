// Import the getBudgetObject function from './7-getBudgetObject.js'
import getBudgetObject from './7-getBudgetObject.js';

// Export the function as the default export
export default function getFullBudgetObject(income, gdp, capita) {
  // Get the budget object using the getBudgetObject function
  const budget = getBudgetObject(income, gdp, capita);

  // Define the fullBudget object with ES6 method properties
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  // Return the fullBudget object
  return fullBudget;
}
