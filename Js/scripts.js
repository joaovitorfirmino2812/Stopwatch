
let interval
let minutes = 0
let seconds = 0
let milliseconds = 0
let isPaused = false

function load(){
    const minutesEl = document.querySelector('#minutes')
    const secondsEl = document.querySelector('#seconds')
    const millisecondsEl = document.querySelector('#milliseconds')
    const start = document.querySelector('#start')
    const pause = document.querySelector('#pauseBtn')
    const continuebtn = document.querySelector("#continueBtn")
    const resetbtn = document.querySelector("#resetBtn")
    start.addEventListener("click", startTimer)
    



function startTimer(){

    interval = setInterval(()=>{

        if(!isPaused){
            milliseconds++
            if(milliseconds === 100){
                seconds++
                milliseconds = 0
            }
            
            if(seconds === 60){
                minutes++
                seconds = 0

            }

            minutesEl.textContent = minutes
            secondsEl.textContent = seconds
            millisecondsEl.textContent = milliseconds

            if(milliseconds >= 1){
                start.setAttribute("style", "display: none")
                pause.setAttribute("style","display: flex")
                pause.addEventListener("click", pauseTimer)
                continuebtn.addEventListener("click", continueTimer)
                resetbtn.addEventListener("click", resetTimer)


            }
    
        }

  
    }, 1)
}

function pauseTimer(){
    isPaused = true
    if(isPaused = true){

        pause.setAttribute("style", "display: none")
        continuebtn.setAttribute("style", "display: flex")

    }
}

function continueTimer(){
    isPaused = false
    continuebtn.setAttribute("style","display: none")
    pause.setAttribute("style"," display: flex")
}

function resetTimer(){
    milliseconds = 0
    seconds = 0
    minutes = 0
    isPaused = false
    pause.setAttribute("style","display: none")
    continuebtn.setAttribute("style","display: none")
    start.setAttribute("style","display: flex")
    clearInterval(interval)
    minutesEl.textContent = "00"
    secondsEl.textContent = "00"
    millisecondsEl.textContent = "000"


}

}
window.addEventListener("load", load)