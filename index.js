// Создай плагин настраиваемого таймера, который ведет обратный 
// отсчет до предварительно определенной даты. Такой плагин может
//  использоваться в блогах и интернет-магазинах, страницах регистрации 
// событий, во время технического обслуживания и т. д.

// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.
refs = {
  secondsText: document.querySelector('.seconds'),
  minutesText: document.querySelector('.minutes'),
  hoursText: document.querySelector('.hours'),
  daysText: document.querySelector('.days'),
  timer: document.querySelector('.timer')

}

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

const time = CountdownTimer.targetDate - Date.now( );

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});

const timer = {
  

   start (){
    const startTime = Date.now( );
    // const secText = Number(refs.secondsText.textContent);

  setInterval(() =>{
   const currentTime = Date.now();
   const time = this.targetDate - currentTime;


   const deltaTime = currentTime - startTime;
   const  {days, hours, mins, secs} = getTimeComponents(deltaTime);
          // {days, hours, mins, secs}
   updateClockface({days, hours, mins, secs})
   console.log(`${days}:${hours}:${mins}:${secs}`)
  
    }, 1000)
  }
   }










console.log(Number(refs.secondsText.textContent))
// method
function timerMethod(){
  result = Math.floor((new Date() - startTime) / 1000);  
  let seconds = result % 60;
  let minutes = Math.floor(result / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 60);

  refs.secondsText.textContent = seconds  < 10 ? `0${seconds}` : seconds;  
  refs.minutesText.textContent = minutes  < 10 ? `0${minutes}` : minutes;  
  refs.hoursText.textContent = hours  < 10 ? `0${hours}` : hours;  
  refs.daysText.textContent = days  < 10 ? `0${days}` : days;  
}
// let watchId = null;
let startTime = null;
let result= null; 
console.log(new Date)

const timer ={
  start(){
   startTime = new Date();

  watchId = setInterval(timerMethod, 1000)
  }
}

timer.start()




