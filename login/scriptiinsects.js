const modeBtn = document.getElementById("moodChangeBtn");
const body = document.body;

// Apply saved mode on load
if (localStorage.getItem("mode") === "dark") {
  body.classList.add("dark-mode");
}

modeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem("mode", body.classList.contains("dark-mode") ? "dark" : "light");
});
  