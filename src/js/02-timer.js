import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const buttonStart = document.querySelector('button[data-start]')
const daysValue = document.querySelector('span[data-days]')
const hoursValue = document.querySelector('span[data-hours]')
const minutesValue = document.querySelector('span[data-minutes]')
const secondsValue = document.querySelector('span[data-seconds]')

buttonStart.addEventListener('click',() => {
  options.startTimer()})

let timeForTimerBack = null

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectDate = new Date(selectedDates);
        if(Date.now() > selectDate.getTime()){
            return Notiflix.Notify.failure("Please choose a date in the future")
        }
        buttonStart.removeAttribute('disabled', 'disabled')
        timeForTimerBack = (selectDate.getTime() - Date.now())
        
    },
    startTimer(){
      if(buttonStart.hasAttribute('disabled', 'disabled')){
        return
      }
      clearInterval(dateSettings.intervalId)
      dateSettings.convertMs(timeForTimerBack)
      buttonStart.setAttribute('disabled', 'disabled')
    }
  };

const dateSettings = {
  intervalId: null,
  convertMs(ms) {
    if(ms <= 0){
      return Notiflix.Notify.failure("Time out !!!")
    }
  
      // Number of milliseconds per unit of time
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
    
      // Remaining days
      const days = Math.floor(ms / day);
      // Remaining hours
      const hours = Math.floor((ms % day) / hour);
      // Remaining minutes
      const minutes = Math.floor(((ms % day) % hour) / minute);
      // Remaining seconds
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      
        daysValue.textContent = days
        hoursValue.textContent = hours
        minutesValue.textContent = minutes
        secondsValue.textContent = seconds 
        return this.remainingTime(ms)
    },
    remainingTime(remainingTime){
      remainingTime = remainingTime - 1000
      this.intervalId = setTimeout(() => {
        this.convertMs(remainingTime)
      },1000)
    },
}
  flatpickr('#datetime-picker', options)
