const country = "Bangladesh";
const age = 55;
const isIdependent = true;
const student = {name : "Arif", age: 20, class : "HSC", batch : 2022};
const friends = [18, 19, 20, 21, 22];

function add (num1, num2){
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIdependent);
console.log(typeof student);
console.log(typeof friends);
console.log(typeof add);

// how to check type of array by "Array.isArray()"
console.log(Array.isArray(friends));

// way to find the type of index
console.log(friends.includes(20));
// console.log(friends.includes(200));

// another way to find the type of index by "indexOf()"
if (friends.indexOf(200) !== -1 ) {
    console.log("Number is here!")
}
else {
    console.log("Number is not here")
}


// merging two or more arrays
// concat in Array for merging multiples array

const newFriends = [11, 10, 16, 15, 20, 21];
const allFriends = friends.concat(newFriends);

// console.log(friends);
// console.log(newFriends);


console.log(allFriends);