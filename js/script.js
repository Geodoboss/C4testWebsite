// Sticky Navbar and Smooth Scrolling
window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky", window.scrollY > 50);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Service Booking Form Validation
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("bookingForm").addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let service = document.getElementById("service").value;
        let errorMessage = "";

        if (name === "") {
            errorMessage += "Please enter your name.\n";
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errorMessage += "Please enter a valid email.\n";
        }
        if (service === "") {
            errorMessage += "Please select a service.\n";
        }

        if (errorMessage) {
            alert(errorMessage);
        } else {
            alert("Booking request submitted successfully!");
            this.reset();
        }
    });
});
