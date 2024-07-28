let counter = 0;
let minutesCounter = 0;
let hoursCounter = 0;

const seconds = document.getElementsByClassName('seconds');
const minutes = document.getElementsByClassName('minutes');
const hours = document.getElementsByClassName('hours');

const updateSeconds = () => {
  counter += 1;

  if (counter === 60) {
    counter = 0;
    minutesCounter += 1;
    if (minutesCounter === 60) {
      minutesCounter = 0;
      if (hoursCounter === 23) {
        hoursCounter = 0;
      } else {
        hoursCounter += 1;
      }
    }
  }

  const formattedCounter = counter < 10 ? '0' + counter : counter;

  for (let i = 0; i < seconds.length; i++) {
    seconds[i].value = formattedCounter;
    console.log('Seconds:', seconds[i].value);
  }
};

const updateMinutes = () => {
  const formattedMinutes =
    minutesCounter < 10 ? '0' + minutesCounter : minutesCounter;

  for (let i = 0; i < minutes.length; i++) {
    minutes[i].value = formattedMinutes;
    console.log('Minutes:', minutes[i].value);
  }
};

const updateHours = () => {
  const formattedHours = hoursCounter < 10 ? '0' + hoursCounter : hoursCounter;

  for (let i = 0; i < hours.length; i++) {
    hours[i].value = formattedHours;
    console.log('Hours:', hours[i].value);
  }
};

const intervalId = setInterval(() => {
  updateSeconds();
  updateMinutes();
  updateHours();
}, 1000);
