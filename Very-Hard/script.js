// var numOne = prompt("Please enter the first number");
// var operator = prompt("Please enter the operator");
// var numTwo = prompt("Please enter the second number");

var operator = "";
var addIcon = document.getElementById("add");
var subtractIcon = document.getElementById("subtract");
var multiplyIcon = document.getElementById("multiply");
var divideIcon = document.getElementById("divide");

function calculate() {
    var numOne = parseFloat(document.getElementById("numOne").value);
    var numTwo = parseFloat(document.getElementById("numTwo").value);

    
    

    switch(operator) {
        case "+":
            
            // If operator is add then call add function
            console.log(numOne + " " + operator + " " + numTwo + " = " +  add(numOne, numTwo).toFixed(2));
            document.getElementById("calculateSubTitle").innerHTML = add(numOne, numTwo).toFixed(2);
            break;
            
        case "-":
            // If operator is subtract then call subtract function
            console.log(numOne + " " + operator + " " + numTwo + " = " + subtract(numOne, numTwo).toFixed(2));
            document.getElementById("calculateSubTitle").innerHTML = subtract(numOne, numTwo).toFixed(2);
            break;
    
        case "*":
            // If operator is multiply then call add multiply
            console.log(numOne + " " + operator + " " + numTwo + " = " + multiply(numOne, numTwo).toFixed(2));
            document.getElementById("calculateSubTitle").innerHTML = multiply(numOne, numTwo).toFixed(2);
            break;
            
        case "/":
            // If operator is divide then call divide function
            console.log(numOne + " " + operator + " " + numTwo + " = " + divide(numOne, numTwo).toFixed(2));
            document.getElementById("calculateSubTitle").innerHTML = divide(numOne, numTwo).toFixed(2);
            break;
    
        default:
            console.log("I'm sorry that is not a valid operator");
    }
}

function addOperator() {
    addIcon.style.color = "#EF8441";
    subtractIcon.style.color = "#4FE782";
    multiplyIcon.style.color = "#4FE782";
    divideIcon.style.color = "#4FE782";
    operator = "+";
}

function subtractOperator() {
    addIcon.style.color = "#4FE782";
    subtractIcon.style.color = "#EF8441";
    multiplyIcon.style.color = "#4FE782";
    divideIcon.style.color = "#4FE782";
    operator = "-";
}

function multiplyOperator() {
    addIcon.style.color = "#4FE782";
    subtractIcon.style.color = "#4FE782";
    multiplyIcon.style.color = "#EF8441";
    divideIcon.style.color = "#4FE782";
    operator = "*";
}

function divideOperator() {
    addIcon.style.color = "#4FE782";
    subtractIcon.style.color = "#4FE782";
    multiplyIcon.style.color = "#4FE782";
    divideIcon.style.color = "#EF8441";
    operator = "/";
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



