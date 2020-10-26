var numOne = prompt("Please enter the first number");
var operator = prompt("Please enter the operator");
var numTwo = prompt("Please enter the second number");
// passes integer value into calculating funtion
calculate(parseInt(numOne), operator, parseInt(numTwo));

function calculate(numOne, operator, numTwo) {
    switch(operator) {
        case "+":
            // If operator is add then call add function
            console.log(numOne + " " + operator + " " + numTwo + " = " +  add(numOne, numTwo));
            break;
            
        case "-":
            // If operator is subtract then call subtract function
            console.log(numOne + " " + operator + " " + numTwo + " = " + subtract(numOne, numTwo));
            break;
    
        case "*":
            // If operator is multiply then call add multiply
            console.log(numOne + " " + operator + " " + numTwo + " = " + multiply(numOne, numTwo));
            break;
            
        case "/":
            // If operator is divide then call divide function
            console.log(numOne + " " + operator + " " + numTwo + " = " + divide(numOne, numTwo));
            break;
    
        default:
            console.log("I'm sorry that is not a valid operator");
    }
}


function add(numOne, numTwo) {
    return numOne + numTwo;
}

function subtract(numOne, numTwo) {
    return numOne - numTwo;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

function divide(numOne, numTwo) {
    return numOne / numTwo;
}