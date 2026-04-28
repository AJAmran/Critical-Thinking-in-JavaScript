//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

//? Output
// { A: 5, C: 3, B: 5, D: 1 }


//? Todo step list for solve this problem
//? 1. create an empty object to store the counts
//? 2. loop over the each survey response
//? 3. check if the response already exists in the object
//? 4. If it exists, incease the count
//? 5. otherwise, initilize the count to 1
//? 6. return the final grouped object


const serveyCount = surveyResponses.reduce((acc, response)=> {
    if(acc[response]) {
        acc[response]++
    } else {
        acc[response] = 1
    }
    return acc
}, {})

console.log(serveyCount)