const add = function(num1, num2) {
	let sum = num1 + num2;
  return sum;
};

const subtract = function(num1, num2) {
	let answer = num1 - num2;
  return answer;
};

const sum = function(array) {
  let answer = 0;
  for(let count = 0; count < array.length; count++){
    answer += array[count];
  }
  return answer;
};

const multiply = function(array) {
  let answer = 1;
  for(let count = 0; count < array.length; count++){
    answer *= array[count];
  }
  return answer;
};

const power = function(num, pow) {
	let answer = 1;
  for(let count = 0; count < pow; count++){
    answer *= num;
  }
  return answer;
};

const factorial = function(num) {
  if(num === 0){
    return 1;
  }
  else {
    return num * factorial(num -1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
