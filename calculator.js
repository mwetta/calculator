let displayArray = [];
let numberArray = [];
let operatorArray = [];
let currentDisplay = '';
const display = document.querySelector('.display');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (button.className === 'digit') {
      displayNumber(button.name);
    } else if (button.className === 'operator'){
      activeOperator(button.name);
    } else if (button.className === 'equal'){
      pushToNumberArray();
      operate(numberArray,operatorArray);
    } else if (button.name === 'clear') {
      clearAll();
    }
  });
});

const displayNumber = function(digit) {
  displayArray.push(digit);
  currentDisplay = displayArray.join('');
  display.textContent = `${currentDisplay}`;
};

const displayResult = function(result) {
  displayArray = result;
  numberArray.splice(0, 2, result);
  display.textContent = `${numberArray[0]}`;
};

const activeOperator = function(currentOperator) {
  operatorArray.push(currentOperator);
  displayArray.push(currentOperator);
  pushToNumberArray();
  clearDisplay();
}

function pushToNumberArray(){
  numberArray.push(currentDisplay);
}

function clearDisplay() {
  displayArray = [];
  display.textContent = `${currentDisplay}`;
}

function clearAll(){
  displayArray = [];
  numberArray = [];
  operatorArray = [];
  currentDisplay = '';
  display.textContent = '';
}

function operate(numberArray, operatorArray){
  clearDisplay();
  let d = 0;
  let i = numberArray.length;
  for (i; i > 0; i--){
    switch(operatorArray[d]){
      case '+':
        displayResult(add(numberArray[0],numberArray[1]));
        d++;
        break;
      case '÷':
        displayResult(divide(numberArray[0],numberArray[1]));
        d++;
        break;
      case 'x':
        displayResult(multiply(numberArray[0],numberArray[1]));
        d++;
        break;
      case '-':
        displayResult(subtract(numberArray[0],numberArray[1]));
        d++;
        break;
      }
    }
  }

const add = function(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  return num1 + num2; 
};

const subtract = function(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
	return num1 - num2;
};

const multiply = function(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  return num1 * num2;
};

const divide = function(num1,num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  if (num1 === 0 || num2 === 0){
    return "ERROR";
  } else{
    return num1 / num2;
  }
};


// const power = function(num,power) {
//   const newNum = num;
// 	for (let i = 1; i < power; i++){
//     num = num * newNum;
//   }
//   return num;
// };

// const factorial = function(num) {
//   let newNum = 1;
//   for (let i = num; i > 1; i--){
//       newNum = newNum * i;
//   }
//   return newNum;
// };
