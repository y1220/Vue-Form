let result = 0;
let log = [];
console.log("Hello from script.js");

console.log(result);

function addNumbers() {
  result = result + parseInt(userInput.value);
  log.push(parseInt(userInput.value));
  outputResult(result);
  console.log("current log: ", log);
} // This function is hoisted to the top of the file, so it can be called before it is defined.

function logger() {
  console.log("Hello from logger");
}

function clear() {
  result = 0;
  log.splice(0);
  outputResult(result);
  console.log("log: ", log);
}

clearButton.addEventListener("click", clear);
addButton.addEventListener("click", addNumbers);
