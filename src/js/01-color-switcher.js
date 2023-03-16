const bodyColor = document.querySelector('body')
const buttonStart = document.querySelector('button[data-start]') 
const buttonStop = document.querySelector('button[data-stop]') 

buttonStart.addEventListener('click', () => {
    colorSetting.getRandomHexColor()})

buttonStop.addEventListener('click', () => {
    colorSetting.stopInterval()})

const colorSetting = {
    intervalId: null,
    isActive: false,
    getRandomHexColor() {
        if(this.isActive){
            return;
        }
        this.isActive = true
        this.intervalId = setInterval(() => {     
            const resultColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            this.getRandomHexColor()
            return bodyColor.style.backgroundColor = resultColor
        }, 1000)
    },
    stopInterval() {
        clearInterval(this.intervalId)
        this.isActive = false
    }
}



  



