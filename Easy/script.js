var nameOne = "Cleo";
var nameTwo = "Jaylon";

// calculates the difference in the length amounts of the two strings 
var differenceAmount = nameOne.length - nameTwo.length

// checks if the length of the first name is larger, smaller or the same
if (nameOne.length > nameTwo.length) {
    console.log("The name " + nameOne + " is longer than " + nameTwo + " by " + Math.abs(differenceAmount) + " characters");
} else if (nameOne.length < nameTwo.length) {
    console.log("The name " + nameOne + " is shorter than " + nameTwo + " by " + Math.abs(differenceAmount) + " characters");
} else {
    console.log("They are the same amount of characters!");
}