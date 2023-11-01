const menu = {

    _meal: "",
    _price: 0,
    
    set meal (mealToCheck) {
      if (typeof mealToCheck === 'string'){
        return this._meal = mealToCheck;
      } else {
        return "Wrong Type";
      }
    },
  
    set price (priceToCheck) {
      if (typeof priceToCheck === 'number'){
        return this._price = priceToCheck;
      } else {
        return "Wrong Type";
      }
    },
  
    get todaysSpecial () {
      if (this._meal && this._price){
        return `Today\'s Special is ${this._meal} for ${this._price}$!`
      } else {
        return 'Meal or price was not set correctly!'
      }
    },
  
  };
  
  menu.price = 100
  menu.meal = "Khichdi"
  
  console.log(menu._price)
  console.log(menu._meal)
  
  