const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', function (event) {
event.preventDefault(); // Stop default form behavior

const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();

if (!name || !email || !message) {
feedback.textContent = "All fields are required.";
feedback.classList.remove("success");
feedback.classList.add("error");
return; // Stop further code from running
}

feedback.textContent = "Thank you for your message! I will get back to you soon.";
feedback.classList.remove("error");
feedback.classList.add("success");
form.reset();
});