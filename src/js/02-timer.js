import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dataTimePicker = document.querySelector('input#datetime-picker');
const timerDiv = document.querySelector('div.timer');
const startBtn = document.querySelector('button[data-start]');
const spanDays = document.querySelector('span[data-days]');
const spanHours = document.querySelector('span[data-hours]');
const spanLabel = document.querySelector('span.label');
const spanMinutes = document.querySelector('span[data-minutes]');
const spanSeconds = document.querySelector('span[data-seconds]');

// ELEMENTS STYLING //

dataTimePicker.style.fontSize = '18px';
startBtn.style.fontSize = '18px';
timerDiv.style.display = 'flex';
timerDiv.style.paddingTop = '30px';
timerDiv.style.textTransform = 'uppercase';

timerDiv.style.gap = '20px';
spanLabel.style.display = 'flex';
spanLabel.style.justifyContent = 'center';

spanDays.style.fontSize = '50px';
spanDays.style.lineHeight = '1';
spanDays.style.display = 'flex';
spanDays.style.justifyContent = 'center';

spanHours.style.fontSize = '50px';
spanHours.style.display = 'flex';
spanHours.style.lineHeight = '1';
spanHours.style.justifyContent = 'center';

spanMinutes.style.fontSize = '50px';
spanMinutes.style.display = 'flex';
spanMinutes.style.lineHeight = '1';
spanMinutes.style.justifyContent = 'center';

spanSeconds.style.fontSize = '50px';
spanSeconds.style.display = 'flex';
spanSeconds.style.lineHeight = '1';
spanSeconds.style.justifyContent = 'center';

startBtn.disabled = true;
// ELEMENTS STYLING //

function convertMs(ms) {
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

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  if (value < 10) {
    return value.toString().padStart(2, '0');
  } else {
    return value;
  }
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = new Date();

    if (selectedDates[0].getTime() < date.getTime()) {
      Notiflix.Notify.failure(
        'Please choose a currentDate in the future',
        function cb() {
          // callback
        }
      );
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
      let milliSecondsCounter = selectedDates[0].getTime() - date.getTime();
      let counterDateObject = convertMs(milliSecondsCounter);
      spanDays.textContent = addLeadingZero(counterDateObject.days);
      spanHours.textContent = addLeadingZero(counterDateObject.hours);
      spanMinutes.textContent = addLeadingZero(counterDateObject.minutes);
      spanSeconds.textContent = addLeadingZero(counterDateObject.seconds);

      startBtn.addEventListener('click', () => {
        startBtn.disabled = true;
        let countDown = Math.round(milliSecondsCounter / 1000);

        timerId = setInterval(() => {
          counterDateObject = convertMs(milliSecondsCounter);
          spanDays.textContent = addLeadingZero(counterDateObject.days);
          spanHours.textContent = addLeadingZero(counterDateObject.hours);
          spanMinutes.textContent = addLeadingZero(counterDateObject.minutes);
          spanSeconds.textContent = addLeadingZero(counterDateObject.seconds);
          milliSecondsCounter -= 1000;
          if (milliSecondsCounter < 0) {
            clearInterval(timerId);
            console.log(`STOP!`);
          }
        }, 1000);
      });
    }
  },
};

flatpickr(dataTimePicker, options);
