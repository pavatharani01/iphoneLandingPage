// JavaScript for simple form submission behavior
const orderForm = document.getElementById('orderForm');
const successMessage = document.getElementById('successMessage');

orderForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload

  // Collect form data (name and email)
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (name && email) {
    // Show success message
    successMessage.textContent = `Thank you, ${name}! Your iPhone 17 Pro order has been received. We'll contact you soon.`;

    // Clear form fields
    orderForm.reset();
  } else {
    successMessage.textContent = '';
    alert('Please fill in all required fields.');
  }
});



// Scroll-triggered animation for features and gallery
const featureItems = document.querySelectorAll('.feature-item');
const galleryImages = document.querySelectorAll('.gallery-images img');

function onScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  featureItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      item.classList.add('visible');
    }
  });

  galleryImages.forEach(img => {
    const imgTop = img.getBoundingClientRect().top;
    if (imgTop < triggerBottom) {
      img.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', onScroll);

// Trigger on page load in case elements are already in view
window.addEventListener('load', onScroll);

