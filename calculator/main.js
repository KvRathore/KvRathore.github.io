/* BUTTONS */
const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const reset = document.querySelector('.reset');
const del = document.querySelector('.del');
const equal = document.querySelector('.equal');

/* DISPLAY */
const display = document.querySelector('.display');

let addition = [];
let substraction = [];
let multiplication = [];
let division = [];

let currentOp = '+';
let currentValue = '';
let expression = '';

/*-----------------------------------------------------*/
/* EVENT LISTENERS */
/*-----------------------------------------------------*/
numbers.forEach(nummber => {
  nummber.addEventListener('click', () =>
    calcCurrentValue(nummber.textContent)
  );
});

del.addEventListener('click', () => deleteCharacter());

operators.forEach(opr =>
  opr.addEventListener('click', () => identify(opr.textContent))
);

reset.addEventListener('click', () => resetCalc());

equal.addEventListener('click', () => calculate());
/*-----------------------------------------------------*/
/* FUNCTIONS */
/*-----------------------------------------------------*/

// currentValue = '';
const calcCurrentValue = value => {
  currentValue += value;
  displayCurrentValue();
};

// display
const displayCurrentValue = () => {
  display.textContent = currentValue;
};

// delete characters
const deleteCharacter = () => {
  if (currentValue.length >= 1 && currentValue !== '') {
    currentValue = currentValue.slice(0, -1);
    displayCurrentValue();
  }
};

// operator
const identify = opr => {
  lastOp();

  currentValue = '';

  if (opr === '+') {
    currentOp = '+';
  }

  if (opr === '-') {
    currentOp = '-';
  }

  if (opr === 'x') {
    currentOp = '*';
  }

  if (opr === '/') {
    currentOp = '/';
  }
};

// last operator
const lastOp = () => {
  if (currentValue !== '') {
    if (currentOp === '+') {
      if (expression.length >= 1) {
        expression += `+${currentValue}`;
      } else {
        expression += currentValue;
      }
    }

    if (currentOp === '-') {
      if (expression.length >= 1) {
        expression += `-${currentValue}`;
      } else {
        expression += currentValue;
      }
    }

    if (currentOp === '*') {
      if (expression.length >= 1) {
        expression += `*${currentValue}`;
      } else {
        expression += currentValue;
      }
    }

    if (currentOp === '/') {
      if (expression.length >= 1) {
        expression += `/${currentValue}`;
      } else {
        expression += currentValue;
      }
    }
  }

  //   console.log(addition);
  //   console.log(substraction);
  //   console.log(multiplication);
  //   console.log(division);
};

// RESET
const resetCalc = () => {
  addition = [];
  substraction = [];
  division = [];
  multiplication = [];
  currentValue = '';
  expression = '';
  currentOp = '+';
  displayCurrentValue();
};

// calculate
const calculate = () => {
  // to push last number in specific array.
  lastOp();
  console.log(`Inital Exp - ${expression}`);

  let addSum = 0;
  let subSum = 0;
  let mulSum = 1;
  let divSum = 1;
  let answer = 0;

  if (expression.length >= 1) {
    answer = eval(expression);
  }

  //   console.log(addition, multiplication, mulSum, addSum);

  //   reseting all the values to save the current total.
  addition = [];
  substraction = [];
  multiplication = [];
  division = [];

  currentOp = '+';
  currentValue = '';
  expression = String(answer);
  console.log(expression);

  display.textContent = answer;
};
