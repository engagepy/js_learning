let input = 'Life is Beautiful';
const vowels = ['a','e','i','o','u'];
let resultArray = [];

for (i=0; i < input.length; i++) {
  input[i];
  
  //console.log(i);
  //console.log(input[i]);
  for (v=0; v < vowels.length; v++){
    if (input[i].toLowerCase() === vowels[v]) {
      if (input[i].toLowerCase() === 'u' || input[i].toLowerCase() === 'e' ) {
        resultArray.push(input[i] + input[i]);
      }else {
        resultArray.push(input[i]);
      }
    }
  }
}

console.log(resultArray.join('').toUpperCase())
