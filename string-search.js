const products = [
  "Dell Laptop",
  "Lenovo laptop",
  "Toshiba laptop",
  "Dell N95 Mobile phone",
  "N73 Mobile phone",
  "Dell Galaxy s9 Phone",
  "Acer Laptop",
];

const searching = "phone";
// indexOf()
// > The indexOf() method returns the position of the first occurrence of a value in a string.
// > The indexOf() method returns -1 if the value is not found.
// > The indexOf() method is case sensitive.
// indexOf with case sensitive
// const output = [];
// for (const product of products) {
//   if (product.indexOf(searching) != -1) {
//     output.push(product);
//   }
// }
// console.log(output);

// indexOf() with convert string to lower case
// const output = [];
// for (const product of products) {
//   if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
//     output.push(product);
//   }
// }
// console.log(output);

// includes()
// >The includes() method returns true if a string contains a specified string.
// > Otherwise it returns false.
// > The includes() method is case sensitive.
// > includes() is an ECMAScript6 (ES6) feature.
// includes() with convert string to lower case
// const output = [];
// for (const product of products) {
//   if (product.toLowerCase().includes(searching.toLowerCase()) != -1) {
//     output.push(product);
//   }
// }
// console.log(output);

// > The startsWith() method returns true if a string starts with a specified string.
// > Otherwise it returns false.
// > The startsWith() method is case sensitive.
// startsWith() with convert string to lower case
// const output = [];
// for (const product of products) {
//   if (product.toLowerCase().startsWith(searching.toLowerCase())) {
//     output.push(product);
//   }
// }
// console.log(output);

// > The endsWith() method returns true if a string ends with a specified string.
// > Otherwise it returns false.
// > The endsWith() method is case sensitive.
// endsWith() with convert string to lower case
const output = [];
for (const product of products) {
  if (product.toLowerCase().endsWith(searching.toLowerCase())) {
    output.push(product);
  }
}
console.log(output);
