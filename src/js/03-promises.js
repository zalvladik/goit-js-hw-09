import Notiflix from 'notiflix';
const formSubmit = document.querySelector('button[type="submit"]')
const firstStep = document.querySelector('input[name="delay"]')
const otherStep = document.querySelector('input[name="step"]')
const number = document.querySelector('input[name="amount"]')
const backbody = document.querySelector('body')
backbody.style.backgroundColor = 'grey'

formSubmit.addEventListener('click', () => {
  configuration.numberPosition()})

const configuration = {
  position: 1,
  numberPosition() {
    setTimeout(() => {
      createPromise(configuration.position,otherStep.value)
    },firstStep.value)
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  
      const shouldResolve = Math.random() > 0.3;

  if (shouldResolve) {
     resolve({position, delay});
  } else {
     reject({position, delay});
  }
})
}

createPromise()
.then(({ position, delay }) => {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
.catch(({ position, delay }) => {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  

  


