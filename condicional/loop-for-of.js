/*
El ciclo for... of permite operar sobre un objeto iterable, es posible que en algún momento te encuentres con un error del estilo TypeError: 'x' is not iterable, que nos indica que la estructura que estamos tratando de utilizar en nuestro ciclo no es iterable, es por esto que debemos tener claro lo que hace que un objeto sea iterable.
En esencia, un objeto iterable es aquel que tiene un protocol de iteración definido, los más comunes que encontramos son los Arrays y las Strings. (En lenguaje técnico si el objeto tiene un Symbol.iterator, entonces este es iterable)
OJO 👀 lo que llamamos comunmente en JS como objetos, esas variables que tienen una estructura {}, NO son iterables, para explorar estos objetos.
*/ 

let canasta=["manzana","pera","naranja","uva"];
for(fruta of canasta){
    console.log(fruta);
}