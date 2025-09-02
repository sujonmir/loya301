document.addEventListener("DOMContentLoaded", function () {
  const contactUsBtn = document.getElementById("contactUsBtn");
  const contactModal = document.getElementById("contactModal");
  const closeButton = document.querySelector(".close-button");
  const contactForm = document.getElementById("contactForm");

  // Open the modal when the button is clicked
  if (contactUsBtn) {
    contactUsBtn.addEventListener("click", function () {
      if (contactModal) {
        contactModal.style.display = "block";
      }
    });
  }

  // Close the modal when the close button is clicked
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      if (contactModal) {
        contactModal.style.display = "none";
      }
    });
  }

  // Close the modal if the user clicks anywhere outside of it
  window.addEventListener("click", function (event) {
    if (contactModal && event.target == contactModal) {
      contactModal.style.display = "none";
    }
  });

  // Handle form submission
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      const name = document.getElementById("name")?.value || "N/A";
      const company = document.getElementById("company")?.value || "N/A";
      const email = document.getElementById("email")?.value || "N/A";
      const phone = document.getElementById("phone")?.value || "N/A";
      const message = document.getElementById("message")?.value || "N/A";

      const recipientEmail = "ventasmx@demakhan.com";
      const subject = encodeURIComponent(
        `New Contact Form Submission from ${name}`
      );
      const body = encodeURIComponent(`
Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}
---
Message:
${message}
            `);

      // Construct the mailto link
      const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

      try {
        // Attempt to open the user's default email client
        window.location.href = mailtoLink;

        // Provide feedback to the user
        alert(
          "Your email client should open shortly with the pre-filled message. Please review and send it."
        );

        // Optionally, clear the form and close the modal after a short delay
        // to allow the mailto link to process
        setTimeout(() => {
          contactForm.reset();
          if (contactModal) {
            contactModal.style.display = "none";
          }
        }, 1000); // 1 second delay
      } catch (e) {
        alert(
          "Could not open email client. Please ensure you have one configured, or manually send an email to ventasmx@demakhan.com with the following details:\n\n" +
            decodeURIComponent(body)
        );
        console.error("Mailto link failed:", e);
      }
    });
  }
});
