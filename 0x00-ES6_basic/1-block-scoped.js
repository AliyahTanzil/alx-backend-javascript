// Declare and export a default function named "taskBlock" that takes a parameter "trueOrFalse"
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;
  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }
  return [task, task2];
}