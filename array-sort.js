// > The sort() sorts the elements of an array.
// > The sort() overwrites the original array.
// > The sort() sorts the elements as strings in alphabetical and ascending order.
// sort() sort in number ascending
const numbers = [3, 2, 5, 1, 4];
const sortedNumber = numbers.sort();
console.log(sortedNumber);

// sort() sort in string
const friends = ["kamil", "mamil", "babul", "abul"];
const sortedFriend = friends.sort();
console.log(sortedFriend);


// > The reverse() method reverses the order of the elements in an array.
// > The reverse() method overwrites the original array.
// reverse()
const reversedFriend = friends.reverse();
// const reversedFriend = friends.sort().reverse(); short format sort with reverse
console.log(reversedFriend);

// sort() sort in number descending
const desecSort = numbers.sort(function (a, b) {
  return b - a;
});
console.log(desecSort);
