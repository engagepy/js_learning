const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val)
    if (checkA === checkB) {
      return checkB;
    } else {
      return 'inconsistent results';
    }
  }
  
  console.log(checkConsistentOutput(addTwo, 2));
  

  const higherOrderFunc = param => {
    console.log(param());
    return `I just invoked ${param.name} as a callback function!`
  }
   
  const anotherFunc = () => {
    return 'I\'m being invoked by the higher-order function!';
  }
  
  console.log(higherOrderFunc(anotherFunc));



  /*
  In this example, we invoked higherOrderFunc() with an anonymous function (a function without a name) that counts to 10. Anonymous functions can be arguments too!
  */
  
  higherOrderFunc(() => {
    for (let i = 0; i <= 10; i++){
      console.log(i);
    }
  });
  

