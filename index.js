// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const numberDict = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
  };

  let [hour, minute] = time.split(':');
  hour = parseInt(hour, 10);
  minute = parseInt(minute, 10);
  if (hour > 12) {
    hour -= 12;
  }
  let nextHour = hour + 1;
  nextHour = (nextHour === 13) ? 1 : nextHour;

  const minsToNextHour = 60 - minute;
  const stringHour = numberDict[hour];
  const stringNextHour = numberDict[nextHour];
  const stringMin = numberDict[minute];
  const stringMinToNextHour = numberDict[minsToNextHour];

  if (time === '0:00') {
    return 'midnight';
  }
  if (time === '12:00') {
    return 'midday';
  }

  if (minute === 0) {
    return `${stringHour} o'clock`;
  }
  if (minute > 0 && minute < 30) {
    if (minute === 15) {
      return `quarter past ${stringHour}`;
    }
    return `${stringMin} past ${stringHour}`;
  }
  if (minute === 30) {
    return `half past ${stringHour}`;
  }
  if (minute > 30 && minute < 60) {
    if (minute === 45) {
      return `quarter to ${stringNextHour}`;
    }
    return `${stringMinToNextHour} to ${stringNextHour}`;
  }

  return 'half past eight';
}

module.exports = { convertTimeToWords };
