// Without minutes and any intervals, just hours
const schedule = {
  0: null,
  1: { start: 8, end: 17 },
  2: { start: 8, end: 17 },
  3: { start: 8, end: 17 },
  4: { start: 8, end: 17 },
  5: { start: 8, end: 17 },
  6: { start: 8, end: 17 },
};

const weekday = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

const getNexWorkingDayNumber = (currentDayNumber, schedule) => {
  const nextDayNumbers = Array(7)
    .fill()
    .map((_, i) => currentDayNumber + i)
    .map((x) => (x >= 7 ? x - 7 : x))
    .slice(1);

  return nextDayNumbers.filter((x) => schedule[x])[0];
};

const currentDate = new Date();
const currentDayNumber = currentDate.getDay();
const currentHours = currentDate.getHours();
const todaySchedule = schedule[currentDayNumber];
const nextWorkingDayNumber = getNexWorkingDayNumber(currentDayNumber, schedule);

const isOpen = currentHours >= todaySchedule.start && currentHours < todaySchedule.end;

const closingTime = new Date(currentDate);
// 7 is EST timezone
closingTime.setHours(7 + todaySchedule.end);
closingTime.setMinutes(0);
closingTime.setSeconds(0);

const nextOpeningDate = new Date(currentDate);

let diff = nextWorkingDayNumber - currentDayNumber;
// diff can be negative number (1 - 6)
// fix it by adding +week (+7)
diff = diff < 0 ? diff + 7 : diff;

nextOpeningDate.setDate(currentDate.getDate() + diff);
// 7 is EST timezone
nextOpeningDate.setHours(7 + schedule[nextWorkingDayNumber].start);
nextOpeningDate.setMinutes(0);
nextOpeningDate.setSeconds(0);

// Update every minute
setInterval(() => {
  document.getElementById('workingStatus').innerText = getString();
}, 1000 * 60);

const getString = () => {
  if (isOpen) {
    return 'Open now';
  } else {
    const day = weekday[nextOpeningDate.getDay()];
    // -7 is EST timezone
    const nextHoursTz = nextOpeningDate.getHours() - 7;
    // make two digits format
    const hoursString = nextHoursTz < 9 ? '0' + nextHoursTz : nextHoursTz;
    // magic to get beautiful hours string (8:00 AM)
    const hours = new Date('1970-01-01T' + `${hoursString}:00:00` + 'Z').toLocaleTimeString(
      {},
      { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
    );

    return diff === 1 ? `Closed. Opens at ${hours} EST` : `Closed until ${day} ${hours} EST`;
  }
};

// Update when page is rendered for the first time
document.getElementById('workingStatus').innerText = getString();
