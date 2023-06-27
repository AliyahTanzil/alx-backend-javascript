// Export the function as the default export
export default function createIteratorObject(report) {
    // Initialize the variables for tracking the current department and employee index
    let currentDepartment = 0;
    let currentEmployee = 0;
  
    // Create an iterator object with a `next` method
    const iterator = {
      next() {
        // Check if all departments have been iterated
        if (currentDepartment >= Object.keys(report.allEmployees).length) {
          return { done: true };
        }
  
        // Get the current department name
        const departmentName = Object.keys(report.allEmployees)[currentDepartment];
  
        // Get the current department employees
        const departmentEmployees = report.allEmployees[departmentName];
  
        // Check if all employees in the current department have been iterated
        if (currentEmployee >= departmentEmployees.length) {
          // Move to the next department
          currentDepartment++;
          currentEmployee = 0;
          // Recursive call to the `next` method to continue iteration
          return this.next();
        }
        // Get the current employee name
        const employeeName = departmentEmployees[currentEmployee];
        // Move to the next employee index
        currentEmployee++;

        // Return the current employee object with the value and `done` status
        return { value: employeeName, done: false };
      },
    };

    // Return the iterator object
    return iterator;
  }
