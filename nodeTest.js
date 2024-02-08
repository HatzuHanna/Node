// const nombre = "Hatzu";

// const saludar = function fsaludar(nombre) {
//   console.log(`nombre: ${nombre}`);
// };

// module.exports = { nombre, saludar };

// console.log(exports);

// *******************************************************

const moment = require("moment");

console.log(moment().format("dddd"));

// ***********************************************

function suma(...args) {
  return args.reduce((acc, num) => acc + num, 0);
}

console.log(suma(2, 3, 4, 5));
