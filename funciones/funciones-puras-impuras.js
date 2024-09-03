/*
las funciones puras son más predecibles y fáciles de depurar ya que no tienen efectos secundarios

las funciones impuras pueden ejecutar variables globales pero su predictibilidad es menor

las funciones puras son ideales para procesamiento de datos y lógica sin efectos secundarios, mientras que las funciones impuras se utilizan para tareas que requieren interacción con el entorno externo.



*/


//funciones puras
//side-effect
/*
1.modificar variables globales
2.modificar parametros
3.solicitudes http
4.imprimir mensajes en pantalla o en consola
5.manipulacion del DOM
6.obtener la hora  actual

*/
function sum(a, b) {
  return a + b;
}

//funciones  impuras 

function sum(a, b) {
  console.log("A: ", a);
  return a + b;
}


let total = 0;
function sumWithSideEffect(a) {
  total += a;
  return total;
}
function square(x) {
  return x * x;
}
function addTen(y) {
  return y + 10;
}
const number = 5;
const finalResut = addTen(square(number));
console.log(finalResut);
