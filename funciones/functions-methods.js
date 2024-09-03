
//pasar funciones como argumentos.
function a() {}
function b(a) {}
b(a);
//retornar  funciones!

function a() {
  function b() {}
  return b;
}

//asignar funciones  a variables! -> Expresion de función

const a = function () {};

//tener propiedades y metodos
function a() {}
const obj = {};
a.call(obj);


//anidar  funciones
function a() {
  function b() {
    function c() {

    }
    c();
  }
  b();
}
a();
//almacenamiento de  funcios en  objetos
const rocket = {
  name: "Falcon 9",
  launchMessage: function launchMessage() { 
    
    console.log("ðŸ”¥");
  },
};
rocket.launchMessage();
