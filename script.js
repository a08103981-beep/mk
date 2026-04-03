const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const form = document.getElementById("booking-form");
const message = document.getElementById("form-message");

if (form && message) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = String(formData.get("name") || "Guest");
    message.textContent = `Thanks ${name}! Your enquiry is recorded. Please call MK Vilas to confirm your booking.`;
    form.reset();
  });
}
