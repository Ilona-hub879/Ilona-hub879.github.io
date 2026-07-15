(function () {
  var buttons = document.querySelectorAll('[data-set-lang]');
  var blocks = document.querySelectorAll('[data-lang]');
  var modal = document.getElementById('support-modal');
  var openBtn = document.getElementById('support-open');
  var closeBtn = document.getElementById('support-close');
  var backdrop = document.getElementById('support-backdrop');
  var pageTitles = {
    ru: 'Цифровые продукты — ProSolvely by Ilona Samovica',
    en: 'Digital products — ProSolvely by Ilona Samovica',
    lv: 'Digitālie produkti — ProSolvely by Ilona Samovica'
  };

  function setLang(code) {
    blocks.forEach(function (el) {
      el.classList.toggle('is-active', el.getAttribute('data-lang') === code);
    });
    buttons.forEach(function (btn) {
      var on = btn.getAttribute('data-set-lang') === code;
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    document.documentElement.lang = code === 'ru' ? 'ru' : code === 'lv' ? 'lv' : 'en';
    document.title = pageTitles[code] || pageTitles.en;
    try {
      localStorage.setItem('lang', code);
    } catch (e) {}
    if (window.history && window.history.replaceState) {
      var url = new URL(window.location.href);
      url.searchParams.set('lang', code);
      window.history.replaceState(null, '', url.pathname + url.search);
    }
    document.querySelectorAll('[data-legal-lang]').forEach(function (a) {
      var base = a.getAttribute('href').split('?')[0];
      a.href = base + '?lang=' + encodeURIComponent(code);
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-set-lang'));
    });
  });

  var params = new URLSearchParams(window.location.search);
  var lang = params.get('lang');
  if (lang !== 'ru' && lang !== 'en' && lang !== 'lv') {
    try {
      lang = localStorage.getItem('lang');
    } catch (e) {
      lang = null;
    }
    if (lang !== 'ru' && lang !== 'en' && lang !== 'lv') {
      lang = 'ru';
    }
  }
  setLang(lang);

  function openModal() {
    if (!modal) return;
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-support-open]').forEach(function (btn) {
    btn.addEventListener('click', openModal);
  });
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });
})();
