// const { suma, mult } = require("../ejercicios/jestTest.js");

// describe("Funcion suma", () => {
//   it("Retorna 5 cuando recibe 2 y 3", () => {
//     expect(suma(2, 3)).toBe(5);
//   });
//   it("Retorna 18 cuando recibe 14 y 4", () => {
//     expect(suma(14, 4)).toBe(18);
//   });
// });

// xit o xdescribe para saltar
// it.only o describe. only para correr solo ese

// describe("Funcion mult", () => {
//   it("Retorna 9 cuando recibe 3 y 3", () => {
//     expect(mult(3, 3)).toBe(9);
//   });
//   it("Retorna 12 cuando recibe 4 y 3", () => {
//     expect(mult(4, 3)).toBe(12);
//   });
// });

// ***********************

// const getCharacter = require("../ejercicios/jestTest.js");

// describe("Funcion getCharacter", () => {
//   it("Debe ser una funcion", () => {
//     expect(typeof getCharacter).toBe("function");
//   });

//   it("Tiene las propiedades firstName y lastName", () => {
//     expect(Object.keys(getCharacter())).toEqual(["firstName", "lastName"]);
//   });
//   it("Retorna obj con propiedades pasadas", () => {
//     expect(getCharacter("Homero", "Simpson")).toMatchObject({
//       firstName: "Homero",
//       lastName: "Simpson",
//     });
//   });
//   it("Retorna obj con propiedades pasadas", () => {
//     expect(getCharacter("Hat", "Molina")).toMatchObject({
//       firstName: "Hat",
//       lastName: "Molina",
//     });
//   });
// });

// ****************************************

// const { calcularTotal } = require("../ejercicios/jestTest");

// describe("Funcion calcular Total", () => {
//   it("Calcula el total", () => {
//     const items = [
//       {
//         name: "a",
//         price: 10,
//         quantity: 2,
//       },
//       {
//         name: "b",
//         price: 5,
//         quantity: 3,
//       },
//     ];
//     expect(calcularTotal(items)).toBe(35);
//   });
// });

// ******************************************

const { calcularTotal, calcularDesdeDB } = require("../ejercicios/jestTest");

// describe("Funcion calcular Total", () => {
//   it("Calcula el total", () => {
//     const items = [
//       {
//         name: "a",
//         price: 10,
//         quantity: 2,
//       },
//       {
//         name: "b",
//         price: 5,
//         quantity: 3,
//       },
//     ];
//     expect(calcularTotal(items)).toBe(35);
//   });
// });

jest.mock("../data.js");
const obtenerItemsDeDB = require("../ejercicios/data.js");

it("Obtener total desde BD", () => {
  obtenerItemsDeDB.mockReturnValue([
    {
      name: "a",
      price: 10,
      quantity: 2,
    },
    {
      name: "b",
      price: 5,
      quantity: 3,
    },
  ]);
  const total = calcularDesdeDB();
  expect(total).toBe(35);
});
