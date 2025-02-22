document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll(".navbar a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Button hover effect
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.1)";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

    // Dynamic content animations on scroll
    const animatedElements = document.querySelectorAll(".fade-in, .slide-in, .scale-up");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    animatedElements.forEach(el => observer.observe(el));

    // Form validation
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (e) => {
            const inputs = form.querySelectorAll("input, textarea");
            let valid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.border = "2px solid red";
                    valid = false;
                } else {
                    input.style.border = "";
                }
            });
            if (!valid) {
                e.preventDefault();
                alert("Please fill in all required fields.");
            }
        });
    }
});
