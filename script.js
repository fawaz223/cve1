const form = document.getElementById("login-form");
const submitBtn = document.getElementById("submit-btn");
const errorMsg = document.getElementById("error-msg");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const number = document.getElementById("number").value;

  if (number >= 1 && number <= 180) {
    // Login successful, redirect to next page
    window.location.href = "home.html";
  } else {
    errorMsg.textContent =
      "Incorrect Mat OR Unique No,       Guests Should Use 180 As Unique No";
  }
});
