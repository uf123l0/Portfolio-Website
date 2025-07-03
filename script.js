document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".circle");
    circles.forEach(circle => {
        let percent = circle.getAttribute("data-percent");
        circle.style.setProperty("--percent", percent + "%");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");

    function revealProjects() {
        projects.forEach((project) => {
            const projectTop = project.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (projectTop < windowHeight - 50) {
                project.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealProjects);
    revealProjects(); // Run initially
});


document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form");
    const socialLinks = document.querySelector(".social-links");

    function revealContact() {
        const formTop = contactForm.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (formTop < windowHeight - 50) {
            contactForm.classList.add("show");
            socialLinks.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealContact);
    revealContact(); // Run initially
});
