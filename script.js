document.addEventListener("DOMContentLoaded", function () {
    // Show Welcome Popup
    const popup = document.getElementById("welcome-popup");
    const closeBtn = document.getElementById("close-popup");

    popup.style.display = "flex"; // Show popup when page loads

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none"; // Hide popup when button clicked
    });

    // Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent reload
            alert("Your message has been sent! Thank you 💖");
            this.reset();
        });
    }
});
