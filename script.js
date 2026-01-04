// THEME TOGGLE
const toggleBtn = document.getElementById("themeToggle");
const bodyEl = document.body;

if (localStorage.theme === "dark") {
  bodyEl.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.onclick = () => {
  bodyEl.classList.toggle("dark");
  localStorage.theme = bodyEl.classList.contains("dark") ? "dark" : "light";
  toggleBtn.textContent = bodyEl.classList.contains("dark") ? "☀️" : "🌙";
};
