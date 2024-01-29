let score = 0;
let clickValue = 1;
let intervalValue = 0;

let intervalId = window.setInterval(function(){
    score += intervalValue;
    updateValue();
    updateButtons();
}, 1000);

function myFunction() {
    score+=clickValue;
    updateValue();
    updateButtons();
}

function upgradeClickValue(){
    if (score >= 10){
        score -= 10;
        clickValue++;
        updateValue();
        updateButtons();
    }
    else alert("Error");
}

function upgradeIntervalValue(){
    if (score >= 25){
        score -= 25;
        intervalValue++;
        updateValue();
        updateButtons();
    }
    else alert("Error");    
}

function updateValue(){
    let element = document.getElementById("scoreCounter");
    element.innerHTML = score.toString();
    let clickText = document.getElementById("clickValueElement");
    clickText.innerHTML = "Click value: " + clickValue.toString();
    let intervalText = document.getElementById("intervalValueElement");
    intervalText.innerHTML = "Interval value: " + intervalValue.toString();
    
}

function updateButtons(){
    let clickButton = document.getElementById("upgradeClick");
    let intervalButton = document.getElementById("upgradeInterval");
    clickButton.style = "display:none";
    intervalButton.style = "display:none";
    if (score >= 10){
        clickButton.style = "display:show";
    }
    if (score >= 25){
        intervalButton.style = "display:show";
    }
}