// manipulacion del dom

// var prevScrollpos = window.scrollY;
// window.onscroll = function () {
//   var currentScrollPos = window.scrollY;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// };

const title = document.createElement("h1");
title.innerText = "Hola soy Goku";

const button = document.createElement("button");
button.innerText = "click";

const buttonName = document.createElement("button");
buttonName.innerText = "getName";
buttonName.style = "color:red; background: blue;";

button.addEventListener("click", () => {
  document.body.innerHTML = `
  <table>
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>
</table>
  `;

  let table = document.getElementsByTagName("tbody");
  table[0]?.insertAdjacentHTML(
    "afterend",
    `
    <tr>
        <td>March</td>
        <td>$1000</td>
    </tr>
`
  );
});

buttonName.addEventListener("click", () => {
  let nameInput = document.getElementById("name");
  let nameValue = nameInput.value;
  if (nameValue.trim().length == 0) {
    alert("tenes que poner tu nombre :D");
  }
});

document.body.append(title);
document.body.append(button);
document.body.append(buttonName);

// Destructuracion
const myObj = {
  a: "Hola",
  b: "Soy",
};

const { a, b } = myObj;

//String literals
const hola = `${a} ${b}`;

// // ************** indexOf *****************
// const emojis = ['✨', '🥑', '😍']

// const tieneCorazon = emojis.indexOf('😍')

// console.log(tieneCorazon) // -> 2
// // ************** fin *****************

// // ************** includes *****************
// const emojis = ['✨', '🥑', '😍']

// const tieneCorazon = emojis.includes('😍')

// console.log(tieneCorazon) // -> true
// // ************** fin *****************

// // ************** some *****************
// const emojis = ['✨', '🥑', '😍']

// const tieneCorazon = emojis.some(emoji => emoji === '😍')
// console.log(tieneCorazon) // -> true
// // ************** fin *****************

// // ************** every *****************
// // ¿Todos los emojis son felices?
// const emojis = ["😀", "😂", "😍", "😭", "🥺", "😎"];
// const todosSonFelices = emojis.every((emoji) => emoji === "😀");
// console.log(todosSonFelices); //
// // ************** fin *****************

// // ************** find *****************
// const numbers = [13, 27, 44, -10, 81]
// // encuentra el primer número negativo
// const firstNegativeNumber = numbers.find(number => number < 0)

// console.log(firstNegativeNumber) // -> -10
// // ************** fin *****************

// // ************** findIndex *****************
// const numbers = [13, 27, 44, -10, 81]

// // encuentra el índice del primer número negativo
// const firstNegativeNumberIndex = numbers.findIndex(number => number < 0)

// console.log(firstNegativeNumberIndex) // -> 3

// // ahora puedes usar el índice para acceder al elemento
// console.log(numbers[firstNegativeNumberIndex]) // -> -10
// // ************** fin *****************

// // ************** sort *****************
// let numeros = [5, 10, 2, 25, 7]

// numeros.sort(function(a, b) {
//   return a - b
// })

// console.log(numeros) // [2, 5, 7, 10, 25]
// // ************** fin *****************

// // ************** sort() y toSorted() *****************
// let numeros = [5, 10, 2, 25, 7]

// let numerosOrdenados = numeros.toSorted((a, b) => {
//   return a - b
// })

// console.log(numerosOrdenados) // [2, 5, 7, 10, 25]
// console.log(numeros) // [5, 10, 2, 25, 7]
// // ************** fin *****************

// // ************** filter *****************
// const numbers = [1, 2, 3, 4, 5, 6, 7]

// const evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0
// })

// console.log(evenNumbers) // [2, 4, 6]
// // ************** fin *****************

// // ************** map *****************
// const numbers = [1, 2, 3]

// const doubleNumbers = numbers.map((number) => {
//   return number * 2
// })

// console.log(doubleNumbers) // [2, 4, 6]
// // ************** fin *****************

// // ************** reduce *****************
// const numbers = [1, 2, 3]

// const sum = numbers.reduce((accumulator, currentNumber) => {
//   return accumulator + currentNumber
// }, 0) // <- el 0 es el valor inicial

// console.log(sum) // 6
// // ************** fin *****************

// concatenaciones

// const ab = {
//   ab: "ab",
// };

// const cd = {
//   cd: "cd",
// };

// const abcd = { ...ab, ...cd };

// const _list = [1, 2, 3];
// const _list2 = [4, 5, 6];

// const finalList = [..._list, ..._list2];