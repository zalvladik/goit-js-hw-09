import Notiflix from 'notiflix';
const formSubmit = document.querySelector('button')
const firstStep = document.querySelector('input[name="delay"]')
const otherStep = document.querySelector('input[name="step"]')
const number = document.querySelector('input[name="amount"]')

formSubmit.addEventListener('click',numberPosition)

let i = null
let settingDelayInterval = otherStep.value
let delay = otherStep.value
let position = null

function numberPosition(e) {
  e.preventDefault();
  position = null
  i = null
  setTimeout(() => {
      startscript(position,delay)
    },firstStep.value)
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    
  const delayInterval = setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
    if(i >= number.value){
      return clearTimeout(delayInterval)
    }
    settingDelayInterval = otherStep.value
    delay = Number(delay) + Number(otherStep.value)
    i = i + 1
    position = i
  if(position === 1){
      delay = firstStep.value 
      settingDelayInterval = otherStep.value
    }
if (shouldResolve) {
  resolve({position, delay});
} else {
  reject ({position, delay});
}
startscript(position, delay)
  },settingDelayInterval)
})
}

function startscript(position, delay){
createPromise(position, delay)
.then(({ position, delay }) => {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
.catch(({ position, delay }) => {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`)
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}



