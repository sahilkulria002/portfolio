/* Renders SVM_DATA into any element with a data-svm="<block>" attribute.
   Used by the web page and both print documents. */
(function () {
  var D = window.SVM_DATA;
  if (!D) return;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function ytThumb(id) { return 'https://i.ytimg.com/vi/' + encodeURIComponent(id) + '/hqdefault.jpg'; }
  function ytUrl(id) { return 'https://www.youtube.com/watch?v=' + encodeURIComponent(id); }
  var isDoc = document.body.classList.contains('doc');

  var blocks = {
    stats: function () {
      return D.stats.map(function (s) {
        return '<div class="stat"><strong>' + esc(s.value) + '</strong><span>' + esc(s.label) + '</span></div>';
      }).join('');
    },

    infrastructure: function () {
      return D.infrastructure.map(function (i) {
        return '<div class="infra"><strong>' + esc(i.name) + '</strong><span>' + esc(i.note) + '</span></div>';
      }).join('');
    },

    projects: function (el) {
      var filter = el.getAttribute('data-filter');
      var list = filter ? D.projects.filter(function (p) { return p.type === filter; }) : D.projects;
      if (!list.length) {
        return '<div class="empty">' +
          '<strong>Student project gallery: documentation in progress</strong>' +
          '<p>Photos and videos of student projects from the lab are being added here.' +
          (isDoc ? '' : ' Until then, see the latest work on the school\'s <a href="' + esc(D.facebook) + '" target="_blank" rel="noopener">Facebook page</a>.') +
          '</p></div>';
      }
      return list.map(function (p) {
        var media = '';
        if (p.image) media = '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + '" loading="lazy">';
        else if (p.youtube) media = '<img src="' + ytThumb(p.youtube) + '" alt="' + esc(p.title) + ' video" loading="lazy">';
        var href = p.youtube ? ytUrl(p.youtube) : p.link;
        var play = p.youtube && !isDoc ? '<span class="play" aria-hidden="true">▶</span>' : '';
        return '<article class="proj">' +
          (media ? '<div class="proj-media">' + (href ? '<a href="' + esc(href) + '" target="_blank" rel="noopener">' + media + play + '</a>' : media) + '</div>' : '') +
          '<div class="proj-body">' +
          (p.category ? '<span class="proj-cat">' + esc(p.category) + '</span>' : '') +
          '<h3>' + esc(p.title) + '</h3>' +
          (p.description ? '<p>' + esc(p.description) + '</p>' : '') +
          (p.objective ? '<p class="proj-obj"><b>Learning goal:</b> ' + esc(p.objective) + '</p>' : '') +
          (p.components && p.components.length ? '<div class="proj-parts">' + p.components.map(function (c) { return '<span>' + esc(c) + '</span>'; }).join('') + '</div>' : '') +
          (p.link && !isDoc ? '<a class="proj-link" href="' + esc(p.link) + '" target="_blank" rel="noopener">Original post ↗</a>' : '') +
          '</div></article>';
      }).join('');
    },

    videos: function () {
      var vids = D.videos.slice();
      D.projects.forEach(function (p) { if (p.youtube) vids.push({ title: p.title, youtube: p.youtube }); });
      if (!vids.length) {
        return '<div class="empty"><strong>Project videos coming soon</strong><p>The lab has 10–15 student project videos ready, and they are being uploaded now.</p></div>';
      }
      if (isDoc) {
        return vids.map(function (v) {
          return '<div class="vid"><img src="' + ytThumb(v.youtube) + '" alt=""><span>' + esc(v.title) + '<br><small>' + ytUrl(v.youtube) + '</small></span></div>';
        }).join('');
      }
      return vids.map(function (v) {
        return '<div class="vid"><iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(v.youtube) +
          '" title="' + esc(v.title) + '" loading="lazy" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe><span>' + esc(v.title) + '</span></div>';
      }).join('');
    },

    requirements: function (el) {
      var from = +(el.getAttribute('data-from') || 0);
      var to = +(el.getAttribute('data-to') || D.requirements.length);
      return D.requirements.slice(from, to).map(function (cat, i) {
        var ci = from + i;
        return '<div class="req-cat"><h3><span>' + (ci + 1) + '</span>' + esc(cat.category) + '</h3>' +
          '<table><thead><tr><th>Item</th><th>Priority</th><th>Used for</th><th>Qty</th></tr></thead><tbody>' +
          cat.items.map(function (it) {
            return '<tr><td>' + esc(it.name) + '</td><td><span class="pri pri-' + it.priority.toLowerCase() + '">' + esc(it.priority) +
              '</span></td><td>' + esc(it.use) + '</td><td class="qty">To be finalised</td></tr>';
          }).join('') + '</tbody></table></div>';
      }).join('');
    },

    reqSummary: function () {
      return D.requirements.map(function (cat) {
        function names(p) { return cat.items.filter(function (i) { return i.priority === p; }).map(function (i) { return i.name; }); }
        var high = names('High'), med = names('Medium');
        var text = high.length ? 'High priority: ' + high.join(', ') : med.length ? 'Medium priority: ' + med.join(', ') : 'Future / expansion items';
        return '<div class="req-sum"><strong>' + esc(cat.category) + '</strong><span>' + esc(text) + '</span></div>';
      }).join('');
    },

    models: function () {
      return D.models.map(function (m) {
        return '<div class="model"><strong>' + esc(m.name) + '</strong><span>' + esc(m.text) + '</span></div>';
      }).join('');
    },

    tiers: function () {
      return D.tiers.map(function (t) {
        return '<div class="tier"><span class="tier-name">' + esc(t.name) + '</span><strong>' + esc(t.amount) + '</strong><small>' +
          esc(t.period) + '</small><p>' + esc(t.text) + '</p></div>';
      }).join('');
    },

    benefits: function () {
      return '<ul class="ticks">' + D.benefits.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul>';
    },

    suppliers: function () {
      return D.suppliers.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('');
    },

    contact: function () {
      var c = D.contact;
      return '<div class="contact-card"><strong>' + esc(c.name) + '</strong><span>' + esc(c.role) + '</span>' +
        '<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + '</a>' +
        '<a href="https://wa.me/' + esc(c.whatsapp) + '"' + (isDoc ? '' : ' target="_blank" rel="noopener"') + '>' + esc(c.phone) + ' (WhatsApp)</a>' +
        '<a href="' + esc(D.facebook) + '"' + (isDoc ? '' : ' target="_blank" rel="noopener"') + '>School on Facebook</a></div>';
    }
  };

  document.querySelectorAll('[data-svm]').forEach(function (el) {
    var fn = blocks[el.getAttribute('data-svm')];
    if (fn) el.innerHTML = fn(el);
  });
})();
