// How to remove multiple similar index from an Array
// To remove use for loop and if ()


const names = ["Samee", "Badhon", "Preeo", "Nafis", "Antor", "Samee", "Nafis", "Antor", "Zaneb", "Zaneb", "Bijoy"]

// function removeDuplicate (names){
//     const unique = [];
//     for (let i = 0 ; i < names.length ; i++) {
//         const name = names[i];
//         if(unique.includes(name) === false){
//             unique.push(name);
//         }
//     }
//     return unique;
// }
// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);
// console.log(names);

function removeDuplicate(names) {
    const unique = [];
    for ( let i = 0 ; i < names.length; i++){
        const name = names[i];
        if (unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);