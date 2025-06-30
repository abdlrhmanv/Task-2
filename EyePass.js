const passwordField = document.getElementById("passwordField");
const eyeIcon = document.getElementById("eye");

eyeIcon.addEventListener("click", function() {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.textContent = "🙈";
    } else {
        passwordField.type = "password";
        eyeIcon.textContent = "👁️";
    }
});
