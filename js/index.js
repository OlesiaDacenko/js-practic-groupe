/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

// const unswer = prompt("Яка офіційна назва JavaScript?");

// if (unswer === "ECMAScript") {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

/**
Напишіть програму, яка отримає від користувача
 число (кількість хвилин) та виведе в консоль
 рядок у форматі годин та хвилин
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 70 === 01:10
 **/

// const num = prompt("Введіть кількість хвилин");

// const hours = String(Math.floor(num / 60)).padStart(2, 0);

// // const min = num - hours * 60

// const min = String(num % 60).padStart(2, 0);

// console.log(`${hours}:${min}`);

/**
 *? Напишіть цикл, який виводить у консоль
 *? всі непарні числа  від max до min  за спаданням
 */
// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i--) {

//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

/**
*? Напишіть код, який питає
*? логін за допомогою prompt та логує результат
*? у консоль браузера
    
*? Якщо відвідувач вводить "Admin",
*? то prompt запитує пароль.
*? Якщо нічого не ввели або натиснуто клавішу Esc
*? вивести рядок "Canceled"
*? В іншому випадку вивести рядок "Я вас не знаю"
    
*? Пароль перевірять так:
*? Якщо введено пароль "Password",
*? то вивести рядок "Вітаю"
*? інакше виводить рядок "Невірний пароль!"
 */

let login = prompt("enter login");
console.log(login);

if (login === "Admin") {
  let password = prompt("enter password");
  if (password === "Password") {
    alert("Вітаю");
  } else {
    alert("Невірний пароль!");
  }
  // } else if (login === "" || login === null) {
} else if (!login) {
  alert("Canceled");
} else {
  alert("Я вас не знаю");
}
