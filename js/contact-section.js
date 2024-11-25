import { createContactForm } from "./contact-form.js";

export function createContactSection() {
  const contactContent = document.createElement("div");
  contactContent.classList.add("container");

  const contactTitle = document.createElement("h4");
  contactTitle.textContent = "Contact";

  contactContent.appendChild(contactTitle);

  //----------the contact form ------------------
  const form = createContactForm();
  contactContent.appendChild(form);

  // Submit Button (visually outside the form)
  const submitBtn = document.createElement("button");
  submitBtn.type = "button"; // Important: Prevent browser's default form submission
  submitBtn.textContent = "Submit";
  submitBtn.classList.add("cta-btn");
  contactContent.appendChild(submitBtn); // Add button below the form

  // Add click event listener to the button
  submitBtn.addEventListener("click", () => {
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    // Form validation logic
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const countryCode = form
      .querySelector(".country-select")
      .getAttribute("data-value");
    data.countryCode = countryCode;

    const { name, email, phone, message, company } = data;

    if (!name || !email || !phone || !message) {
      alert("Please fill out all required fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    data.company = company || "N/A";

    // Send email via EmailJS if validation passes
    emailjs.send("service_kyfy3wx", "contact_form", data).then(
      function (response) {
        alert("Email sent successfully!");
        console.log("Success!", response.status, response.text);

        submitBtn.disabled = false;
        submitBtn.textContent = "Submit";
        
        // Clear the form
        form.reset();
      },
      function (error) {
        alert("Failed to send email. Please try again later.");
        console.error("Error:", error);
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit";
      }
    );
  });

  // Helper function for email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return contactContent;
}
