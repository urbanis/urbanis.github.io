// script.js
const feedbackButton = document.getElementById("feedbackButton");
const feedbackPopup = document.getElementById("feedbackPopup");
const closePopup = document.getElementById("closePopup");
const submitFeedback = document.getElementById("submitFeedback");

feedbackButton.addEventListener("click", () => {
    feedbackPopup.style.display = "block";
});

closePopup.addEventListener("click", () => {
    feedbackPopup.style.display = "none";
});


submitFeedback.addEventListener("click", () => {
    const feedbackText = document.getElementById("feedbackText").value;
    const userEmail = document.getElementById("emailInput").value;

    // Construct the mailto URL
    const mailtoUrl = `mailto:nisleida.morales@gmail.com?subject=Feedback&body=${encodeURIComponent(feedbackText)}%0D%0A%0D%0AUser's Email: ${encodeURIComponent(userEmail)}`;

    // Open the user's email client
    window.location.href = mailtoUrl;

    // Close the popup
    feedbackPopup.style.display = "none";

    // Clear input fields
    document.getElementById("feedbackText").value = "";
    document.getElementById("emailInput").value = "";
});