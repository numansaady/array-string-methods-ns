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

// includes() with convert string to lower case
// const output = [];
// for (const product of products) {
//   if (product.toLowerCase().includes(searching.toLowerCase()) != -1) {
//     output.push(product);
//   }
// }
// console.log(output);

// startsWith() with convert string to lower case
// const output = [];
// for (const product of products) {
//   if (product.toLowerCase().startsWith(searching.toLowerCase())) {
//     output.push(product);
//   }
// }
// console.log(output);

// endsWith() with convert string to lower case
const output = [];
for (const product of products) {
  if (product.toLowerCase().endsWith(searching.toLowerCase())) {
    output.push(product);
  }
}
console.log(output);
