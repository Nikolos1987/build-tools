// логика не до конца. Не успел к сдаче

let hour = document.getElementById("hour")
let minute= document.getElementById("minute")
let second= document.getElementById("second")
let buttonRun = document.getElementById("button");
let timerShow = document.getElementById("timer");


buttonRun.addEventListener('click', function() {

let time=second.value
var timer = setInterval(function () {     
    time-=1
second.value=time
    if (time==0){
        minute.value=minute.value-1
        time=60      

    }
if (minute.value==0){
            hour.value=hour.value-1
            minute.value=59
        }  
    
let stops= document.getElementById('stop')
stops.addEventListener("click",()=>clearInterval(timer))

 if (time==0){
      clearInterval(timer)
  } 

}
, 1000)


})
