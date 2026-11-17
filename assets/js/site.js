/* Shared behaviour for the main portfolio and the SVM Dhukra page:
   mobile menu, dark/light theme toggle, footer year.
   The saved theme is applied by a tiny inline script in each page's <head>
   (so there is no flash); this file only handles the button. */
(function () {
  var root = document.documentElement;

  // ---- Mobile menu ----
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---- Theme toggle ----
  var btn = document.querySelector('.theme-toggle');
  function current() { return root.getAttribute('data-theme') || root.getAttribute('data-default-theme') || 'dark'; }
  function label() {
    if (!btn) return;
    var next = current() === 'dark' ? 'light' : 'dark';
    btn.setAttribute('aria-label', 'Switch to ' + next + ' theme');
    btn.setAttribute('title', 'Switch to ' + next + ' theme');
  }
  if (btn) {
    label();
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('sk-theme', next); } catch (e) { /* storage blocked: theme still switches for this visit */ }
      label();
    });
  }

  // ---- Footer year ----
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
