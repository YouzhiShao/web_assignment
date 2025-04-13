// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// Select the submit button and contact page
const submitButton = document.getElementById("submit-button");
const contactPage = document.getElementById("contact-page");

// Add an event listener to the submit button
document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit-button");
  const contactPage = document.getElementById("contact-page");

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("user-name");
    const emailInput = document.getElementById("user-email");
    const messageInput = document.getElementById("user-message");

    if (
      !nameInput.value.trim() ||
      !emailInput.value.trim() ||
      !messageInput.value.trim()
    ) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    contactPage.innerHTML =
      '<p style="font-size: 24px; text-align: center;">Thank you for your message</p>';
  });
});
