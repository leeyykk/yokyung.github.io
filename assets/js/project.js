// Get the image bar container
const imageBar = document.getElementById('imageBar');

// Get the shadow element
const shadowRight = document.querySelector('.shadow-right');

// Add scroll event listener to the image bar
imageBar.addEventListener('scroll', toggleShadow);

// Function to toggle the shadow visibility based on scroll position
function toggleShadow() {
  if (imageBar.scrollLeft + imageBar.clientWidth >= imageBar.scrollWidth) {
    shadowRight.style.display = 'none'; // Hide the shadow when at the end
  } else {
    shadowRight.style.display = 'block'; // Show the shadow otherwise
  }
}
