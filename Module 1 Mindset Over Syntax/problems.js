// // ১ লাখ user এর মধ্যে specific user খুঁজতে হবে বারবার।

// // Normal Way (Slow)

// const startTime = performance.now();
// const users = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 3, name: "C" },
// ];

// const user = users.find((u) => u.id === 3);

// const endTime = performance.now();

// console.log(`Execution time ${endTime - startTime}`); // 0.0143 complexity = O(n)

//Batter thinking
// const startTime = performance.now();
// const users = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 3, name: "C" }
// ]
// const lookup = {}

// users.forEach(user =>{
//   lookup[user.id] = user
// })

// console.log(lookup[2])
// const endTime = performance.now();
// console.log(`Execution Time ${endTime-startTime}`)

//Example 2: Duplicate Remove (Set Data Structure)
const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(numbers)];

console.log(unique);

//Example 3: O(n²) Problem Optimization

//দুইটা array তে common number আছে কিনা check করতে হবে।


const arr1 = [1,2,3,4]
const arr2 = [4,5,6,7]

//Bad Solution

// for(let i = 0; i<arr1.length; i++){
//   for(let j = 0; i<arr2.length; j++){
//     if(arr1[i]=== arr2[i]){
//       console.log("found")
//     }
//   }
// }

//Complexity = O(n²)

//Better Solution

const set = new Set(arr1);

for(let num of arr2){
  if(set.has(num)){
    console.log("found")
  }
}