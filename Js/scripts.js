
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
    start.addEventListener("click", startTimer)
    //pause.addEventListener("click", pauseTimer)



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
            }
    
        }

  
    }, 1)
}

}
window.addEventListener("load", load)