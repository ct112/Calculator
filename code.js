const numericButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operators]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const firstOperand = document.getElementById("operand");
const secondOperand = document.getElementById("storedOperand");
let operator = "";
let equalsToggle = false;

function appendNumber(key){
    if ((firstOperand.textContent.includes(".") && key ===".")||equalsToggle === true){return}
    firstOperand.textContent += key;
}
function calculate(x,y){
    const calcChoice = {
        "+": (x, y) => {
            return x + y
        },
        "-": (x, y) => {
            return x - y
        },
        "*": (x, y) => {
            return x * y
        },
        "/":(x,y) => {
             return x/y
        }
    }
    return calcChoice[operator](x,y);
}
function isExpressionReady(e){
    if (firstOperand.textContent === ""){return};
    if (secondOperand.textContent === "") {
            secondOperand.textContent = firstOperand.textContent;
            operator = e.target.textContent;
            firstOperand.textContent = "";
        }else{
            secondOperand.textContent= calculate(Number(secondOperand.textContent),Number(firstOperand.textContent));
            operator=e.target.textContent;
            firstOperand.textContent ="";
        }
}
clearButton.addEventListener('click',()=> {
    firstOperand.textContent = "";
    secondOperand.textContent = "";
    operator = "";
})
numericButtons.forEach(button =>{
    button.addEventListener("click",()=>{
         appendNumber(button.innerText);

    })
})
operatorButtons.forEach(button =>{
    button.addEventListener("click",(e)=>{
        isExpressionReady(e);
        equalsToggle =false;
    })
})
equalsButton.addEventListener("click", button =>{
    let expressionArray = [secondOperand.textContent,operator,firstOperand.textContent];
    if (expressionArray.includes("")){return};
    firstOperand.textContent= calculate(Number(secondOperand.textContent),Number(firstOperand.textContent));
    operator = "";
    secondOperand.textContent= "";
    equalsToggle = true;
})
