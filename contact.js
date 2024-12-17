const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  const serviceId = "your-service-id";
  const templateId = "your-template-id";
  const userId = "your-user-id";

  emailjs
    .send(
      serviceId,
      templateId,
      {
        name,
        email,
        message,
      },
      userId
    )
    .then((response) => {
      console.log("Email sent successfully.", response.status, response.text);
      alert("Email sent successfully!");
      form.reset();
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again.");
    });
});
