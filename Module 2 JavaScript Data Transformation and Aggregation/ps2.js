const number = [40, 100, 1, 4, 10];
const fruits = ["banana", "apple", "Cherery", "date"];
const tagFromPosts = [
  ["js", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

const filteredNumber = number.sort((a, b) => a - b);

const filteredFruits = fruits.sort((a, b) => a.localeCompare(b));

const filteredtagFromPost = new Set(tagFromPosts.flat());

// console.log(filteredNumber);
// console.log(filteredFruits)
console.log(filteredtagFromPost)