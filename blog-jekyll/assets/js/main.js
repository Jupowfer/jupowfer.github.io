// Mobile sidebar toggle
function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('active');
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(e) {
  const sidebar = document.querySelector('.sidebar');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (window.innerWidth <= 768 && 
      sidebar.classList.contains('active') &&
      !sidebar.contains(e.target) &&
      !menuToggle.contains(e.target)) {
    sidebar.classList.remove('active');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Toggle functions for sidebar menus
function toggleArchive() {
  // Implement archive toggle functionality
  console.log('Toggle archive');
}

function toggleFriends() {
  // Implement friends toggle functionality
  console.log('Toggle friends');
}

function toggleAbout() {
  // Implement about toggle functionality
  console.log('Toggle about');
}
