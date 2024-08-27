//La función Math.random() devuelve un número de coma flotante pseudo-aleatorio, comprendido en el rango de 0 a menor que 1 (es decir, incluido el 0 pero no el 1), con una distribución aproximadamente uniforme en este rango. Dicho rango puede ser ampliado hasta los valores deseados.
const numeroSecreto = Math.floor(Math.random() * 10 + 1); //La función Math.floor() devuelve el máximo entero menor o igual a un número.
const numeroJugador = parseInt(prompt("Adivina el nÃºmero secreto entre el 1 al 10")); 
console.log(`Este es el nÃºmero con el que juegas ${numeroJugador}`);
 if (numeroJugador === numeroSecreto) { 
    console.log("Â¡Felicidades, adivinaste el nÃºmero secreto!");

  } else if (numeroJugador < numeroSecreto) { 
    console.log("El nÃºmero es demasiado bajo, intenta de nuevo");
 } else { 
    console.log("El nÃºmero es muy alto, intenta de nuevo");
 }