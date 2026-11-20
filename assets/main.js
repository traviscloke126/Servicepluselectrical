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

  // Quote form (concept only — not wired to email yet)
  var form = document.querySelector('form.quote');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var ok = form.querySelector('.form-ok');
      if (ok) ok.style.display = 'block';
      form.reset();
    });
  }
})();
