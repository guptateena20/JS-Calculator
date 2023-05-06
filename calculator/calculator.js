let screen = document.querySelector("#screen");
let buttons = document.querySelectorAll("button");
// console.log(buttons);
let screenValue = "";
for(let items of buttons){
    items.addEventListener("click", (e) => {
        // console.log(e.target);
        buttonText = e.target.innerText;
        // console.log(buttonText);
        if(buttonText == "X"){
            buttonText = "*";
        // console.log(buttonText);

            screenValue += buttonText; 
            screen.value = screenValue;
        }
        else if(buttonText == "C"){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == "="){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}