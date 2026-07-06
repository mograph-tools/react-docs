// React Documentation - GitHub Pages
// Handles markdown loading, navigation, section scrolling, and versioning.
//
// VERSION SYSTEM
// ---------------------------------------------------------------------------
// Doc files use MAJOR.MINOR versioning: DOCUMENTATION_v3.0.md, DOCUMENTATION_v3.1.md, etc.
// Patch releases (3.0.1, 3.0.2) share the same doc file as their minor version.
//
// VERSIONS.json lists every MAJOR.MINOR that has a documentation file, newest first:
//   ["3.1", "3.0"]
//
// To ship docs for a new minor or major release:
//   1. Create DOCUMENTATION_v{X.Y}.md
//   2. Add "X.Y" to VERSIONS.json (newest first)
//   3. Update CURRENT_VERSION below to match
//
// Patch releases that don't change the docs need no work here — the panel
// sends ?v=3.0 (major.minor only) so the URL always matches an existing file.
//
// The shift-click URL in HelpManager.ts derives the major.minor from VERSION.FULL
// in package.json at build time, so the panel always sends the right version.
// ---------------------------------------------------------------------------

const CURRENT_VERSION = "3.0";

document.addEventListener('DOMContentLoaded', async function() {
  const requestedVersion = getVersionParam();
  const versions = await fetchAvailableVersions();
  const resolvedVersion = resolveVersion(requestedVersion, versions);

  loadMarkdownContent(resolvedVersion);
  setupNavigation();
  handleInitialHash();
  renderVersionSwitcher(resolvedVersion, versions);
});

// Read ?v=X.Y from URL; fall back to CURRENT_VERSION
function getVersionParam() {
  const params = new URLSearchParams(window.location.search);
  return params.get('v') || CURRENT_VERSION;
}

// Fetch the list of MAJOR.MINOR versions that have documentation files
async function fetchAvailableVersions() {
  try {
    const res = await fetch('VERSIONS.json');
    if (!res.ok) throw new Error();
    const data = await res.json();
    return Array.isArray(data) ? data : [CURRENT_VERSION];
  } catch {
    return [CURRENT_VERSION];
  }
}

// Compare two version strings of any length (X, X.Y, X.Y.Z).
// Returns -1 if a < b, 0 if equal, 1 if a > b.
function versionCompare(a, b) {
  const pa = String(a).split('.').map(Number);
  const pb = String(b).split('.').map(Number);
  const len = Math.max(pa.length, pb.length);
  for (let i = 0; i < len; i++) {
    const na = pa[i] || 0;
    const nb = pb[i] || 0;
    if (na > nb) return 1;
    if (na < nb) return -1;
  }
  return 0;
}

// Normalise a version string to MAJOR.MINOR (strips patch if present).
// "3.0.1" → "3.0",  "3.1" → "3.1",  "4" → "4"
function toMajorMinor(v) {
  return String(v).split('.').slice(0, 2).join('.');
}

// Find the best available doc version for a requested version.
// Normalises the request to MAJOR.MINOR first, then:
//   1. Exact match.
//   2. Highest available version <= requested.
//   3. Lowest available version (fallback).
function resolveVersion(requested, available) {
  const norm = toMajorMinor(requested);
  if (available.includes(norm)) return norm;

  // Sort descending
  const sorted = available.slice().sort((a, b) => versionCompare(b, a));

  for (const v of sorted) {
    if (versionCompare(v, norm) <= 0) return v;
  }

  return sorted[sorted.length - 1] || CURRENT_VERSION;
}

// Render version switcher chips in the sidebar
function renderVersionSwitcher(current, versions) {
  const switcher = document.getElementById('version-switcher');
  if (!switcher) return;

  // Sort ascending for display
  const sorted = versions.slice().sort((a, b) => versionCompare(a, b));

  sorted.forEach(v => {
    const a = document.createElement('a');
    a.href = '?v=' + v;
    a.textContent = 'v' + v;
    a.className = 'version-link' + (v === current ? ' active' : '');
    switcher.appendChild(a);
  });

  document.title = 'React v' + current + ' — Documentation';
}

