document.addEventListener("DOMContentLoaded", () => {
  // Highlight the current page's nav link using the <body id="..."> value
  const currentPage = document.body.id; // e.g. "about"
  document.querySelectorAll("nav a").forEach(link => {
    const linkPage = link.getAttribute("href").replace(".html", "");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

  // Add a subtle fade-in effect to the list items under "Why Choose Us?"
  const reasons = document.querySelectorAll("ul li");
  reasons.forEach((li, index) => {
    li.style.opacity = "0";
    li.style.transition = "opacity 0.4s ease";
    setTimeout(() => {
      li.style.opacity = "1";
    }, index * 200);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Highlight the nav link matching the current page
  const currentPage = document.body.id; // "about"
  document.querySelectorAll("nav a").forEach(link => {
    const linkPage = link.getAttribute("href").replace(".html", "");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

  // Fade in the "Why Choose Us?" list items one by one
  const reasons = document.querySelectorAll("ul li");
  reasons.forEach((li, index) => {
    li.style.opacity = "0";
    li.style.transition = "opacity 0.4s ease";
    setTimeout(() => {
      li.style.opacity = "1";
    }, index * 200);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Highlight the current page's nav link
  const currentPage = document.body.id;
  document.querySelectorAll("nav a").forEach(link => {
    const linkPage = link.getAttribute("href").replace(".html", "");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

  const form = document.getElementById("enquiry-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop the page from reloading

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (!name || !email || !message) {
      showNotification("Please fill in all fields.", "error");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showNotification("Please enter a valid email address.", "error");
      return;
    }

    // Simulate sending (no backend attached yet)
    showNotification(`Thanks, ${name}! Your details have been sent.`, "success");
    form.reset();
  });
});

function showNotification(message, type) {
  // Remove any existing notification first
  const existing = document.getElementById("notification");
  if (existing) existing.remove();

  const note = document.createElement("div");
  note.id = "notification";
  note.textContent = message;
  note.style.position = "fixed";
  note.style.top = "20px";
  note.style.right = "20px";
  note.style.padding = "14px 20px";
  note.style.borderRadius = "6px";
  note.style.color = "#fff";
  note.style.fontFamily = "sans-serif";
  note.style.fontSize = "14px";
  note.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
  note.style.zIndex = "1000";
  note.style.backgroundColor = type === "success" ? "#28a745" : "#dc3545";
  note.style.transition = "opacity 0.4s ease";

  document.body.appendChild(note);

  // Fade out and remove after 3 seconds
  setTimeout(() => {
    note.style.opacity = "0";
    setTimeout(() => note.remove(), 400);
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  // Highlight the current page's nav link
  const currentPage = document.body.id;
  document.querySelectorAll("nav a").forEach(link => {
    const linkPage = link.getAttribute("href").replace(".html", "");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

  // Handle the enquiry form
  const form = document.getElementById("enquiry-form");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // stop page reload

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        status.textContent = "Please fill in all fields.";
        status.style.color = "red";
        return;
      }

      // Basic email format check
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        status.textContent = "Please enter a valid email address.";
        status.style.color = "red";
        return;
      }

      // No backend here — this just confirms locally and resets the form.
      status.textContent = `Thanks, ${name}! Your enquiry has been received.`;
      status.style.color = "green";
      form.reset();
    });
  }
});

document.getElementById("contactForm").addEventListener("submit", function(event) {

    // Stop the form from refreshing the page
    event.preventDefault();

    // Get customer details
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Check if all fields are completed
    if (name === "" || email === "" || message === "") {
        alert("Please complete all the fields.");
        return;
    }

    // Your WhatsApp number (South African format without the leading 0)
    let phoneNumber = "27649084494";

    // Create the WhatsApp message
    let whatsappMessage =
        "Hello TurboFix Automotive,%0A%0A" +
        "I would like to make an enquiry.%0A%0A" +
        "*Customer Details*%0A" +
        "Name: " + name + "%0A" +
        "Email: " + email + "%0A%0A" +
        "*Message:*%0A" +
        message;

    // Open WhatsApp
    window.open(
        "https://wa.me/" + phoneNumber + "?text=" + whatsappMessage,
        "_blank"
    );

    // Clear the form
    document.getElementById("contactForm").reset();

    // Notify the customer
    alert("Thank you! You will now be redirected to WhatsApp to send your enquiry.");
});

// Turbo Fix Automotive Enquiry Form

document.getElementById("enquiryForm").addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get customer information
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const vehicle = document.getElementById("vehicle").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check that all fields are completed
    if (!name || !email || !phone || !vehicle || !message) {
        alert("Please complete all the fields before sending your enquiry.");
        return;
    }

    // Thank the customer
    alert(
        "Thank you, " + name +
        "!\n\nYour enquiry has been received successfully.\n" +
        "Turbo Fix Automotive will get back to you as soon as possible.\n\n" +
        "Click OK to continue to our WhatsApp."
    );

    // Your WhatsApp number (without the leading zero)
    const whatsappNumber = "27649084494";

    // Create WhatsApp message
    const whatsappMessage =
        `Hello Turbo Fix Automotive,

I would like to make an enquiry.

Name: ${name}
Email: ${email}
Phone: ${phone}
Vehicle: ${vehicle}

Message:
${message}`;

    // Open WhatsApp
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");

    // Clear the form
    document.getElementById("enquiryForm").reset();
});