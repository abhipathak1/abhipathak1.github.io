// Smooth scroll to section
const navLinks = document.querySelectorAll('#nav-menu a:not(.resume-link)');

// Add event listener to track scroll position
window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset;

  // Iterate through each section to determine the active section
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop - 70;
    const sectionHeight = section.offsetHeight;

    // Check if the current scroll position is within the bounds of the section
    if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
      // Remove the 'active' class from all navigation links
      navLinks.forEach(link => link.classList.remove('active'));

      // Get the corresponding navigation link using the section ID
      const targetNavLink = document.querySelector(`#nav-menu a[href="#${section.id}"]`);

      // Add the 'active' class to the corresponding navigation link
      targetNavLink.classList.add('active');
    }

    // Special case for the contact section
    if (
      currentScroll + window.innerHeight >= document.documentElement.scrollHeight &&
      section.id === 'contact'
    ) {
      // Remove the 'active' class from all navigation links
      navLinks.forEach(link => link.classList.remove('active'));

      // Get the corresponding navigation link using the section ID
      const targetNavLink = document.querySelector(`#nav-menu a[href="#${section.id}"]`);

      // Add the 'active' class to the corresponding navigation link
      targetNavLink.classList.add('active');
    }
  });
});


// Smooth scroll function
function smoothScroll(target, duration) {
  const targetSection = document.querySelector(target);
  const targetPosition = targetSection.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function scrollAnimation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const scrollY = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, scrollY);
    if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(scrollAnimation);
}

// Navbar links smooth scroll
navLinks.forEach(link => {
  if (!link.classList.contains('resume') && !link.classList.contains('logo')) {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetSection = link.getAttribute('href');
      smoothScroll(targetSection, 1000); // Set the duration (in milliseconds) as per your preference
    });
  }
});


// intro text

const introText = "Java Backend Developer";
const introElement = document.getElementById("user-detail-intro");

introElement.textContent = introText;
introElement.classList.add("typing-animation");


typeText();
