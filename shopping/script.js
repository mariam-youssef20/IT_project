document.addEventListener("DOMContentLoaded", function () {
  const moodBtn = document.getElementById("moodChangeBtn");
  const shopNowBtn = document.getElementById("shopNowBtn");
  moodBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
  shopNowBtn.addEventListener("click", function () {
    alert("Let's shop! Redirecting you to the products...");
    document.querySelector(".categories").scrollIntoView({
      behavior: "smooth",
    });
  });
});
function addToCart(itemName) {
  alert(itemName + " added to cart!");
}

