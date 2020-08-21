let memory = "";
let operator="";
let equalsToggle=false;
let operatorToggle=false;
let operatorArray=["+","-","*","/"];
let calculate ={"+":(x,y)=>{return x + y},
                "-":(x,y)=>{return x - y},
                "*":(x,y)=>{return x * y},
                "/":(x,y)=>{return x / y}
}

function restrictDecimal(display,input) {
    if (display.textContent.includes(".") && input==="."){
        return false;
    }
    return true;
}

function stateRestrictions(display,input,inputType){
    if (inputType ==="numeric" && equalsToggle === false){
        if (restrictDecimal(display,input)){
            display.textContent +=input;
            return;
        }
        return;
    }
    if (operatorArray.includes(input) && memory===""/*&&operatorToggle===false*/) {
        memory = display.textContent;
        operator = input;
        display.textContent = "";
        equalsToggle = false;
        operatorToggle=true;
        return;
    }
    if (operatorArray.includes(input) && memory !==""){
        memory = calculate[input](Number(memory), Number(display.textContent));
        operator = input;
        display.textContent ="";
        return;
    }
      if ((input === "*"||input==="+"||input==="/"||input==="-") && memory ===""&& equalsToggle===true){
        memory = calculate[input](Number(memory), Number(display.textContent));
        operator = input;
        display.textContent ="";
        equalsToggle=false;
        return;
    }
    if (input === "="){
        display.textContent= calculate[operator](Number(memory) , Number(display.textContent));
        memory="";
        operator="";
        equalsToggle=true;
        return;
    }
}

function controller(e) {
    let display = document.querySelector('textarea');
    let targetButton = e.target
    let input = targetButton.innerText;
    let inputType = targetButton.dataset.action;
    stateRestrictions(display, input, inputType);
}

function init(){
 let div = document.querySelector('div');
    div.addEventListener("click", event=>{
        controller(event);
    })
    let clearButton = document.getElementById('clear');
    clearButton.onclick=clear;
}
window.onload=init;

