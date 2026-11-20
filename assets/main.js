// Service Plus Electrical — concept site scripts
(function () {
  // Mobile menu
  var btn = document.querySelector('.menu-toggle');
  var nav = document.querySelector('nav.main');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Quote forms (concept only — not wired to email yet)
  document.querySelectorAll('form.quote').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var ok = form.querySelector('.form-ok');
      if (ok) ok.style.display = 'block';
      form.reset();
    });
  });

  // "Get a Quote" / "Request a Quote" buttons open the pop-up instead of leaving the page.
  // Without JavaScript (or on old browsers) they still go to the Contact page.
  var modal = document.getElementById('quote-modal');
  if (modal && typeof modal.showModal === 'function') {
    var open = function (e) {
      e.preventDefault();
      var ok = modal.querySelector('.form-ok');
      if (ok) ok.style.display = 'none';
      if (nav) nav.classList.remove('open');
      modal.showModal();
      var first = modal.querySelector('input');
      if (first) first.focus();
    };
    document.querySelectorAll('a[href$="contact.html"]').forEach(function (a) {
      if (/quote/i.test(a.textContent)) a.addEventListener('click', open);
    });
    modal.querySelector('.qm-close').addEventListener('click', function () { modal.close(); });
    // click on the dark backdrop closes it
    modal.addEventListener('click', function (e) { if (e.target === modal) modal.close(); });
  }
})();
