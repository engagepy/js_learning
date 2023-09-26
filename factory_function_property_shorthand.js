const robotFactory = (model, mobile) => {
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
    /* 
    Function above can also be written without property shorthand as per ES6:
    const robotFactory = (model, mobile) => {
    return {
      model: model, ====> Notice variable and assignment are the same
      mobile: mobile, =====> Notice variable and assignment are the same
      beep() {
        console.log('Beep Boop');
      }
    }
  }
    */


  // To check that the property value shorthand technique worked:
  const newRobot = robotFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)