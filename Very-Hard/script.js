// var numOne = prompt("Please enter the first number");
// var operator = prompt("Please enter the operator");
// var numTwo = prompt("Please enter the second number");

var operator = "";
var addIcon = document.getElementById("add");
var subtractIcon = document.getElementById("subtract");
var multiplyIcon = document.getElementById("multiply");
var divideIcon = document.getElementById("divide");

function calculate() {
    var numOne = +document.getElementById("numOne").value;
    var numTwo = +document.getElementById("numTwo").value;
    if (Number.isNaN(numOne) || Number.isNaN(numTwo) || numOne === 0 || numTwo === 0) { 
        console.log("Please enter a valid number");
        return;
    }
    

    switch(operator) {
        case "+":
            const addValue = add(numOne, numTwo).toFixed(2);
            // If operator is add then call add function
            console.log(numOne + " " + operator + " " + numTwo + " = " + addValue);
            document.getElementById("calculateSubTitle").innerHTML = addValue;
            break;
            
        case "-":
            const subtractValue = subtract(numOne, numTwo).toFixed(2);
            // If operator is subtract then call subtract function
            console.log(numOne + " " + operator + " " + numTwo + " = " + subtractValue);
            document.getElementById("calculateSubTitle").innerHTML = subtractValue;
            break;
    
        case "*":
            const multiplyValue = multiply(numOne, numTwo).toFixed(2);
            // If operator is multiply then call add multiply
            console.log(numOne + " " + operator + " " + numTwo + " = " + multiplyValue);
            document.getElementById("calculateSubTitle").innerHTML = multiplyValue;
            break;
            
        case "/":
            const divideValue = divide(numOne, numTwo).toFixed(2);
            // If operator is divide then call divide function
            console.log(numOne + " " + operator + " " + numTwo + " = " + divideValue);
            document.getElementById("calculateSubTitle").innerHTML = divideValue;
            break;
    
        default:
            console.log("I'm sorry that is not a valid operator");
    }
}

function addOperator() {
    setOperatorState("+");
    operator = "+";
}

function subtractOperator() {
    setOperatorState("-");
    operator = "-";
}

function multiplyOperator() {
    setOperatorState("*");
    operator = "*";
}

function divideOperator() {
    setOperatorState("/");
    operator = "/";
}


function setOperatorState(o) {
    const activeColor = "#EF8441";
    const inactiveColor = "#4FE782";
    addIcon.style.color = o === '+' ? activeColor : inactiveColor;
    subtractIcon.style.color = o === '-' ? activeColor : inactiveColor;
    multiplyIcon.style.color = o === '*' ? activeColor : inactiveColor;
    divideIcon.style.color = o === '/' ? activeColor : inactiveColor;
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



