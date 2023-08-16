let userName = 'Zora';

(userName) ? console.log(`Hello, ${userName}`) : console.log('Hello!');

let userQuestion = 'Life will be good ?';

console.log(`${userName} asked ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall  = '';

switch (randomNumber) {
  case 0:
  eightBall = 'Out of Luck, Out of Time!'
  break;
  case 1:
  eightBall = 'It is certain'
  break;
  case 2:
  eightBall = 'It is decidedly so'
  break;
  case 3:
  eightBall = 'Signs point to yes'
  break;
  case 4:
  eightBall = 'Cannot predict now'
  break;
  case 5:
  eightBall = 'Do not count on it'
  break;
  case 6:
  eightBall = 'My sources say no'
  break;
  case 7:
  eightBall = 'Outlook not so good'
  break;
    case 8:
  eightBall = 'Signs point to yes'
  break;
}

console.log(eightBall)