let displayBox = "";

function appendToDisplay(val){
    displayBox += val;
    document.getElementById("display").value = displayBox;
}

function clearDisplay(){
    displayBox = "";
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

