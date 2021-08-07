refs = {
    inputDate: document.querySelector('.input'),
    secondsText: document.querySelector('.seconds'),
    minutesText: document.querySelector('.minutes'),
    hoursText: document.querySelector('.hours'),
    daysText: document.querySelector('.days'),
}

class CountDownTimer {
    consrtuctor(selector, targetDate){
        selector: this.selector;
        targetDate: this.targetDate;
    }
  
    timer(){
    
    const futureTime = new Date("Sep 5, 2022").getTime(); //время на момент вызова функции
    
        setInterval(() => {
        const currentTime = new Date().getTime();    
        const deltaTime = futureTime - currentTime;    
        // console.log(deltaTime)
        let days = Math.floor(deltaTime / (1000 * 60 * 60 * 24));
        let hours = Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((deltaTime % (1000 * 60)) / 1000);

        refs.daysText.textContent = days  < 10 ? `0${days}` : days; 
        refs.hoursText.textContent = hours  < 10 ? `0${hours}` : hours; 
        refs.minutesText.textContent = mins  < 10 ? `0${mins}` : mins;
        refs.secondsText.textContent = secs  < 10 ? `0${secs}` : secs;     
            
        
        return `${days}:${hours}:${mins}:${secs}`;
        
        }, 1000)
    }
}


const countdown = new CountDownTimer({
    selector: '#timer-1',
    targetDate: refs.daysText.value,
}
)
countdown.timer();











// function timer(){
    
//     const futTime = new Date("Sep 5, 2022").getTime(); //время на момент вызова функции
    
//     setInterval(() => {
//     const currentTime = new Date().getTime();    
//     const deltaTime = futTime - currentTime;    
//     // console.log(deltaTime)
//     let days = Math.floor(deltaTime / (1000 * 60 * 60 * 24));
//     let hours = Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let mins = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));
//     let secs = Math.floor((deltaTime % (1000 * 60)) / 1000);

//     refs.daysText.textContent = days  < 10 ? `0${days}` : days; 
//     refs.hoursText.textContent = hours  < 10 ? `0${hours}` : hours; 
//     refs.minutesText.textContent = mins  < 10 ? `0${mins}` : mins;
//     refs.secondsText.textContent = secs  < 10 ? `0${secs}` : secs;     
         
    
//     return `${days}:${hours}:${mins}:${secs}`;
    
//     }, 1000)
   
// }
// const result = timer();
// console.log(result)
// timer();

// function updateClockface({days, hours, mins, secs}){
//     refs.daysText = `${days}`;
//     refs.hoursText = `${hours}:`;
//     refs.minutesText = `${mins}:`;
//     refs.secondsText = `${secs}` ;
//   }
//   updateClockface()

// const time = CountDownTimer.targetDate - Date.now()


// getTimeComponents(time)





// const startTime = Date.now(); //текущее время всегда одинаково

// const time = CountdownTimer.targetDate.getTime - Date.now();
//  console.log(time)