let currentNumber = '';
let previousNumber = '';
let currentOperator = '';
let decimal = false;
let negative = false;

const refreshScreen = function() {
  (currentOperator == '+') ? document.querySelector('#buttonAdd').classList.add('clicked') : document.querySelector('#buttonAdd').classList.remove('clicked');
  (currentOperator == '-') ? document.querySelector('#buttonSubtract').classList.add('clicked') : document.querySelector('#buttonSubtract').classList.remove('clicked');
  (currentOperator == '*') ? document.querySelector('#buttonMultiply').classList.add('clicked') : document.querySelector('#buttonMultiply').classList.remove('clicked');
  (currentOperator == '/') ? document.querySelector('#buttonDivide').classList.add('clicked') : document.querySelector('#buttonDivide').classList.remove('clicked');
  document.querySelector('.output').textContent = currentNumber;
  document.querySelector('.previousNumber').textContent = previousNumber + ' ' + currentOperator;
}

const equals = function(){
  switch(currentOperator) {
    case '+':
      previousNumber = +previousNumber + +currentNumber;
      break;
    case '-':
      previousNumber -= currentNumber;
      break;
    case '*':
      previousNumber *= currentNumber;
      break;
    case '/':
      previousNumber /= currentNumber;
      break;
  }
  currentNumber = previousNumber;
  currentOperator = '';
  negative = false;
  decimal = false;
  refreshScreen();
}

const percent = function(){
  currentNumber /= 100;
  refreshScreen();
}

const changeSign = function(){
  if (!negative) {
    currentNumber = '-' + currentNumber;
    negative = true;
  } else {
    currentNumber.replace('-','');
    negative = false;
  }
  refreshScreen();
}

const decimalClicked = function(){
  if (!decimal) {
    currentNumber += '.';
    decimal = true;
  }
  refreshScreen();
}

const operator = function(operator) {
  (currentOperator != '') ? equals() : currentOperator = '';
  previousNumber = currentNumber;
  currentNumber = '0';
  negative = false;
  decimal = false;
  currentOperator = operator;
  refreshScreen();
}

const insertNumber = function(number) {
  if (currentNumber == '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
  refreshScreen();
}

const clear = function() {
  currentNumber = 0;
  previousNumber = 0;
  currentOperator = ''; 
  refreshScreen();
}

window.addEventListener('load', function () {
  document.querySelector('#buttonAdd').addEventListener("click", function() {operator('+')});
  document.querySelector('#buttonSubtract').addEventListener("click", function() {operator('-')});
  document.querySelector('#buttonMultiply').addEventListener("click", function() {operator('*')});
  document.querySelector('#buttonDivide').addEventListener("click", function() {operator('/')});
  document.querySelector('#buttonClear').addEventListener("click", function() {clear()});
  document.querySelector('#buttonEquals').addEventListener("click", function() {equals()});
  document.querySelector('#buttonPercent').addEventListener("click", function() {percent()});
  document.querySelector('#buttonSign').addEventListener("click", function() {changeSign()});
  document.querySelector('#buttonDecimal').addEventListener("click", function() {decimalClicked()});
  document.querySelector('#button1').addEventListener("click", function() {insertNumber('1')});
  document.querySelector('#button2').addEventListener("click", function() {insertNumber('2')});
  document.querySelector('#button3').addEventListener("click", function() {insertNumber('3')});
  document.querySelector('#button4').addEventListener("click", function() {insertNumber('4')});
  document.querySelector('#button5').addEventListener("click", function() {insertNumber('5')});
  document.querySelector('#button6').addEventListener("click", function() {insertNumber('6')});
  document.querySelector('#button7').addEventListener("click", function() {insertNumber('7')});
  document.querySelector('#button8').addEventListener("click", function() {insertNumber('8')});
  document.querySelector('#button9').addEventListener("click", function() {insertNumber('9')});
  document.querySelector('#button0').addEventListener("click", function() {insertNumber('0')});
  clear();  
})

