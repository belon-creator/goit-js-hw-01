const credits = 23500;
const pricePerDroid = 3000;
const userInput = prompt('сколько дроидов вы хотите купить?');

const total = credits - userInput * pricePerDroid;

if (userInput === null) {
  alert('Отменено пользователем!');
} else if (total > credits) {
  alert('Недостаточно средств на счету!');
} else {
  alert(`Вы купили ${userInput} дроидов, на счету осталось ${total} кредитов.`);
}
