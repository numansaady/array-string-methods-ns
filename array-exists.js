// > The isArray() method returns true if an object is an array, otherwise false.
// > Array.isArray() is a static property of the JavaScript Array object.
// > You can only use it as Array.isArray().
// > Using x.isArray(), where x is an array will return undefined.
function megaFriend(friends) {
  if (Array.isArray(friends) == false) {
    return "Please provide an array";
  }
  let mega = [0];
  for (const friend of friends) {
    if (friend.length > mega.length) {
      mega = friend;
    }
  }
  return mega;
}
const friends = ["kutub", "sadik", "rakibul", "sajidul"];
const bigBuddy = megaFriend(friends);
console.log(bigBuddy);

// > The indexOf() method returns the first index (position) of a specified value.
// > The indexOf() method returns -1 if the value is not found.
// > The indexOf() method starts at a specified index and searches from left to right.
// > By default the search starts at the first element and ends at the last.
// > Negative start values counts from the last element (still searches from right - left).
if (friends.indexOf("sadik") != -1) {
  console.log("Sadik is exists");
}

// > The includes() method returns true if an array contains a specified value.
// > The includes() method returns false if the value is not found.
// > The includes() method is case sensitive.
if (friends.includes("sadik")) {
  console.log("Sadik is exists");
}

// > The concat() method concatenates (joins) two or more arrays.
// > The concat() method returns a new array, containing the joined arrays.
// > The concat() method does not change the existing arrays.
const first = [1, 2, 3, 4, 5];
const second = [3, 4, 5, 6, 7, 8];
const combined = first.concat(second);
console.log(combined);
