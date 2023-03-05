import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const dataTimePicker = document.querySelector('input[type="text"]');
const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //   console.log(selectedDates[0]);
      const date = new Date();
    //   console.log(selectedDates[0].getTime());

    if (selectedDates[0].getTime() < date.getTime()) {
        console.log('Please choose a date in the future');
      startBtn.disabled = true;
    //   console.log(Date());
    } else {
      startBtn.disabled = false;
    //   console.log(dataTimePicker.value.getTime());
    //   console.log(date.getTime());
    }
  },
};

flatpickr(dataTimePicker, options);
