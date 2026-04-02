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
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      // Try with and without section- prefix
      let target = document.querySelector(href) || document.querySelector(href.replace('#', '#section-'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Auto-generate table of contents for posts
  const postContent = document.querySelector('.post-content');
  if (!postContent) return;

  // Check if manual TOC already exists
  const hasManualTOC = postContent.querySelector('h2')?.textContent.includes('目录') ||
                       postContent.querySelector('ol, ul')?.closest('h2, h3');

  // Get all h2 and h3 headings
  const headings = postContent.querySelectorAll('h2, h3');
  if (headings.length < 3) return; // Don't generate TOC for short posts

  // Create TOC container
  const toc = document.createElement('div');
  toc.className = 'auto-toc';
  toc.innerHTML = '<h2>目录</h2><ol></ol>';
  const tocList = toc.querySelector('ol');

  let currentSubList = null;
  let currentItem = null;

  headings.forEach((heading, index) => {
    // Generate ID if not exists
    if (!heading.id) {
      const text = heading.textContent.trim();
      heading.id = 'section-' + (index + 1) + '-' + text.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
    }

    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#' + heading.id;
    link.textContent = heading.textContent;
    li.appendChild(link);

    if (heading.tagName === 'H2') {
      tocList.appendChild(li);
      currentItem = li;
      currentSubList = null;
    } else if (heading.tagName === 'H3' && currentItem) {
      if (!currentSubList) {
        currentSubList = document.createElement('ul');
        currentItem.appendChild(currentSubList);
      }
      currentSubList.appendChild(li);
    }
  });

  // Insert TOC before content (only if no manual TOC)
  if (!hasManualTOC && tocList.children.length > 0) {
    postContent.insertBefore(toc, postContent.firstChild);
  }
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
