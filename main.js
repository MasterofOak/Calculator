const btns = document.querySelectorAll(".btn");
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");
const dot = document.querySelector('.dot');
equal.onclick = operate;
clear.onclick = clearValue;
const calculator = {
    displayValue: '',
    firstNumber: null,
    operator: '',
    secondNumber: null,
    operatorIsClicked: false,
    result: 0
};
function printValue(e){
    if(e.target.classList.contains('digit') && calculator.operatorIsClicked == false){
        calculator.displayValue += this.value;
        display.textContent = calculator.displayValue;
        calculator.firstNumber = (+calculator.displayValue);
        console.log(calculator.firstNumber);
    }
    if(e.target.classList.contains('operator')){
        calculator.operatorIsClicked = true;
        calculator.operator = this.value;
        calculator.displayValue = '';
        display.textContent = calculator.firstNumber;
        console.log(calculator.operator);
    }
    if(e.target.classList.contains('digit') && calculator.operatorIsClicked == true){
        calculator.displayValue += this.value;
        display.textContent = calculator.displayValue;
        calculator.secondNumber = (+calculator.displayValue);
        console.log(calculator.secondNumber);
    }

    console.log(calculator.displayValue);
}
btns.forEach((btn) =>{
    btn.addEventListener('click', printValue);
});
function clearValue(){
    display.textContent = '';
    calculator.displayValue = '';
    calculator.firstNumber = null;
    calculator.operator = null;
    calculator.secondNumber = null;
    calculator.operatorIsClicked = false;
}
function add(){
    display.textContent = calculator.firstNumber + calculator.secondNumber;
    calculator.firstNumber = (+display.textContent);
    calculator.operatorIsClicked = false;
}
function subtract(){
    display.textContent = calculator.firstNumber - calculator.secondNumber;
    calculator.firstNumber = (+display.textContent);
    calculator.operatorIsClicked = false;
}
function multiply(){
    display.textContent = calculator.firstNumber * calculator.secondNumber;
    calculator.firstNumber = (+display.textContent);
    calculator.operatorIsClicked = false;
}
function divide(){
    if((calculator.firstNumber / calculator.secondNumber) % 1 !== 0){
        display.textContent = (calculator.firstNumber / calculator.secondNumber).toFixed(6);
    }
    else{
        display.textContent = (calculator.firstNumber / calculator.secondNumber);
    }
    calculator.firstNumber = (+display.textContent);
    calculator.operatorIsClicked = false;
}
function operate(){
    if(calculator.firstNumber && calculator.secondNumber && calculator.operator !== null){
        switch(calculator.operator){
            case '+':
            console.log(add());
            break;
            case '-':
            console.log(subtract());
            break;
            case '*':
            console.log(multiply());
            break;
            case '/':
            console.log(divide());
            break;
        }
    }
    else{
        display.textContent = 'Error!';
    }
}