// Load DOCUMENTATION_v{version}.md and render as markdown
async function loadMarkdownContent(version) {
  const contentDiv = document.getElementById('markdown-content');
  const fileName = 'DOCUMENTATION_v' + version + '.md';

  try {
    const response = await fetch(fileName);

    if (!response.ok) {
      throw new Error('Documentation file not found: ' + fileName);
    }

    const markdown = await response.text();
    contentDiv.innerHTML = marked.parse(markdown);
    injectHeadingIcons(contentDiv);

    const headings = contentDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
      heading.style.scrollMarginTop = '80px';
    });

    const links = contentDiv.querySelectorAll('a[href^="http"]');
    links.forEach(link => {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });

    if (window.location.hash) {
      setTimeout(() => scrollToHash(window.location.hash.substring(1)), 300);
    }

  } catch (error) {
    contentDiv.innerHTML = `
      <h1>Documentation</h1>
      <p>Error loading documentation: ${error.message}</p>
      <p>Try the <a href="?v=${CURRENT_VERSION}">latest version (v${CURRENT_VERSION})</a>.</p>
    `;
  }
}

// Setup navigation click handlers
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToHash(targetId);
      history.pushState(null, null, '#' + targetId);
      updateActiveLink(this);
    });
  });
}

function scrollToHash(targetId) {
  const el = document.getElementById(targetId);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updateActiveLink(activeLink) {
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  if (activeLink) activeLink.classList.add('active');
}

function handleInitialHash() {
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    setTimeout(() => {
      scrollToHash(targetId);
      const link = document.querySelector(`a[href="#${targetId}"]`);
      if (link) updateActiveLink(link);
    }, 500);
  }
}

window.addEventListener('hashchange', function() {
  const targetId = window.location.hash.substring(1);
  scrollToHash(targetId);
  const link = document.querySelector(`a[href="#${targetId}"]`);
  if (link) updateActiveLink(link);
});

let scrollTimeout;
window.addEventListener('scroll', function() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(highlightVisibleSection, 100);
});

