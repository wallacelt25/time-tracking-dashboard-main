let links = document.querySelectorAll("a");

let dailyPeriod = document.getElementById('daily-period');
let weeklyPeriod = document.getElementById('weekly-period');
let monthlyPeriod = document.getElementById('monthly-period');

let workTimeCurrent = document.getElementById('work-time-current');
let playTimeCurrent = document.getElementById('play-time-current');
let studyTimeCurrent = document.getElementById('study-time-current');
let exerciseTimeCurrent = document.getElementById('exercise-time-current');
let socialTimeCurrent = document.getElementById('social-time-current');
let selfCareTimeCurrent = document.getElementById('self-care-time-current');

let timeCurrent = [workTimeCurrent, playTimeCurrent, studyTimeCurrent, exerciseTimeCurrent, socialTimeCurrent, selfCareTimeCurrent];

let workTimePrevious = document.getElementById('work-time-previous');
let playTimePrevious = document.getElementById('play-time-previous');
let studyTimePrevious = document.getElementById('study-time-previous');
let exerciseTimePrevious = document.getElementById('exercise-time-previous');
let socialTimePrevious = document.getElementById('social-time-previous');
let selfCareTimePrevious = document.getElementById('self-care-time-previous');

let timePrevious = [workTimePrevious, playTimePrevious, studyTimePrevious, exerciseTimePrevious, socialTimePrevious, selfCareTimePrevious];

const data = fetch("./data.json", { mode: "no-cors" }).then((res) => res.json()).then((data) => {
  function switchActive(links, active) {
    links.forEach(function(link) {
        link.classList.remove('active');
      });

    active.classList.add('active');
  };

  dailyPeriod.addEventListener('click', function() {
    switchActive(links, this);

    for (i = 0; i < data.length; i++) {
      timeCurrent[i].textContent = data[i].timeframes.daily.current;
      timePrevious[i].textContent = data[i].timeframes.daily.previous;
    };
  });

  weeklyPeriod.addEventListener('click', function() {
    switchActive(links, this);

    for (i = 0; i < data.length; i++) {
      timeCurrent[i].textContent = data[i].timeframes.weekly.current;
      timePrevious[i].textContent = data[i].timeframes.weekly.previous;
    };
  });

  monthlyPeriod.addEventListener('click', function() {
    switchActive(links, this);

    for (i = 0; i < data.length; i++) {
      timeCurrent[i].textContent = data[i].timeframes.monthly.current;
      timePrevious[i].textContent = data[i].timeframes.monthly.previous;
    };
  });
});