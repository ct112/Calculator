let numbers = {operand:"",
               operator:"",
};
function controller(e){
    let operators = new Set(["+","-","*","/"]);
    let allowedChar = ["0","1","2","3","4","5","6","7","8","9","."];
    let noPeriodsAllowed= ["0","1","2","3","4","5","6","7","8","9"];
    let display = document.querySelector('textarea');
    let input = e.target.value;
    if (input === "=" && numbers.operand !== ""){
        switch(numbers.operator){
            case "+":
                display.textContent = Number(numbers.operand) + Number(display.textContent);
                numbers.operand ="";
                numbers.operator="";
                break;
            case "-":
                display.textContent = Number(numbers.operand) - Number(display.textContent);
                numbers.operand="";
                numbers.operator="";
                break;
            case "*":
                console.log();
                display.textContent = Number(numbers.operand) * Number(display.textContent);
                numbers.operand="";
                numbers.operator="";
                break;
            case "/":
                display.textContent = Number(numbers.operand) / Number(display.textContent);
                numbers.operand="";
                numbers.operator="";
                break;
        }
    } else if (operators.has(input)){
        if (numbers.operand === ""){
                numbers.operand= display.textContent;
                numbers.operator = input;
                display.textContent="";
            }else{
                switch(numbers.operator){
                    case "+":
                        numbers.operand= Number(numbers.operand)+Number(display.textContent);
                        numbers.operator=input;
                        display.textContent="";
                        break;
                    case "-":
                        numbers.operand= Number(numbers.operand)-Number(display.textContent);
                        numbers.operator=input;
                        display.textContent="";
                        break;
                    case "*":
                        numbers.operand= Number(numbers.operand)*Number(display.textContent);
                        numbers.operator=input;
                        display.textContent="";
                        break;
                    case "/":
                        numbers.operand= Number(numbers.operand)/Number(display.textContent);
                        numbers.operator=input;
                        display.textContent="";
                        break;
                }
                // numbers.operand= Number(numbers.operand)+Number(display.textContent);
                // numbers.operator=input;
                // display.textContent="";
            }
    } else {
        if ((display.textContent.includes(".") && input===".")||(input==="=")){

        }  else{
            if (allowedChar.includes(input)){display.textContent += input;}
        }
    }
}
function countDecimals(){

}
function clear(){
    let textArea = document.querySelector('textarea');
    textArea.textContent="";
    numbers.operand="";
    numbers.operator="";
}
function init(){
    let div = document.querySelector('div');
    div.addEventListener("click", event=>{
        controller(event);
    })
    let clearButton = document.getElementById('clear');
    clearButton.onclick=clear;
}
window.onload= init;


