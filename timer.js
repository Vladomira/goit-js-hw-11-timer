// refs = {
    // inputDate: document.querySelector('.input').value,
//     secondsText: document.querySelector('.seconds'),
//     minutesText: document.querySelector('.minutes'),
//     hoursText: document.querySelector('.hours'),
//     daysText: document.querySelector('.days'),
// }

class CountdownTimer {
    consrtuctor({selector, targetDate}){        
        targetDate = this.targetDate;
        this.selector = selector;
        this.selectorTimer = document.querySelector(`${this.selector}`);
        this.daysText = this.selectorTimer.children[0].firstElementChild.textContent;
        this.hoursText= this.selectorTimer.children[1].firstElementChild.textContent;
        this.minsText =  this.selectorTimer.children[2].firstElementChild.textContent;
        this.secsText =  this.selectorTimer.children[3].firstElementChild;       
    }

    
    timer(){
    const futureTime = new Date("Sep 5, 2022").getTime(); 
    
    function changeTime(){
        const currentTime = Date.now();     
        const deltaTime = futureTime - currentTime   
        // console.log(deltaTime)
        const days = Math.floor(deltaTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((deltaTime % (1000 * 60)) / 1000);

        this.daysText = days  < 10 ? `0${days}` : days; 
        this.hoursText = hours  < 10 ? `0${hours}` : hours; 
        this.minsText = mins  < 10 ? `0${mins}` : mins;
        this.secsText.textContent = secs  < 10 ? `0${secs}` : secs;
        return `${days}:${hours}:${mins}:${secs}`;
        
        
    }
    setInterval(changeTime, 1000);
    }      
}

const countdown = new CountdownTimer({
    selector: '#timer-1',
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