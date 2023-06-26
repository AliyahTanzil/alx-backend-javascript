// Declare a function named "taskFirst" and export it as a module
export function taskFirst() {
    // Declare a constant variable "task" and assign it the value 'I prefer const when I can.'
    const task = 'I prefer const when I can.';
    
    // Return the value of the "task" variable
    return task;
  }
  
  // Declare a function named "getLast" and export it as a module
  export function getLast() {
    // Return the string ' is okay'
    return ' is okay';
  }
  
  // Declare a function named "taskNext" and export it as a module
  export function taskNext() {
    // Declare a variable "combination" and assign it the value 'But sometimes let'
    let combination = 'But sometimes let';
  
    // Concatenate the result of calling the "getLast" function to the "combination" variable
    combination += getLast();
  
    // Return the value of the "combination" variable
    return combination;
  }
  