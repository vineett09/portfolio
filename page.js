// Loading Screen
window.addEventListener("load", () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 500);
  }, 3000);
});

// Particles.js Configuration
// Assuming particlesJS is a global function provided by the particles.js library
// Make sure the particles.js library is included in your HTML file.
// For example: <script src="path/to/particles.js"></script>

// If particlesJS is not a global function, you might need to import it
// import particlesJS from 'path/to/particles.js'; // If using modules

particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#667eea",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#667eea",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

// Navigation
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Active navigation link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Typing animation for hero section
const heroTitle = document.querySelector(".title-name");
const text = "Vineet Kumar";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    heroTitle.textContent = text.slice(0, index + 1);
    index++;
    setTimeout(typeWriter, 150);
  }
}

// Start typing animation after page load
setTimeout(typeWriter, 1000);

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Counter animation for stats
const counters = document.querySelectorAll(".stat-number");
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = Number.parseFloat(counter.getAttribute("data-target"));
      const increment = target / 100;
      let current = 0;

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          if (target === 8.4) {
            counter.textContent = current.toFixed(1);
          } else {
            counter.textContent = Math.ceil(current);
          }
          setTimeout(updateCounter, 20);
        } else {
          if (target === 8.4) {
            counter.textContent = target.toFixed(1);
          } else {
            counter.textContent = target;
          }
        }
      };

      updateCounter();
      counterObserver.unobserve(counter);
    }
  });
}, observerOptions);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

// Skills progress bar animation
const skillBars = document.querySelectorAll(".skill-progress");
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBar = entry.target;
      const width = progressBar.getAttribute("data-width");
      setTimeout(() => {
        progressBar.style.width = width + "%";
      }, 200);
      skillObserver.unobserve(progressBar);
    }
  });
}, observerOptions);

skillBars.forEach((bar) => {
  skillObserver.observe(bar);
});

// Project card hover effects
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});
const serviceID = window.env.EMAILJS_SERVICE_ID;
const templateID = window.env.EMAILJS_TEMPLATE_ID;
const publicKey = window.env.EMAILJS_PUBLIC_KEY;
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!name || !email || !subject || !message) {
    return alert("Please fill in all fields");
  }

  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML =
    '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
  submitBtn.disabled = true;

  emailjs
    .send(
      serviceID,
      templateID,
      {
        from_name: name,
        from_email: email,
        subject,
        message,
      },
      publicKey
    )
    .then(() => {
      alert("Thank you for your message! I'll get back to you soon.");
      contactForm.reset();
    })
    .catch((err) => {
      console.error("EmailJS error:", err);
      alert("Failed to send — try again later.");
    })
    .finally(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    });
});

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".hero");
  const speed = scrolled * 0.5;

  if (parallax) {
    parallax.style.transform = `translateY(${speed}px)`;
  }
});

// Add floating animation to floating cards
const floatingCards = document.querySelectorAll(".floating-card");
floatingCards.forEach((card, index) => {
  card.addEventListener("mouseenter", () => {
    card.style.animationPlayState = "paused";
    card.style.transform = "scale(1.1) rotate(0deg)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.animationPlayState = "running";
    card.style.transform = "";
  });
});

// Cursor trail effect
let mouseX = 0;
let mouseY = 0;
const trailElements = [];

// Create trail elements
for (let i = 0; i < 10; i++) {
  const trail = document.createElement("div");
  trail.className = "cursor-trail";
  trail.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: ${1 - i * 0.1};
        transition: all 0.1s ease;
    `;
  document.body.appendChild(trail);
  trailElements.push(trail);
}

// Update mouse position
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animate trail
function animateTrail() {
  let x = mouseX;
  let y = mouseY;

  trailElements.forEach((trail, index) => {
    trail.style.left = x + "px";
    trail.style.top = y + "px";

    const nextTrail = trailElements[index + 1] || trailElements[0];
    x += (Number.parseFloat(nextTrail.style.left) - x) * 0.3;
    y += (Number.parseFloat(nextTrail.style.top) - y) * 0.3;
  });

  requestAnimationFrame(animateTrail);
}

animateTrail();

// Add scroll-triggered animations
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".skill-category, .project-card, .timeline-item, .contact-item"
  );

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("fade-in", "visible");
    }
  });
};

window.addEventListener("scroll", animateOnScroll);

// Initialize animations on page load
document.addEventListener("DOMContentLoaded", () => {
  // Add fade-in class to elements
  const elementsToAnimate = document.querySelectorAll(
    ".skill-category, .project-card, .timeline-item, .contact-item, .about-card"
  );
  elementsToAnimate.forEach((element) => {
    element.classList.add("fade-in");
  });

  // Trigger initial animation check
  animateOnScroll();
});

// Add dynamic background color change based on scroll
window.addEventListener("scroll", () => {
  const scrollPercent =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  const hue = Math.floor(scrollPercent * 3.6); // 360 degrees

  document.body.style.background = `linear-gradient(135deg, hsl(${hue}, 20%, 5%) 0%, hsl(${
    hue + 30
  }, 25%, 8%) 100%)`;
});

// Add keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Close mobile menu
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply throttling to scroll events
const throttledScroll = throttle(() => {
  // Navbar scroll effect
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Active navigation link
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}, 16); // ~60fps

window.addEventListener("scroll", throttledScroll);

console.log("🚀 Portfolio loaded successfully!");
