const course1 = {name: "Programming Hero"};
const course2 = {name: "Next Level Web Development"}




const map = new Map();

map.set(course1, {courseId: "level 1"})
map.set(course2, {courseId: "level 2"})

map.forEach((value, key)=> console.log("key: ", key, "value: ", value))



console.log(map)
