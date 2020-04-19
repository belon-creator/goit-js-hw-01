'use strict';

let total = 0;

do {
  let userInput = prompt('Введите число');

  if (userInput === null) {
    break;
  }

  userInput = Number(userInput);

  total += userInput;
} while (true);

alert(`Общая сумма ${total}`);
