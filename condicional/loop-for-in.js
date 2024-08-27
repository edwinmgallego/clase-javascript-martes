/**
 * 
 * 
 * Como se mencionaba en la clase anterior, los objetos ({}) en Javascript no son iterables, por eso el método for... of no es compatible con ellos, pero no te preocupes que para ello tenemos el ciclo for... in!

Este ciclo nos permite iterar sobre objetos enumerables, más especificamente sobre las propiedades de estos objetos!

OJO 👀 este ciclo nos da el nombre de la propiedad en vez del valor de esta como sucedía con el ciclo for... of
 */


const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1,
};

for (fruta in listaDeCompras) {
    console.log(fruta);
}
for (fruta in listaDeCompras) {
    console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}
for (fruta of listaDeCompras) {
    console.log(fruta);
}