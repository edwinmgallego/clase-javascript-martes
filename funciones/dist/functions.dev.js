"use strict";

/*
Una función es un conjunto de instrucciones tareas que realiza una tarea o asigna un valor, también se puede definir como un conjunto de instrucciones que realiza una tarea o calcula un valor
*/
function calculateDiscountedPrice(price, discountPercentage) {
  var discount = price * discountPercentage / 100;
  var priceWithDiscount = price - discount;
  return priceWithDiscount;
}

var originalPrice = 1000;
var discountPercentage = 15;
var finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage);
console.log('Original Price: $' + originalPrice);
console.log('Discount: ' + discountPercentage + '%');
console.log('Price with discount: $' + finalPrice);