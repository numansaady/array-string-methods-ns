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

if (friends.indexOf("sadik") != -1) {
  console.log("Sadik is exists");
}

if (friends.includes("sadik")) {
  console.log("Sadik is exists");
}

const first = [1, 2, 3, 4, 5];
const second = [3, 4, 5, 6, 7, 8];
const combined = first.concat(second);
console.log(combined);
