// How recursion worked in JS

function compare (a, b) {
    if ( a.toString() === b ) {
        return true;
    }
    else {
        return false;
    }
}

const result = compare (15, 15);
console.log(result);

console.log('123'+123);

let m = "hi";
let j = "there";
console.log(m+j);