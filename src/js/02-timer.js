import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dataTimePicker = document.querySelector('input#datetime-picker');
const timerDiv = document.querySelector('div.timer');
const startBtn = document.querySelector('button[data-start]');
const spanDays = document.querySelector('span[data-days]');
const spanHours = document.querySelector('span[data-hours]');
const spanMinutes = document.querySelector('span[data-minutes]');
const spanSeconds = document.querySelector('span[data-seconds]');
const allValueSpans = document.querySelectorAll('span.value');
const allLabelSpans = document.querySelectorAll('span.label');

// ELEMENTS STYLING //
dataTimePicker.style.fontSize = '23px';

startBtn.style.fontSize = '23px';
startBtn.disabled = true;

timerDiv.style.display = 'flex';
timerDiv.style.paddingTop = '40px';
timerDiv.style.gap = '20px';

allValueSpans.forEach(valueSpan => {
  valueSpan.style.display = 'flex';
  valueSpan.style.justifyContent = 'center';
  valueSpan.style.fontSize = '60px';
  valueSpan.style.lineHeight = '1';
});

allLabelSpans.forEach(labelSpan => {
  labelSpan.style.display = 'flex';
  labelSpan.style.justifyContent = 'center';
  labelSpan.style.fontSize = '20px';
  labelSpan.style.lineHeight = '1.5';
  labelSpan.style.textTransform = 'uppercase';
});
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
        dataTimePicker.disabled = true;

        const timerId = setInterval(() => {
          let milliSecondsCounter =
            selectedDates[0].getTime() - new Date().getTime();
          counterDateObject = convertMs(milliSecondsCounter);
          spanDays.textContent = addLeadingZero(counterDateObject.days);
          spanHours.textContent = addLeadingZero(counterDateObject.hours);
          spanMinutes.textContent = addLeadingZero(counterDateObject.minutes);
          spanSeconds.textContent = addLeadingZero(counterDateObject.seconds);

          if (milliSecondsCounter < 0) {
            clearInterval(timerId);
            spanDays.textContent = '00';
            spanHours.textContent = '00';
            spanMinutes.textContent = '00';
            spanSeconds.textContent = '00';
            Notiflix.Notify.info('End of countdown!');
          }
        }, 1000);
      });
    }
  },
};

flatpickr(dataTimePicker, options);
