const addButton = document.getElementById("btn-add");
const clearButton = document.getElementById("btn-clear");

const userInput = document.getElementById("input-number");
const currentProcess = document.getElementById("current-calculation");
const currentResultOutput = document.getElementById("current-result");

function outputResult(result, process) {
  console.log(currentResultOutput);
  currentProcess.innerHTML = process ?? "";
  currentResultOutput.textContent = result;
}
console.log("Hello from base.js");
