const nathems = "Amar Sunar Bangla Ami Tomai Valobashi";
// split()
const splitNtheme = nathems.split(" "); // split() with space
const splitWithLetter = nathems.split("a"); // split() with letter
console.log(splitNtheme);
console.log(splitWithLetter);

// slice()
const sliceNthemes = nathems.slice(2); //only start position
const slicethemes = nathems.slice(2, 8); //start and end position
console.log(sliceNthemes);
console.log(slicethemes);

//substr()
const substrNtheme = nathems.substr(2, 8);
console.log(substrNtheme);

// subtring()
const substringNthem = nathems.substring(2, 8);
console.log(substringNthem);

// concat()
const first = "ami";
const second = "amora";
const full = first + second;
console.log(full);
const fullConcat = first.concat(second);
console.log(fullConcat);

// join()
const letters = ["a", "b", "c", "d"];
// const lettersJoin = letters.join("");
// const lettersJoin = letters.join(" ");
// const lettersJoin = letters.join(", ");
const lettersJoin = letters.join(" + ");
console.log(lettersJoin);
