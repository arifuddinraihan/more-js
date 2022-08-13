

const friends = [
    { name: "Arif", friend: 100 },
    { name: "Alif", friend: "Arif" },

    // { name: "Rana", friend: "Kana" },
    // { name: "Kana", friend: "Rana" },

    // { name: "Modhu", friend: "Bish" },
    // { name: "Khati", friend: "Modhu" },
];

function isBestFriend(friends) {
    if (typeof friends !== 'object' && typeof friends !== 'string') {
        return "Please enter a valid object which have name & friend name"
    }
    else if ( ) {
        return true;
    }
    else {
        return false;
    }
}
// const friends = -1;
console.log(isBestFriend(friends));