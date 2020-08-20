class Calculator {
    constructor() {
    }
    add(){

    }
    subtract(){

    }
    multiply(){

    }
    divide(){

    }
};
let numbers = {operand:"",
               operator:"",
               result:0
};
function addEventListener(){

}
function controller(e){
    let display = document.querySelector('textarea');
    if (e.target.value === "=" && numbers.operand !== ""){
        switch(numbers.operator){
            case "+":
                display.textContent = Number(numbers.operand) + Number(display.textContent);
                break;
            case "-":
                display.textContent = Number(numbers.operand) - Number(display.textContent);
                break;
            case "*":
                display.textContent = Number(numbers.operand) * Number(display.textContent);
                break;
            case "/":
                display.textContent = Number(numbers.operand) / Number(display.textContent);
                break;
        }
    } else if (e.target.value=== "+"||e.target.value==="-"||e.target.value==="*"||e.target.value==="/"){
        if (numbers.operand === ""){
                numbers.operand= display.textContent;
                numbers.operator = e.target.value;
                display.textContent="";
            }else{
                numbers.operand= Number(numbers.operand)+Number(display.textContent);
                numbers.operator=e.target.value;
                display.textContent="";
            }
    } else{
        display.textContent += e.target.value;
    }






    /*if (e.target === "="){
        display.textContent = Number(display.textContent) + Number(numbers.operand);
        }else{
        if (e.target.value === "+") {
            if (numbers.operand === ""){
                numbers.operand= display.textContent;
                numbers.operator = e.target.value;
                display.textContent="";
            }else{
                numbers.operand= Number(numbers.operand)+Number(display.textContent);
                numbers.operator=e.target.value;
                display.textContent="";
            }
        }else{
            display.textContent += e.target.value;
        };
    };*/





}

function init(){
    let div = document.querySelector('div');
    div.addEventListener("click", event=>{
        controller(event);
    })
}
window.onload= init;


