var nameOne = "Cleo";
var nameTwo = "Jaylon";

var differenceAmount = nameOne.length - nameTwo.length

if (nameOne.length > nameTwo.length) {
    console.log("The name " + nameOne + " is longer than " + nameTwo + " by " + Math.abs(differenceAmount) + " characters");
} else if (nameOne.length < nameTwo.length) {
    console.log("The name " + nameOne + " is shorter than " + nameTwo + " by " + Math.abs(differenceAmount) + " characters");
} else {
    console.log("They are the same amount of characters!");
}