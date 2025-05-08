// Intersection Observer for animation on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the section is visible
  });
  document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon.');
    this.reset();
  });
  
  // Select all animated sections
  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
  