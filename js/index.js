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
