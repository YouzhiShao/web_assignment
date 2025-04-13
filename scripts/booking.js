/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?
/********* create variables *********/
const dailyRateFull = 35; // Cost per full day
const dailyRateHalf = 20; // Cost per half day
let selectedDays = new Set(); // To track selected days
let currentRate = dailyRateFull; // Default rate is full day
const calculatedCostElement = document.getElementById("calculated-cost");
const dayButtons = document.querySelectorAll(".day-selector li");
const fullButton = document.getElementById("full");
const halfButton = document.getElementById("half");
const clearButton = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
dayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!button.classList.contains("clicked")) {
      button.classList.add("clicked");
      selectedDays.add(button.id); // Add day to selectedDays
    } else {
      button.classList.remove("clicked");
      selectedDays.delete(button.id); // Remove day from selectedDays
    }
    calculateTotalCost(); // Recalculate cost
  });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener("click", () => {
  dayButtons.forEach((button) => button.classList.remove("clicked"));
  selectedDays.clear(); // Reset selected days
  calculatedCostElement.innerHTML = "0"; // Reset cost to 0
});
/********* change rate *********/
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
fullButton.addEventListener("click", () => {
  currentRate = dailyRateFull; // Set rate to full day
  fullButton.classList.add("clicked");
  halfButton.classList.remove("clicked");
  calculateTotalCost(); // Recalculate cost
});

halfButton.addEventListener("click", () => {
  currentRate = dailyRateHalf; // Set rate to half day
  halfButton.classList.add("clicked");
  fullButton.classList.remove("clicked");
  calculateTotalCost(); // Recalculate cost
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateTotalCost() {
  const totalCost = selectedDays.size * currentRate; // Calculate total cost
  calculatedCostElement.innerHTML = totalCost; // Update cost display
}
