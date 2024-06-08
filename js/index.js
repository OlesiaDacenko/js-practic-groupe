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

// let login = prompt("enter login");
// console.log(login);

// if (login === "Admin") {
//   let password = prompt("enter password");
//   if (password === "Password") {
//     alert("Вітаю");
//   } else {
//     alert("Невірний пароль!");
//   }
//   // } else if (login === "" || login === null) {
// } else if (!login) {
//   alert("Canceled");
// } else {
//   alert("Я вас не знаю");
// }

/**
 *? При завантаженні сторінки користувачеві пропонується
 *? в prompt ввести число. Введення додається до значення
 *? змінної total.
 *? Операція введення числа триває до того часу,
 *? поки користувач не натисне кнопку Cancel у prompt.
 *? Після того як користувач припинив введення, натиснувши на
 *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
 
 *! Робити перевірку, що користувач ввів саме число,
 *! а не довільний набір символів не потрібно.
 */

// let num = prompt("Enter number");

// let total = 0;

// while (num !== null) {
//   total += Number(num);
//   num = prompt("Enter number");
// }

// alert(`Загальна сума введених чисел дорівнює ${total}.`);
/* Напишіть функцію, яка приймає об'єкт і рахує загальну суму зарплат працівників. */
// const someObj = {
//   worker1: 360,
//   worker2: 750,
//   worker3: 240,
// };

// function totalSelery(obj) {
//   let sum = 0;
//   const arr = Object.values(obj);
//   for (const item of arr) {
//     sum += item;
//   }
//   return sum;
// }

// console.log(totalSelery(someObj));

// напиши код який із массиву arr видаляє елемент foo.
// розвертає цей массив
// і повертає рядок js is the best
// вхідний массив не має змінюватись (мутується)
const arr = ["best", "the", "foo", "is", "js"];

const copyArr = [...arr];

const index = copyArr.indexOf("fooy");

if (index !== -1) {
  copyArr.splice(index, 1);
}

copyArr.reverse();

const string = copyArr.join(" ");
console.log(string);
console.log(arr);
