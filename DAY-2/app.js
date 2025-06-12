
const inputElement = document.getElementById('inputElement');
const startTimer = document.getElementById('startTimer');
const CountDown = document.getElementById('CountDown');


function Time () {
    let valueSecound = parseInt(inputElement.value);
    if(isNaN(valueSecound)){
       CountDown.innerText = "Plese enter a valid number"
        return
    }

    if(valueSecound <= 0 ){
          CountDown.innerText = "Plese enter a  > = 0 "
          return
    }
    const Timer = setInterval(function(){
        valueSecound--;
         CountDown.innerText =` Time remaining: ${valueSecound} scound`
         
         if(valueSecound <= 0 ){
            clearInterval(Timer)
            CountDown.innerText =` Time UP  ☎`

         }
       
    }, 2 * 1000)
}

startTimer.addEventListener("click", Time)

