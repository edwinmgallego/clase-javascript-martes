"use strict";

var _this = void 0;

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
var greeting = function greeting(name) {
  return "Hi, ".concat(name);
}; //arrow function


var newGreeting = function newGreeting(name) {
  return "Hi, ".concat(name);
}; //funcion flecha con retorno  implicito


var newGreetingImplicit = function newGreetingImplicit(name) {
  return "Hi, ".concat(name);
}; //cuando tengamos  mas de  un parametro  usamos parentesis


var newGreetingImplicitWithTwoParameters = function newGreetingImplicitWithTwoParameters(name, lastName) {
  return "Hi, I'm ".concat(name, " ").concat(lastName);
}; //lexical binding


var finctionalCharacter = {
  name: "Uncle Ben",
  messageWithTraditionalFunction: function messageWithTraditionalFunction(message) {
    console.log("".concat(this.name, " says: ").concat(message));
  },
  messageWithArrowFunction: function messageWithArrowFunction(message) {
    console.log("".concat(_this.name, " says: ").concat(message));
  }
};
finctionalCharacter.messageWithTraditionalFunction("With great power comes great responsability.");
finctionalCharacter.messageWithArrowFunction("Beware of Doctor Octopus.");