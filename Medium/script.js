var userResponse = prompt("Type anything that is on your mind!");

if (userResponse.toUpperCase) {
    console.log("Whoaaa why are you screaming???");
} else if (userResponse.toLowerCase) {
    console.log("Whisper");
} else {
    console.log("Talking normally");
}


// function loopAndCheck(value) {
//     for(var i = 0; i < value.length; i++) {
//         if (value[i].toUpperCase) {
//             console.log("Whoaaa why are you screaming???");
//         } else if (value[i].toLowerCase) {
//             console.log("Whisper");
//         }
//     }
// }