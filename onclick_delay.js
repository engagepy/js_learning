let element = document.querySelector('button');
let isRed = true; // I've renamed 'x' to 'isRed' for clarity

function turnButtonRed() {
  // Toggle the state
  if (isRed) {
    element.style.backgroundColor = 'red';
    element.style.color = 'white';
    element.innerHTML = 'Red Button';
  } else {
    element.style.backgroundColor = 'white';
    element.style.color = 'blue';
    element.innerHTML = 'White Button';
  }
  isRed = !isRed; // Flip the state for the next call
}

// Set up the initial click handler
element.onclick = function() {
  // Start the interval only if it's the first click
  if (typeof element.intervalId === 'undefined') {
    turnButtonRed(); // Turn red immediately on first click
    // Set up an interval to automatically toggle the color every second
    element.intervalId = setInterval(turnButtonRed, 1000);
  }
};
