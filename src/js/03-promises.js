import Notiflix from 'notiflix';

const firstDelayInput = document.querySelector('input[name="delay"]');
const delayStepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');
const form = document.querySelector('.form');
const formLabels = document.querySelectorAll('label');
const formInputs = document.querySelectorAll('input');
const button = document.querySelector('button');

// ELEMENTS STYLING //
form.style.display = 'flex';
form.style.gap = '15px';
// form.style.justifyContent = 'flex-end';

formLabels.forEach(label => {
  label.style.display = 'flex';
  label.style.flexDirection = 'column';
  label.style.fontSize = '18px';
  label.style.lineHeight = '1.5';
});

formInputs.forEach(input => {
  input.style.display = 'flex';
  input.style.flexDirection = 'column';
  input.style.fontSize = '18px';
  input.style.lineHeight = '1.5';
});

button.style.display = 'flex';
button.style.justifyContent = 'flex-end';
button.style.fontSize = '18px';
button.style.lineHeight = '1.5';
button.style.height = '33px';
button.style.marginTop = '27px';

// ELEMENTS STYLING //

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return (promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({
          position: position,
          delay: delay,
        });
      } else {
        // Reject
        reject({
          position: position,
          delay: delay,
        });
      }
    }, delay);
  }));
}

function handleSubmit(event) {
  event.preventDefault();

  let firstDelayMs = Number(firstDelayInput.value);
  let delayStepMs = Number(delayStepInput.value);
  let amount = Number(amountInput.value);
  let step = firstDelayMs;

  for (let i = 1; i <= amount; i++) {
    createPromise(i, step)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    step = step + delayStepMs;
  }
}

form.addEventListener('submit', handleSubmit);
