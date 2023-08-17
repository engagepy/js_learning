let raceNumber = Math.floor(Math.random() * 1000);

let early = true;
let late = true;
let age = 19;

let runner;

if (age >= 18 && early) {
  raceNumber += 1000;
  console.log(`Race Number ${raceNumber} Time is 9:30 am`);
}

else if (age >= 18 && late) {
  console.log(`Race Number ${raceNumber} Time is 11:00 am`);
}

else if (age < 18){
  console.log(`Race Number ${raceNumber} Time is 12:30 am`);
}

  

