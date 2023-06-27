// Export the function as the default export
export default function getSanFranciscoDescription() {
    // Define the variable "year" with the value 2017
    const year = 2017;

    // Define the "budget" object with income, gdp, and capita properties
    const budget = {
      income: '$119,868',
      gdp: '$154.2 billion',
      capita: '$178,479',
    };

    // Return the description of San Francisco using template literals for variable substitution
    return `As of ${year}, it was the seventh-highest income county in the United States, 
    with a per capita personal income of ${budget.income}. As of 2015, San Francisco 
    proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
  }
  