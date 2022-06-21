const add = function(num1, num2) {
  return num1 + num2; 
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) { 
  return array.reduce(
    (total, current) => total + current,
    0);
};

const multiply = function(array) {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem) : 0;
};

const divide = function(array) {
  if (array.includes(0)){
    return "ERROR"
  } else{
    return array.length
    ? array.reduce((accumulator, nextItem) => accumulator / nextItem) : 0;
  }

};

const power = function(num,power) {
  const newNum = num;
	for (let i = 1; i < power; i++){
    num = num * newNum;
  }
  return num;
};

const factorial = function(num) {
  let newNum = 1;
  for (let i = num; i > 1; i--){
      newNum = newNum * i;
  }
  return newNum;
};

function operate(num1, num2){
  add(num1, num2);
};


// // Do not edit below this line
// module.exports = {
//   add,
//   subtract,
//   sum,
//   multiply,
//   power,
//   factorial,
//   divide
// };
