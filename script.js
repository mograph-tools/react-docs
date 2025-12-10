// React Documentation - GitHub Pages
// Handles markdown loading, navigation, and section scrolling

document.addEventListener('DOMContentLoaded', function() {
  loadMarkdownContent();
  setupNavigation();
  handleInitialHash();
});

// Load README.md and render as markdown
async function loadMarkdownContent() {
  const contentDiv = document.getElementById('markdown-content');

  try {
    // Fetch DOCUMENTATION.md from docs-site directory
    const response = await fetch('DOCUMENTATION.md');

    if (!response.ok) {
      throw new Error('Failed to load documentation');
    }

    const markdown = await response.text();

    // Render markdown using marked.js
    contentDiv.innerHTML = marked.parse(markdown);

    // Add scroll-margin-top to all headings for anchor links
    const headings = contentDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
      heading.style.scrollMarginTop = '80px';
    });

    // Make all external links open in new tab
    const links = contentDiv.querySelectorAll('a[href^="http"]');
    links.forEach(link => {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });

  } catch (error) {
    contentDiv.innerHTML = `
      <h1>Documentation</h1>
      <p>Error loading documentation: ${error.message}</p>
      <p>Please ensure DOCUMENTATION.md exists in the docs-site directory.</p>
    `;
  }
}

// Setup navigation click handlers
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // Get target section from href
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Scroll to section
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update URL hash
        history.pushState(null, null, '#' + targetId);

        // Update active link
        updateActiveLink(this);
      }
    });
  });
}

// Update active navigation link
function updateActiveLink(activeLink) {
  // Remove active class from all links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  // Add active class to clicked link
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

// Handle initial hash in URL (direct links)
function handleInitialHash() {
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);

    // Wait for markdown to load
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update active nav link
        const correspondingLink = document.querySelector(`a[href="#${targetId}"]`);
        if (correspondingLink) {
          updateActiveLink(correspondingLink);
        }
      }
    }, 500);
  }
}

// Listen for hash changes (back/forward navigation)
window.addEventListener('hashchange', function() {
  const targetId = window.location.hash.substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // Update active nav link
    const correspondingLink = document.querySelector(`a[href="#${targetId}"]`);
    if (correspondingLink) {
      updateActiveLink(correspondingLink);
    }
  }
});

// Highlight active section while scrolling
let scrollTimeout;
window.addEventListener('scroll', function() {
  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    highlightVisibleSection();
  }, 100);
});

function highlightVisibleSection() {
  const sections = [
    'overview', 'installation', 'toolbar-interface',
    'repeaters', 'setting-repeater-amounts', 'sorting-modes',
    'linear-repeater', 'grid-repeater', 'radial-repeater', 'path-repeater',
    'effectors', 'position-effector', 'rotation-effector', 'color-effector',
    'modifiers', 'random-modifier', 'step-modifier', 'sticky-modifier',
    'tracer-feature', 'working-with-text-layers', 'refresh-button', 'delete-button'
  ];

  let currentSection = null;

  for (const sectionId of sections) {
    const element = document.getElementById(sectionId);
    if (!element) continue;

    const rect = element.getBoundingClientRect();

    // Check if section is in viewport (with offset for header)
    if (rect.top <= 100 && rect.bottom >= 100) {
      currentSection = sectionId;
      break;
    }
  }

  if (currentSection) {
    const activeLink = document.querySelector(`a[href="#${currentSection}"]`);
    if (activeLink && !activeLink.classList.contains('active')) {
      updateActiveLink(activeLink);
    }
  }
}
