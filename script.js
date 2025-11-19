// Fade in page when it loads
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Mobile menu toggle
function toggleMenu() {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("open");
}

// Contact Form Validation
function validateContact() {
    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const message = document.getElementById("contactMessage").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Enter a valid email address.");
        return false;
    }

    alert("Message Sent!");
    return true;
}
