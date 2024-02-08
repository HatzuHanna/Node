// const suma = function (a, b) {
//   return a + b;
// };

// const mult = function (a, b) {
//   return a * b;
// };

// module.exports = { suma, mult };

// suma(2, 3);

// ***********************

// const getCharacter = function (firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//   };
// };

// module.exports = getCharacter;

// ****************************************

// function calcularTotal(items) {
//   let total = 0;
//   for (let i = 0; i < items.length; i++) {
//     const item = items[i];
//     total += item.price * item.quantity;
//   }
//   return total;
// }

// module.exports = { calcularTotal };

// ******************************************

function calcularTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    total += item.price * item.quantity;
  }
  return total;
}
function calcularDesdeDB() {
  const items = obtenerItemsDeDB();
  calcularTotal(items);
}

module.exports = { calcularTotal, calcularDesdeDB };
