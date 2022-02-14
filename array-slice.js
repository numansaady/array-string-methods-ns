const numbers = [2, 4, 5, 6, 8, 22, 44, 66, 77, 88, 99];

// slice()
// > The slice() method returns selected elements in an array, as a new array.
// > The slice() method selects from a given start, up to a (not inclusive) given end.
// > The slice() method does not change the original array.
const slciedNumber = numbers.slice(2, 5);
console.log(slciedNumber);

// splice()
// > The splice() method adds and/or removes array elements.
// > The splice() method overwrites the original array.
const splicedNumber = numbers.splice(2, 3, 32, 43, 54, 65);
console.log(splicedNumber);
console.log(numbers);
