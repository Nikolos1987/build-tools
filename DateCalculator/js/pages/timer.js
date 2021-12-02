//заглушка д.з 2

import"./timerButtton.js"
let openTimer=document.querySelector(".timer");
let timerblok=document.querySelector('.timerBlock')


openTimer.addEventListener('click',()=>{
    timerblok.classList.toggle('open')
}

)
let dateCalk=document.querySelector('.calc__button');
let batlleCalk=document.getElementById("calcDate");
let init=document.querySelector('.datecalc')
batlleCalk.remove()  
let clickCalk=1
dateCalk.addEventListener('click',()=>{
clickCalk+=1
console.log(clickCalk%2==0)
if(clickCalk%2==0){
init.innerHTML=`
<form id="calcDate">
        <label for="dateFrom">
            Первая дата:
            <input type="date" name="dateFrom" id="dateFrom">
        </label>
        <label for="dateTo">
            Вторая дата:
            <input type="date" name="dateTo" id="dateTo">
        </label>
        <button type="submit">Рассчитать промежуток</button>
    </form>
    <p id="output">
    </p>`
}
else{
   document.getElementById("calcDate").remove()  
}

})






