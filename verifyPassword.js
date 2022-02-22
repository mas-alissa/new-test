
// const functions = {
//     checkLength: (woord) => woord.length,
//     notNull: (woord) => woord,
//     checkenVoorgroteLetter: (woord) => {
//         if (woord.match(/[A-Z]{1,9}/)) {
//             return woord
//         } else {
//             return "there is no big letter!!"
//         }
//     },
//     checkenVoorkleineLetter: (woord) => {
//         if (woord.match(/[a-z]{1,9}/)) {
//             return woord
//         } else {
//             return "there is no Small letter!!"
//         }
//     },
//     checkDigits: (value) => {
//         if(value.match(/\d+/)){
//             return value
//     } else {
//         console.log("there is no digits letter!!")
//     }
// }
// }
// // const notNull = (word) => {
// //     return word
// // }

// // const addNumbers = (a,b) => {
// // return a+b
// // }

// module.exports = functions;




const checkLength = (woord) => {
    if (woord.length <= 9) {
        return true
    } else {
        return false;
    }
}

const notNull = (woord) => {
    if (woord !== null) {
        return true;
    } else {
        return "this must be not 'null' value"
    }
};

const checkVoorGrootletter = (woord) => {
    const regex = new RegExp('[A-Z]');
    return regex.test(woord);
    // console.log(woord.match(/[A-Z]/))
    // if(woord.match(/[A-Z]/)){
    //     console.log("hello world")
        // return true
    // }
}

//checkVoorGrootletter("Wincacademy")


module.exports = checkLength, notNull,checkVoorGrootletter;

