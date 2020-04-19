'use strict';

let userInput = prompt('Введите страну');
userInput = userInput.toLowerCase();
let price;
let delivery;

switch (userInput) {
  case 'китай':
    delivery = 'Китай';
    price = 100;
    alert(`Доставка в ${delivery} будет стоить ${price} кредитов`);
    break;

  case 'чили':
    delivery = 'Чили';
    price = 250;
    alert(`Доставка в ${delivery} будет стоить ${price} кредитов`);
    break;

  case 'австралия':
    delivery = 'Австралия';
    price = 170;
    alert(`Доставка в ${delivery} будет стоить ${price} кредитов`);
    break;

  case 'индия':
    delivery = 'Индия';
    price = 80;
    alert(`Доставка в ${delivery} будет стоить ${price} кредитов`);
    break;

  case 'ямайка':
    delivery = 'Ямайка';
    price = 120;
    alert(`Доставка в ${delivery} будет стоить ${price} кредитов`);
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
