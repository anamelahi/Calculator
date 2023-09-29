let displayBox = "";



function clearDisplay(){
    displayBox = "";
    document.getElementById("display").value = displayBox;
}

function display(val){
    displayBox += val;
    document.getElementById("display").value = displayBox;
}

function calculate(){
    try {
        displayBox = eval(displayBox);
        document.getElementById("display").value = displayBox;
    } catch (error) {
        document.getElementById("display").value = "ERROR";
    }
}

