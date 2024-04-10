//Getting Elements By DOM
const timer = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
//Variables
let minutes = 25;
let seconds = 0;
let isPaused = true;
let timeInterval = 0;

//Start Timer Function

function startTimer() {
    if (isPaused) {
        isPaused = false;
        timeInterval = setInterval(updateTime, 1000);
    }
}

// Stop Timer Function
function stopTimer() {
    isPaused = true;
    clearInterval(timeInterval);
}

//Reset Timer Function
function resetTimer() {
    minutes = 25;
    seconds = 0;
    displayTime();
    clearInterval(timeInterval);
}

//Update Time Function

function updateTime() {
    if (seconds > 0) {
        seconds--;
    }
    else if (minutes > 0) {
        seconds = 59;
        minutes--;
    }
    else {
        clearInterval(timeInterval);
    }
    displayTime();
}

// Function For Displaying Time ON Screen

function displayTime() {
    timer.innerText = formatTime(minutes, seconds);
}

// Function To Formate Time

function formatTime(minutes, seconds) {
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}


//Event Listeners On Buttons


startButton.addEventListener('click', () => {
    startTimer();
});

stopButton.addEventListener('click', () => {
    stopTimer();
})
resetButton.addEventListener('click', () => {
    resetTimer();
})