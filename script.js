// Smooth Scroll for Internal Links
document.querySelectorAll("a.nav-link").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// Smooth Scroll for "Contact Me" Button
const contactButton = document.querySelector('a[href="#contact"]');
if (contactButton) {
  contactButton.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

// ScrollSpy Active Class Handling
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href").includes(current));
  });
});

// Coding Animation
const phrases = [ "Hi, I am Dipanshu", 
  'Full-stack Developer',
  'AI / ML Enthusiast'
];
let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = "";
let isDeleting = false;

function typeCodingEffect() {
  const textElement = document.getElementById("coding-animation");
  if (!textElement) return;

  if (isDeleting) {
    textElement.textContent = currentPhrase.substring(0, letterIndex--);
    if (letterIndex < 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      currentPhrase = phrases[phraseIndex];
    }
  } else {
    textElement.textContent = currentPhrase.substring(0, letterIndex++);
    if (letterIndex > currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeCodingEffect, 1000); // Pause before deleting
      return;
    }
  }
  setTimeout(typeCodingEffect, isDeleting ? 60 : 160); // Typing speed
}

document.addEventListener("DOMContentLoaded", () => {
  currentPhrase = phrases[phraseIndex];
  typeCodingEffect();
});

// Form Validation and Submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formStatus = document.getElementById("form-status");

  if (name && email && message) {
    // Show loading state
    formStatus.textContent = "Sending message...";
    formStatus.className = "text-center p-4 rounded-lg bg-blue-100 text-blue-700";
    formStatus.classList.remove("hidden");

    // Simulate form submission (replace with actual backend call)
    setTimeout(() => {
      formStatus.textContent = "Thank you for contacting me! I will get back to you soon.";
      formStatus.className = "text-center p-4 rounded-lg bg-green-100 text-green-700";
      this.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        formStatus.classList.add("hidden");
      }, 5000);
    }, 1000);
  } else {
    formStatus.textContent = "Please fill in all fields.";
    formStatus.className = "text-center p-4 rounded-lg bg-red-100 text-red-700";
    formStatus.classList.remove("hidden");
  }
});

// Add Hover Animations for Social Icons
document.querySelectorAll(".socials a").forEach(icon => {
  icon.addEventListener("mouseenter", () => icon.style.transform = "scale(1.3)");
  icon.addEventListener("mouseleave", () => icon.style.transform = "scale(1)");
});