// Your code here
// Get the dodger element
const dodger = document.getElementById("dodger");

// Function to move the dodger left
function moveDodgerLeft() {
  // Get current position of the dodger
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
}

// Function to move the dodger right
function moveDodgerRight() {
    // Get current position of the dodger
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    // Get the width of the game area and calculate the right edge limit
    const gameWidth = document.getElementById("game").clientWidth;
    const dodgerWidth = 40; // Width of the dodger
      dodger.style.left = `${left + 1}px`;
  }
  

// Event listener to handle keydown events
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
