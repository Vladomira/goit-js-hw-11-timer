// Создай плагин настраиваемого таймера, который ведет обратный 
// отсчет до предварительно определенной даты. Такой плагин может
//  использоваться в блогах и интернет-магазинах, страницах регистрации 
// событий, во время технического обслуживания и т. д.

// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.


// const clock = {

//   start(){
//     const startTime = Number(refs.secondsText.textContent);
//     console.log(startTime)

//   setInterval(() => {
//     const diffTime = startTime;
//    }, 1000) 
//   }
  
// }

// let secText = Number(refs.secondsText.textContent);
// let minText = Number(refs.minutesText.textContent);
// let minutesText = Number(refs.hoursText.textContent);
// let daysText = Number(refs.daysText.textContent);

// const startTime = {daysText, minutesText, minText, secText }

// .*********
// repeta





// class CountdownTimer{
//   constructor (){
//     this.setInterval = null;
//   }
  
//   start(){
//     // при открытии страницы(при кнопке страт)
//     const startTime = Date.now( );
  
//   setInterval(() =>{
//    const currentTime = Date.now();
//    const deltaTime = currentTime - startTime;
//    const  {days, hours, mins, secs} = getTimeComponents(deltaTime);
//           // {days, hours, mins, secs}
//    updateClockface({days, hours, mins, secs})
//    console.log(`${days}:${hours}:${mins}:${secs}`)
  
//     }, 1000)
//   }
// }
// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

// const time = CountdownTimer.targetDate - Date.now( );
// console.log(time)
// const timer = new  CountdownTimer()
// console.log(CountdownTimer())


// function getTimeComponents(time){
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return {days, hours, mins, secs }
// }



// function updateClockface({days, hours, mins, secs}){
//   refs.daysText = `${days}`;
//   refs.hoursText = `${hours}:`;
//   refs.minutesText = `${mins}:`;
//   refs.secondsText = `${secs}` ;
// }

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

