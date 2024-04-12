
// IDs
const result = document.getElementById("result");

// Values

let firstNumberArray = [];
let secondNumberArray = [];
let operator;
let firstNumber;
let secondNumber;

//Operators Check

const operatorsArray = [];
const operatorCheck = document.querySelectorAll(".operator");

operatorCheck.forEach(element => {
    operatorsArray.push(element.innerHTML);
});

console.log(operatorsArray);


function updateDisplay(input){
    if(operatorsArray.includes(input)) {
        if (!operator && firstNumberArray.length > 0){
            operator = input;
            result.textContent += operator;
        }
    } 
    else{
        if(!operator){
            if (input === "." && firstNumberArray.includes(".")){
                return; 
            }
            else if(input === "." && firstNumberArray.length <= 0){
                return;
            }
            firstNumberArray.push(input);
            result.textContent = firstNumberArray.join('');
        } 
        else {
            if(input === "." && secondNumberArray.includes(".")){
                return; 
            }
            else if(input === "." && secondNumberArray.length <= 0){
                return;
            }
            secondNumberArray.push(input);
            result.textContent += input;
        }
    }
}

function clearDisplay(){
    firstNumberArray = [];
    secondNumberArray = [];
    operator = "";
    equation = "";
    result.textContent = "";
}


function displayResult(){

    firstNumber = parseFloat(firstNumberArray.join(''));
    secondNumber = parseFloat(secondNumberArray.join(''));

    let equationResult;

    switch(operator){
        case "+":
            equationResult = (firstNumber + secondNumber);
            break;
        case "-":
            equationResult = (firstNumber - secondNumber);
            break;
        case "x":
            equationResult = (firstNumber * secondNumber);
            break;
        case "÷":
            if(firstNumber === 0 || secondNumber === 0){
                equationResult = "Error"
            }
            else{
                equationResult = firstNumber / secondNumber;
            }    
            break;
    }
    
    if(typeof equationResult !== "number" || equationResult == NaN){
        equationResult = "Error"
    }

    operator = ""; 

    secondNumberArray = [];

    firstNumberArray = [equationResult];

    result.textContent = equationResult;
}