function injectHeadingIcons(container) {
  const SVGS = {
    'grid-repeater': {
      size: 28,
      content: '<circle cx="5" cy="5" r="3" fill="none" stroke="#2ACCFF" stroke-width="1.2"/><circle cx="14" cy="5" r="3" fill="none" stroke="#2ACCFF" stroke-width="1.2"/><circle cx="23" cy="5" r="3" fill="none" stroke="#2ACCFF" stroke-width="1.2"/><circle cx="5" cy="14" r="3" fill="none" stroke="#2ACCFF" stroke-width="1.2"/><circle cx="14" cy="14" r="3" fill="none" stroke="#2ACCFF" stroke-width="1.2"/><circle cx="23" cy="14" r="3" fill="none" stroke="#2ACCFF" stroke-width="1.2"/><circle cx="5" cy="23" r="3" fill="none" stroke="#2ACCFF" stroke-width="1.2"/><circle cx="14" cy="23" r="3" fill="none" stroke="#2ACCFF" stroke-width="1.2"/><circle cx="23" cy="23" r="3" fill="none" stroke="#2ACCFF" stroke-width="1.2"/>'
    },
    'radial-repeater': {
      size: 28,
      content: '<circle cx="14" cy="4" r="3" fill="none" stroke="#2ACCFF" stroke-width="1.2"/><circle cx="22.5" cy="9.5" r="3" fill="none" stroke="#2ACCFF" stroke-width="1.2"/><circle cx="22.5" cy="18.5" r="3" fill="none" stroke="#2ACCFF" stroke-width="1.2"/><circle cx="14" cy="24" r="3" fill="none" stroke="#2ACCFF" stroke-width="1.2"/><circle cx="5.5" cy="18.5" r="3" fill="none" stroke="#2ACCFF" stroke-width="1.2"/><circle cx="5.5" cy="9.5" r="3" fill="none" stroke="#2ACCFF" stroke-width="1.2"/>'
    },
    'sphere-repeater': {
      size: 28,
      content: '<circle cx="14" cy="14" r="12.73" fill="none" stroke="#2ACCFF" stroke-width="1.2"/><ellipse cx="14" cy="14" rx="12.73" ry="7.38" fill="none" stroke="#2ACCFF" stroke-width="1.2" transform="rotate(-45 14 14)"/><ellipse cx="14" cy="14" rx="12.73" ry="2.55" fill="none" stroke="#2ACCFF" stroke-width="1.2" transform="rotate(-45 14 14)"/><circle cx="5" cy="5" r="3" fill="none" stroke="#2ACCFF" stroke-width="1.2"/><circle cx="23" cy="23" r="3" fill="none" stroke="#2ACCFF" stroke-width="1.2"/>'
    },
    'path-repeater': {
      size: 28,
      content: '<path d="M 6 20 C 6 10, 13 11, 14 14 C 15 17, 22 18, 22 8" fill="none" stroke="#2ACCFF" stroke-width="1.2"/><circle cx="6" cy="23" r="3" fill="none" stroke="#2ACCFF" stroke-width="1.2"/><circle cx="22" cy="5" r="3" fill="none" stroke="#2ACCFF" stroke-width="1.2"/>'
    },
    'effectors': {
      size: 36,
      content: '<circle cx="14" cy="14" r="10.5" fill="none" stroke="#8471FF" stroke-width="1.2"/><line x1="14" y1="8" x2="14" y2="20" stroke="#8471FF" stroke-width="1.2" stroke-linecap="round"/><line x1="8" y1="14" x2="20" y2="14" stroke="#8471FF" stroke-width="1.2" stroke-linecap="round"/>'
    },
    'tracer-feature': {
      size: 36,
      content: '<rect x="3.5" y="3.5" width="21" height="21" fill="none" stroke="#8471FF" stroke-width="1.2"/><line x1="3.5" y1="10.5" x2="24.5" y2="10.5" stroke="#8471FF" stroke-width="1.2"/><line x1="3.5" y1="17.5" x2="24.5" y2="17.5" stroke="#8471FF" stroke-width="1.2"/><line x1="10.5" y1="3.5" x2="10.5" y2="24.5" stroke="#8471FF" stroke-width="1.2"/><line x1="17.5" y1="3.5" x2="17.5" y2="24.5" stroke="#8471FF" stroke-width="1.2"/>'
    },
    'refresh-button': {
      size: 36,
      content: '<path d="M25.6 11C24.8 7.1 20.6 2 14 2S2 7.4 2 14 7.4 26 14 26s9.8-4.8 10.6-6.4M26.3 3 26.3 11 18.3 11" fill="none" stroke="#8471FF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>'
    },
    'delete-button': {
      size: 36,
      content: '<circle cx="14" cy="14" r="11.67" fill="none" stroke="#EC5E5E" stroke-width="1.2"/><line x1="9.33" y1="9.33" x2="18.67" y2="18.67" stroke="#EC5E5E" stroke-width="1.2" stroke-linecap="round"/><line x1="18.67" y1="9.33" x2="9.33" y2="18.67" stroke="#EC5E5E" stroke-width="1.2" stroke-linecap="round"/>'
    }
  };

  Object.entries(SVGS).forEach(function(entry) {
    var spanId = entry[0];
    var icon = entry[1];
    var span = container.querySelector('span[id="' + spanId + '"]');
    if (!span) return;
    // marked.js wraps the standalone <span> in a <p> — walk up if needed
    var anchor = (span.parentElement && span.parentElement.tagName === 'P') ? span.parentElement : span;
    var heading = anchor.nextElementSibling;
    if (!heading || !/^H[1-6]$/.test(heading.tagName)) return;

    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('width', icon.size);
    svg.setAttribute('height', icon.size);
    svg.setAttribute('viewBox', '0 0 28 28');
    svg.style.flexShrink = '0';
    svg.innerHTML = icon.content;

    heading.classList.add('heading-icon');
    heading.appendChild(svg);
  });
}

function highlightVisibleSection() {
  const sections = [
    'overview', 'installation', 'toolbar-interface',
    'repeaters', 'controlling-repeaters', 'setting-repeater-amounts', 'sorting-modes',
    'grid-repeater', 'radial-repeater', 'sphere-repeater', 'path-repeater', 'text-layers',
    'effectors', 'effector-controls',
    'position-effector', 'rotation-effector', 'scale-effector', 'color-effector', 'other-effectors',
    'modifiers', 'noise-modifier', 'wave-modifier', 'elastic-modifier', 'snap-to-modifier', 'clamp-modifier',
    'tracer-feature', 'refresh-button', 'delete-button'
  ];

  // Walk sections in document order; keep updating active as long as the
  // section's top is at or above the threshold. Stop at the first section
  // that hasn't scrolled into view yet. Works for both block headings and
  // zero-height <span> anchors.
  let active = null;
  for (const sectionId of sections) {
    const el = document.getElementById(sectionId);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= 120) {
      active = sectionId;
    } else {
      break;
    }
  }

  if (active) {
    const link = document.querySelector(`a[href="#${active}"]`);
    if (link && !link.classList.contains('active')) updateActiveLink(link);
  }
}
