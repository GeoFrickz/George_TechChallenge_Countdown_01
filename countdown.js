let countdownTimer = document.getElementById("timer");

let deadline = new Date("April 24, 2024 00:00:00").getTime();

function timer(){
    let now = new Date().getTime();
    let remainingTime = deadline - now;

    let s = Math.floor((remainingTime % (1000*60)) / 1000);
    let m = Math.floor((remainingTime % (1000*60*60)) / (1000*60));
    let h = Math.floor((remainingTime % (1000*60*60*24)) / (1000*60*60));
    let d = Math.floor(remainingTime / (1000*60*60*24));

    countdownTimer.innerText = d + " days " + h + " hours " + m + " minutes " + s + " seconds left.";

    if (remainingTime < 0){
        clearInterval(interval);
        countdownTimer.innerText = "Time is up.";
    }
}

let interval = setInterval(timer, 1000);