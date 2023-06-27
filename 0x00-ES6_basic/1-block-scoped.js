// Declare and export a default function named "taskBlock" that takes a parameter "trueOrFalse"
export default function taskBlock(trueOrFalse) {
    // Declare a variable "task" and assign it the value false
    var task = false;
    // Declare a variable "task2" and assign it the value true
    var task2 = true;
    // Check the value of "trueOrFalse" in the conditional block
    if (trueOrFalse) {
      // Declare a new variable "task" inside the conditional block (not overwriting the outer "task" variable) and assign it the value true
      let task = true;
      // Declare a new variable "task2" inside the conditional block (not overwriting the outer "task2" variable) and assign it the value false
      let task2 = false;
    }
    // Return an array with the values of the "task" and "task2" variables
    return [task, task2];
  }
