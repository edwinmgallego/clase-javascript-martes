/*
Las Arrow Function son útiles porque permiten:

Escribir métodos más concisos
Simplificar una línea de código para que sea más legible
Aprovechar las características de retorno implícito y el no uso de paréntesis
Olvidarse de manejar el contexto this
Definir de manera compacta una función convencional
Eliminar las llaves y la palabra return si la función tiene solamente una sentencia que devuelve un valor
Reducir el código aún más utilizando parámetros


*/

//expresion de funcion
const greeting = function (name) {
  return `Hi, ${name}`;
};

//arrow function
const newGreeting = (name) => {
  return `Hi, ${name}`;
};

//funcion flecha con retorno  implicito
const newGreetingImplicit = (name) => `Hi, ${name}`;

//cuando tengamos  mas de  un parametro  usamos parentesis

const newGreetingImplicitWithTwoParameters = (name, lastName) =>   `Hi, I'm ${name} ${lastName}`;


//lexical binding
const finctionalCharacter = {
  name: "Uncle Ben",
  messageWithTraditionalFunction: function (message) {
    console.log(`${this.name} says: ${message}`);
  },
  messageWithArrowFunction: (message) => {
    console.log(`${this.name} says: ${message}`);
  },
};
finctionalCharacter.messageWithTraditionalFunction(
  "With great power comes great responsability."
);

finctionalCharacter.messageWithArrowFunction("Beware of Doctor Octopus.");
