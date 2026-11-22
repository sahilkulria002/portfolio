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

  // Engineering pipeline shown on every project. A project's `stages` lists the keys
  // that are actually evidenced in its video/photos (never add a stage you haven't seen).
  var PIPELINE = [
    { key: 'design', short: 'Design', name: 'Circuit design', text: 'System and wiring designed before any hardware was touched.' },
    { key: 'simulate', short: 'Simulate', name: 'Virtual simulation', text: 'Circuit and control logic checked in an electronics simulator.' },
    { key: 'code', short: 'Code', name: 'Firmware', text: 'Control logic written and flashed to the microcontroller.' },
    { key: 'build', short: 'Build', name: 'Physical prototype', text: 'Hardware assembled and integrated into a working model.' },
    { key: 'demo', short: 'Demo', name: 'Live demonstration', text: 'System demonstrated working and explained by the students.' }
  ];
  function splitTitle(t) {
    var k = String(t || '').indexOf(': ');
    return k > -1 ? [t.slice(0, k), t.slice(k + 2)] : [t, ''];
  }

  // ---------- Project detail dialog (web only) ----------
  function openProject(i) {
    var p = D.projects[i];
    if (!p) return;
    var dlg = document.getElementById('proj-dialog');
    if (!dlg) {
      dlg = document.createElement('dialog');
      dlg.id = 'proj-dialog';
      dlg.className = 'pdlg';
      document.body.appendChild(dlg);
      dlg.addEventListener('click', function (e) { if (e.target === dlg || e.target.closest('.pdlg-close')) dlg.close(); });
      dlg.addEventListener('close', function () { dlg.innerHTML = ''; });
    }
    var parts = splitTitle(p.title);
    var done = p.stages || [];
    var media = p.youtube
      ? '<div class="pdlg-video"><iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(p.youtube) + '" title="' + esc(parts[0]) + ' video" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe></div>'
      : (p.image ? '<img src="' + esc(p.image) + '" alt="' + esc(parts[0]) + '">' : '');
    dlg.innerHTML =
      '<div class="pdlg-inner">' +
        '<button type="button" class="pdlg-close" aria-label="Close">×</button>' +
        '<div class="pdlg-media">' + media + (p.youtube ? '' : '<span class="pdlg-vidnote">Project video coming soon</span>') + '</div>' +
        '<div class="pdlg-body">' +
          '<span class="pdlg-cat">' + esc(p.category || '') + '</span>' +
          '<h3>' + esc(parts[0]) + '</h3>' +
          (parts[1] ? '<p class="pdlg-sub">' + esc(parts[1]) + '</p>' : '') +
          (p.description ? '<p>' + esc(p.description) + '</p>' : '') +
          '<h4>Engineering pipeline</h4>' +
          '<ol class="pipe">' + PIPELINE.map(function (s) {
            var on = done.indexOf(s.key) > -1;
            return '<li class="' + (on ? 'on' : '') + '"><b>' + esc(s.name) + '</b><span>' + esc(on ? s.text : 'Not documented') + '</span></li>';
          }).join('') + '</ol>' +
          (p.objective ? '<h4>Engineering focus</h4><p>' + esc(p.objective) + '</p>' : '') +
          (p.components && p.components.length ? '<h4>System components</h4><div class="bom">' + p.components.map(function (c) { return '<span>' + esc(c) + '</span>'; }).join('') + '</div>' : '') +
          (p.link ? '<a class="pdlg-link" href="' + esc(p.link) + '" target="_blank" rel="noopener">Original post ↗</a>' : '') +
        '</div>' +
      '</div>';
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
  }
  document.addEventListener('click', function (e) {
    var card = e.target.closest && e.target.closest('.pcard, .xp-row, .xp-open, .tile');
    if (card) openProject(+card.getAttribute('data-proj'));
  });

  // ---------- Explorer behaviour ----------
  function stageHTML(i) {
    var p = D.projects[i], parts = splitTitle(p.title), done = p.stages || [];
    var img = p.image || (p.youtube ? ytThumb(p.youtube) : '');
    return '<div class="xp-photo">' +
        (img ? '<img src="' + esc(img) + '" alt="' + esc(parts[0]) + '">' : '') +
        '<span class="xp-big" aria-hidden="true">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<span class="xp-cat">' + esc(p.category || '') + '</span>' +
      '</div>' +
      '<div class="xp-info">' +
        '<h3>' + esc(parts[0]) + '</h3>' +
        (parts[1] ? '<p class="xp-sub">' + esc(parts[1]) + '</p>' : '') +
        '<p class="xp-desc">' + esc(p.description || '') + '</p>' +
        '<div class="xp-pipe">' + PIPELINE.map(function (s) {
          return '<span class="' + (done.indexOf(s.key) > -1 ? 'on' : '') + '">' + esc(s.short) + '</span>';
        }).join('') + '</div>' +
        '<div class="xp-actions">' +
          '<button type="button" class="xp-open" data-proj="' + i + '">Explore full project →</button>' +
          (p.youtube ? '<span class="xp-vid">▶ Video inside</span>' : '<span class="xp-vid muted">Video coming soon</span>') +
        '</div>' +
      '</div>';
  }
  function initWall(root) {
    var tiles = Array.prototype.slice.call(root.querySelectorAll('.tile'));
    root.querySelectorAll('.wall-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        var d = chip.getAttribute('data-domain');
        root.querySelectorAll('.wall-chip').forEach(function (c) { c.classList.toggle('on', c === chip); });
        root.classList.toggle('filtered', !!d);
        tiles.forEach(function (t, k) {
          var hit = !d || t.getAttribute('data-domain') === d;
          t.hidden = !hit;
          t.classList.remove('pop');
          if (hit) { void t.offsetWidth; t.classList.add('pop'); }
        });
      });
    });
  }
  function initExplorer(root) {
    var stage = root.querySelector('.xp-stage');
    var rows = Array.prototype.slice.call(root.querySelectorAll('.xp-row'));
    var current = -1;
    function show(row) {
      var i = +row.getAttribute('data-proj');
      rows.forEach(function (r) { r.classList.toggle('active', r === row); });
      if (i === current) return;
      current = i;
      stage.classList.remove('in');
      stage.innerHTML = stageHTML(i);
      void stage.offsetWidth; // restart the fade-in
      stage.classList.add('in');
    }
    rows.forEach(function (r) {
      r.addEventListener('mouseenter', function () { show(r); });
      r.addEventListener('focus', function () { show(r); });
    });
    root.querySelectorAll('.xp-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        var d = chip.getAttribute('data-domain');
        root.querySelectorAll('.xp-chip').forEach(function (c) { c.classList.toggle('on', c === chip); });
        var first = null;
        rows.forEach(function (r) {
          var hit = !d || r.getAttribute('data-domain') === d;
          r.parentNode.hidden = !hit;
          if (hit && !first) first = r;
        });
        if (first) show(first);
      });
    });
    if (rows[0]) show(rows[0]);
  }

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
      if (!isDoc) {
        // Project wall: every project visible at once as a photo mosaic.
        // Tile sizes follow a repeating pattern so the wall looks curated; the first project is always the hero tile.
        el.className = 'wall-host';
        var domains = [];
        list.forEach(function (p) { if (p.domain && domains.indexOf(p.domain) < 0) domains.push(p.domain); });
        var SIZES = ['', 'tall', '', 'wide', '', '', 'tall', 'wide', '', '', 'wide', 'tall', '', ''];
        return '<div class="wall-bar">' +
            '<div class="wall-filters" role="group" aria-label="Filter projects">' +
              '<button type="button" class="wall-chip on" data-domain="">All <b>' + list.length + '</b></button>' +
              domains.map(function (d) {
                var n = list.filter(function (p) { return p.domain === d; }).length;
                return '<button type="button" class="wall-chip" data-domain="' + esc(d) + '">' + esc(d) + ' <b>' + n + '</b></button>';
              }).join('') +
            '</div>' +
          '</div>' +
          '<div class="wall">' + list.map(function (p, k) {
            var i = D.projects.indexOf(p), parts = splitTitle(p.title);
            var img = p.image || (p.youtube ? ytThumb(p.youtube) : '');
            var size = k === 0 ? 'big' : SIZES[k % SIZES.length];
            var sim = (p.stages || []).indexOf('simulate') > -1;
            return '<button type="button" class="tile ' + size + '" data-proj="' + i + '" data-domain="' + esc(p.domain || '') + '" aria-haspopup="dialog" style="--d:' + (k * 40) + 'ms">' +
              (img ? '<img src="' + esc(img) + '" alt="" loading="' + (k < 6 ? 'eager' : 'lazy') + '">' : '') +
              '<span class="tile-shade" aria-hidden="true"></span>' +
              '<span class="tile-tags"><span class="tile-cat">' + esc(p.domain || '') + '</span>' +
                (sim ? '<span class="tile-flag">Simulated first</span>' : '') + '</span>' +
              '<span class="tile-txt">' +
                '<span class="tile-n">' + String(i + 1).padStart(2, '0') + '</span>' +
                '<span class="tile-title">' + esc(parts[0]) + '</span>' +
                (parts[1] ? '<span class="tile-sub">' + esc(parts[1]) + '</span>' : '') +
              '</span>' +
              '<span class="tile-go" aria-hidden="true">↗</span>' +
            '</button>';
          }).join('') + '</div>';
      }
      return list.map(function (p) {
        var media = '';
        if (p.image) media = '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + '" loading="lazy">';
        else if (p.youtube) media = '<img src="' + ytThumb(p.youtube) + '" alt="' + esc(p.title) + ' video" loading="lazy">';
        var href = p.youtube ? ytUrl(p.youtube) : p.link;
        var play = p.youtube && !isDoc ? '<span class="play" aria-hidden="true">▶</span>' : '';
        // Print card: compact so a dozen projects fit on one A4 page. Full write-ups live on the website.
        var tp = splitTitle(p.title);
        return '<article class="proj">' +
          (media ? '<div class="proj-media">' + (href ? '<a href="' + esc(href) + '">' + media + play + '</a>' : media) + '</div>' : '') +
          '<div class="proj-body">' +
          (p.category ? '<span class="proj-cat">' + esc(String(p.category).split(' · ')[0]) + '</span>' : '') +
          '<h3>' + esc(tp[0]) + '</h3>' +
          (tp[1] ? '<p class="proj-sub">' + esc(tp[1]) + '</p>' : '') +
          (p.description ? '<p class="proj-desc">' + esc(p.description) + '</p>' : '') +
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
      // Display labels are deliberately soft: this is a wishlist, not a demand list.
      var LABEL = { High: 'Used most', Medium: 'Useful', Future: 'Someday' };
      function table(cat) {
        return '<table><thead><tr><th>Item</th><th>Need</th><th>Used for</th></tr></thead><tbody>' +
          cat.items.map(function (it) {
            return '<tr><td>' + esc(it.name) + '</td><td><span class="pri pri-' + it.priority.toLowerCase() + '">' + esc(LABEL[it.priority] || it.priority) +
              '</span></td><td>' + esc(it.use) + '</td></tr>';
          }).join('') + '</tbody></table>';
      }
      return D.requirements.slice(from, to).map(function (cat, i) {
        var ci = from + i;
        if (isDoc) {
          return '<div class="req-cat"><h3><span>' + (ci + 1) + '</span>' + esc(cat.category) + '</h3>' + table(cat) + '</div>';
        }
        var preview = cat.items.slice(0, 3).map(function (it) { return it.name.split(' (')[0]; }).join(' · ');
        return '<details class="req-cat"><summary>' +
            '<span class="req-n">' + (ci + 1) + '</span>' +
            '<span class="req-h"><b>' + esc(cat.category) + '</b><small>' + esc(preview) + (cat.items.length > 3 ? ' …' : '') + '</small></span>' +
            '<span class="req-count">' + cat.items.length + ' items</span>' +
            '<span class="req-chev" aria-hidden="true"></span>' +
          '</summary>' + table(cat) + '</details>';
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
  document.querySelectorAll('.wall-host').forEach(initWall);
})();
