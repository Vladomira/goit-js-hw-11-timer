

class CountdownTimer {
    consrtuctor({ selector, targetDate }){        
        this.targetDate = targetDate;
        this.selector = selector;        
        this.selectorTimer = document.querySelector(selector);

        // this.daysText = document.querySelector(`${selector} [data-value="days"]`).textContent;
        this.daysText = this.selectorTimer.children[0].children[0].textContent;
        this.hoursText = this.selectorTimer.children[1].children[0].textContent;
        this.minsText =  this.selectorTimer.children[2].children[0].textContent;
        this.secsText =  this.selectorTimer.children[3].children[0].textContent;       
    }
    
    timer(){
    const futureTime = new Date("Sep 5, 2022").getTime(); 
    
    setInterval(() =>{
        const currentTime = Date.now();     
        const deltaTime = futureTime - currentTime;
        console.log(deltaTime);
        const days = Math.floor(deltaTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((deltaTime % (1000 * 60)) / 1000);

        this.daysText = days  < 10 ? `0${days}` : days; 
        this.hoursText = hours  < 10 ? `0${hours}` : hours; 
        this.minsText = mins  < 10 ? `0${mins}` : mins;
        this.secsText = secs  < 10 ? `0${secs}` : secs;

        return `${days}:${hours}:${mins}:${secs}`;   
        // console.log( this.selectorTimer)     
    }, 1000);
    }      
}

const countdown = new CountdownTimer({
    selector: "#timer-1",
    targetDate: Date.now(),
    }
)

countdown.timer();







// refs.daysText.textContent = days  < 10 ? `0${days}` : days; 
// refs.hoursText.textContent = hours  < 10 ? `0${hours}` : hours; 
// refs.minsText.textContent = mins  < 10 ? `0${mins}` : mins;
// refs.secsText.textContent = secs  < 10 ? `0${secs}` : secs;

// const selectorTimer = document.querySelector('.timer');
// console.log(selectorTimer)
// const daysField = selectorTimer.children[0].firstElementChild;
// console.log(daysField)
// const hoursText = selectorTimer.children[1].firstElementChild;
// console.log(hoursText)
// const minutesText = selectorTimer.children[2].firstElementChild;
// console.log(minutesText)
// const secondsText = selectorTimer.children[3].firstElementChild;
// console.log(secondsText)






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