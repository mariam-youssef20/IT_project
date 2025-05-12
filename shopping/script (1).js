document.addEventListener("DOMContentLoaded", function () {
  const moodBtn = document.getElementById("moodChangeBtn");
  const shopNowBtn = document.getElementById("shopNowBtn");
  moodBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});
