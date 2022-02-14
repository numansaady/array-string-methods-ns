const nathems = "Amar Sunar Bangla Ami Tomai Valobashi";
// split()
// > split() method একটা স্ট্রিং কে ছোট ছোট সাবস্ট্রিং এর এরেতে ভাগ করে দেয়
// > The split() method splits a string into an array of substrings.
// > The split() method returns the new array.
// > The split() method does not change the original string.
// > If (" ") is used as separator, the string is split between words.
const splitNtheme = nathems.split(" "); // split() with space
const splitWithLetter = nathems.split("a"); // split() with letter
console.log(splitNtheme);
console.log(splitWithLetter);

// slice()
// > slice() method  একটা স্ট্রিং এর ছোট অংশকে বের করে রিটার্ন করে দেয়।
// > The slice() method extracts a part of a string.
// > The slice() method returns the extracted part in a new string.
// > The slice() method does not change the original string.
// > The start and end parameters specifies the part of the string to extract.
// > The first position is 0, the second is 1, ...
// > A negative number selects from the end of the string.
const sliceNthemes = nathems.slice(2); //only start position
const slicethemes = nathems.slice(2, 8); //start and end position
console.log(sliceNthemes);
console.log(slicethemes);

//substr()
// > substr()একটা পজিশন থেকে শুরু করে যতগুলা অক্ষর বলাে হবে সেগুলো রিটার্ন করবে।
// > The substr() method extracts a part of a string.
// > The substr() method begins at a specified position, and returns a specified number of characters.
// > The substr() method does not change the original string.
// > To extract characters from the end of the string, use a negative start position.
const substrNtheme = nathems.substr(2, 8);
console.log(substrNtheme);

// subtring()
// > substring() পদ্ধতি একটি স্ট্রিং থেকে (পজিশন) থেকে অক্ষর বের করে সাবস্ট্রিং প্রদান করে।
// > The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.
// > The substring() method extracts characters from start to end (exclusive).
// > The substring() method does not change the original string.
// > If start is greater than end, arguments are swapped: (4, 1) = (1, 4).
// > Start or end values less than 0, are treated as 0.
const substringNthem = nathems.substring(2, 8);
console.log(substringNthem);

// concat()
// একাধিক স্ট্রিংকে জোড়া দিয়ে একটি স্ট্রিংয়ে রূপান্তর করে।
// > The concat() method joins two or more strings.
// > The concat() method does not change the existing strings.
// > The concat() method returns a new string.
const first = "ami";
const second = "amora";
const full = first + second;
console.log(full);
const fullConcat = first.concat(second);
console.log(fullConcat);

// join()
// > এ্যারের সব উপাদানকে যোগ করে নতুন একটি স্ট্রিং তৈরি করে।
// > The join() method returns an array as a string.
// > The join() method does not change the original array.
// > Any separator can be specified. The default is comma (,).
const letters = ["a", "b", "c", "d"];
// const lettersJoin = letters.join("");
// const lettersJoin = letters.join(" ");
// const lettersJoin = letters.join(", ");
const lettersJoin = letters.join(" + ");
console.log(lettersJoin);
