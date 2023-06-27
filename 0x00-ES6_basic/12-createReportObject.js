// Export the function as the default export
export default function createReportObject(employeesList) {
    // Create an object with the allEmployees key and a method property
    const reportObject = {
      allEmployees: {
        ...employeesList,
      },
      getNumberOfDepartments() {
        return Object.keys(this.allEmployees).length;
      },
    };

    // Return the reportObject
    return reportObject;
  }
