//* Denormalizing Data (Client-Side "Join")

// Scenario: You have an array of users and a separate array of posts.
// You want to create a new array of users where each user object contains a posts array of their own posts.

//? input
const users = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Charlie" },
];

const posts = [
  { id: 1, userId: 102, title: "My first post" },
  { id: 2, userId: 101, title: "React Hooks" },
  { id: 3, userId: 101, title: "Data Structures" },
  { id: 4, userId: 103, title: "CSS is fun" },
  { id: 5, userId: 102, title: "Node.js streams" },
];

//? output
// [
//   { id: 101, name: 'Alice', posts: [ { id: 2, ... }, { id: 3, ... } ] },
//   { id: 102, name: 'Bob', posts: [ { id: 1, ... }, { id: 5, ... } ] },
//   { id: 103, name: 'Charlie', posts: [ { id: 4, ... } ] }
// ]


//? Todo step list for solve this problem with optimize approach
//? 1. Create an empty object to group posts by userId
//? 2. Loop through the posts array
//? 3. Add each post into its corresponding userId array
//? 4. Loop through the users array
//? 5. Create a new user object with a posts property
//? 6. Attach the grouped posts using the user's id
//? 7. Return the final transformed array


const groupPostByUser = posts.reduce((acc, post)=>{

  if(!acc[post.userId]){
    acc[post.userId] = []
  }
  acc[post.userId].push(post)
  return acc
}, {})



const finalArray = users.map((user) => {
  user.posts = groupPostByUser[user.id]
  return user
})

console.log(finalArray)