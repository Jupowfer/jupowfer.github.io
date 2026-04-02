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

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for anchor links
  // Use getElementById instead of querySelector because CSS selectors
  // cannot handle IDs starting with numbers or containing Chinese characters
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('href').substring(1);
      const target = document.getElementById(id) || document.getElementById(decodeURIComponent(id));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        history.pushState(null, null, '#' + id);
      }
    });
  });
});

// Toggle functions for sidebar menus
function toggleArchive() {
  console.log('Toggle archive');
}

function toggleFriends() {
  console.log('Toggle friends');
}

function toggleAbout() {
  console.log('Toggle about');
}
