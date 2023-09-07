const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor') {
      return userInput;
    } else {
      console.log('Error!');
    }
  };
  
  
  const getComputerChoice = () => {
    choice = Math.floor(Math.random() * 3);
    switch (choice) {
      case 0:
      return 'rock'
      break;
      case 1:
      return 'paper'
      break;
      case 2:
      return 'scissor'
      break;
    }
  }
  
  
  const determineWinner = (userInput, computerChoice) => {
    
      if (userInput === computerChoice){
      return 'The game is a tie';
    }
  
      else if (userInput === 'bombcheat'){
        return 'You Won Outstandingly :p'
      }
  
    if (userInput === 'rock'){
      
      if (computerChoice === 'paper'){
        return 'Computer Won';
      } else {
        return 'User Won';
      }
  }
  
    if (userInput === 'scissor') {
      if (computerChoice === 'Rock') {
        return 'Computer Won';
      } else {
        return 'User Won'
      }
    }

    if (userInput === 'paper') {
        if (computerChoice === 'scissor') {
            return 'Computer Won';
        } else {
            return 'User Won'
        }
        }
  };
  
  
  
  console.log(determineWinner('paper', 'rock'));

  