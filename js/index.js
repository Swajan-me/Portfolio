const roles = [
  "Game Developer",
  "Aspiring QA Engineer",
  "Software Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const roleElement = document.getElementById("role");

function type() {
  const currentRole = roles[roleIndex];

  if (!deleting) {
    roleElement.textContent =
      currentRole.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(type, 1500);
      return;
    }
  } else {
    roleElement.textContent =
      currentRole.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(type, deleting ? 50 : 100);
}

type();

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade').forEach(el => observer.observe(el));

const homeSection = document.querySelector('#home');
const profileCard = document.querySelector('.profile-card');

const profileObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            // home section left the screen, show the card
            profileCard.classList.add('visible');
        } else {
            // back on home section, hide the card
            profileCard.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });

profileObserver.observe(homeSection);