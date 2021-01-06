const getSleepHours = day => {
switch(day) {
  case 'monday':
    return 8
    break;
  case 'tuesday':
    return 7
    break;
  case 'wednesday':
    return 6
    break;
  case 'thursday':
    return 7
    break;
  case 'friday':
    return 9
    break;
  case 'saturday':
    return 9
    break;
  case 'sunday':
    return 9
    break;
  default:
    return "Error!"

}
};

const getActualSleepHours = () => {
  return getSleepHours ('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
}

const getIdealSleepHours = () => {
  let idealHours = 8
  return idealHours *7;
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    return "You've got the perfect amount of sleep.";
  } else if (actualSleepHours > idealSleepHours) {
    return "You got more sleep than needed.";
  } else if (actualSleepHours < idealSleepHours) {
    return "You should get " + (idealSleepHours - actualSleepHours) + " hours more rest this week."
  } else {
    console.log("Error! something went wrong, check your code.");
  }
};

console.log(calculateSleepDebt());