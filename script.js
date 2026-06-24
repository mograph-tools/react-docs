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

  document.title = 'React v' + current + ' — Parametric Cloning for After Effects';
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

function highlightVisibleSection() {
  const sections = [
    'overview', 'installation', 'toolbar-interface',
    'repeaters', 'setting-repeater-amounts', 'sorting-modes',
    'linear-repeater', 'grid-repeater', 'radial-repeater', 'path-repeater',
    'effectors', 'position-effector', 'rotation-effector', 'scale-effector', 'color-effector',
    'modifiers', 'noise-modifier', 'wave-modifier', 'elastic-modifier', 'snap-to-modifier', 'clamp-modifier',
    'tracer-feature', 'working-with-text-layers', 'refresh-button', 'delete-button'
  ];

  for (const sectionId of sections) {
    const el = document.getElementById(sectionId);
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      const link = document.querySelector(`a[href="#${sectionId}"]`);
      if (link && !link.classList.contains('active')) updateActiveLink(link);
      break;
    }
  }
}
