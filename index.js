// dark mode toggle 
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('change', function () {
  if (darkModeToggle.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function enableDarkMode() {
  body.classList.add('dark-mode');
  localStorage.setItem('darkModeEnabled', true);
}

function disableDarkMode() {
  body.classList.remove('dark-mode');
  localStorage.setItem('darkModeEnabled', false);
}

// Check if dark mode was previously enabled
const darkModeEnabled = localStorage.getItem('darkModeEnabled');
if (darkModeEnabled && darkModeEnabled === 'true') {
  darkModeToggle.checked = true;
  enableDarkMode();
}
else {
  darkModeToggle.checked = false;
  disableDarkMode();
}


// intro text

const introText = "Java Backend Developer";
const introElement = document.getElementById("user-detail-intro");

introElement.textContent = introText;
introElement.classList.add("typing-animation");



//transition on scrolling

function checkVisibility() {
  const elementsToAnimate = document.querySelectorAll('#skills , .project-card , .github , #contact');

  elementsToAnimate.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    // Check if element is in the viewport or slightly above/below
    if (elementTop < windowHeight - 100 && elementBottom > 0) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    } else {
      element.style.opacity = '0';
      element.style.transform = 'translateY(40px)';
    }
  });
}

// Event listener for scrolling
window.addEventListener('scroll', checkVisibility);

// Initial check when the page loads
checkVisibility();




// for disabling right click

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Disable F12 key (developer tools)
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
      return false;
  }
};