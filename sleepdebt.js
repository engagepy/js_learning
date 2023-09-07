const getSleepHours = day => {
    switch (day){
    case 'monday':
    return 8
    break;
    case 'tuesday':
    return 8
    break;
    case 'wednesday':
    return 8
    break;
    case 'thursday':
    return 8
    break;
    case 'friday':
    return 9
    break;
    case 'saturday':
    return 10
    break;
    case 'sunday':
    return 10
    break;
  }
  };
  
  /* A smarter way to do it ahead! 
  
  const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;*/
  
  const getActualSleepHours = () =>     getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = () => {
    ideahours = 8 * 7
    return ideahours;
  };
  
  const calculateSleepDebt = () => {
    actualSleep = getActualSleepHours();
    idealSleep = getIdealSleepHours(); 
  
    if (actualSleep === idealSleep) {
      return 'All Good';
    } else if (actualSleep > idealSleep) {
      return `Being Lazy by ${actualSleep - idealSleep} hours per week `;
    }else {
      return `Sleep More by ${idealSleep - actualSleep} hours`;
    }
    }
    
  console.log(calculateSleepDebt());
  