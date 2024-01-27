document.addEventListener('DOMContentLoaded', function () {
  // Fade in the body on page load
  document.body.style.opacity = 1;
});

function changePage(event) {
  event.preventDefault();
  const nextPage = event.target.getAttribute('href');

  // Fade out the body
  document.body.style.opacity = 0;

  // Add an event listener for the transitionend event
  document.body.addEventListener('transitionend', function () {
    // Remove the event listener to avoid multiple calls
    document.body.removeEventListener('transitionend', arguments.callee);

    // Navigate to the next page
    window.location.href = nextPage;
  });
}