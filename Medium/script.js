var userResponse = prompt("Type anything that is on your mind!");


function checkStatus(str) {
    // checks if the user input is uppercase, lowercase, or a combination 
    if (str === str.toUpperCase()) {
        console.log("Whoaaa why are you screaming???");
    } else if (str === str.toLowerCase()) {
        console.log("The whispering makes it hard to hear from you...");
    } else {
        console.log("Great! Talking normally");
    }
}


// function called and takes response as param
checkStatus(userResponse);