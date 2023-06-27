// Export the function as the default export
export default function createEmployeesObject(departmentName, employees) {
    // Create an object with the departmentName and employees properties
    const employeesObject = {
      departmentName,
      employees,
    };

    // Return the employeesObject
    return employeesObject;
  }
