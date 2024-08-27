/*
Una función es un conjunto de instrucciones tareas que realiza una tarea o asigna un valor, también se puede definir como un conjunto de instrucciones que realiza una tarea o calcula un valor
*/


function calculateDiscountedPrice(price, discountPercentage) {
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount
    return priceWithDiscount
}
const originalPrice = 1000
const discountPercentage = 15
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)
console.log('Original Price: $' + originalPrice)
console.log('Discount: ' + discountPercentage + '%')
console.log('Price with discount: $' + finalPrice)