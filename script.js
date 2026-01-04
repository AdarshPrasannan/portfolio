// THEME TOGGLE
const toggle = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.theme === "dark") {
  body.classList.add("dark");
  toggle.textContent = "☀️";
}

toggle.onclick = () => {
  body.classList.toggle("dark");
  localStorage.theme = body.classList.contains("dark") ? "dark" : "light";
  toggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
};

// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("active");
  });
});
reveals.forEach(r => observer.observe(r));

// MODAL
function openModal() {
  document.getElementById("modal").style.display = "block";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// CONTACT (placeholder)
document.getElementById("contactForm").onsubmit = e => {
  e.preventDefault();
  alert("Message sent (connect EmailJS here)");
};
