(function () {
  var blocks = document.querySelectorAll('[data-lang]');
  var back = document.getElementById('legal-back');
  var backBase = document.body.getAttribute('data-back-href') || 'digital-products.html';
  var pageKey = (window.location.pathname.split('/').pop() || '').toLowerCase();
  var pageTitlesByFile = {
    'ai-gdpr-auditor-privacy.html': {
      ru: 'Политика конфиденциальности — AI GDPR Audit Tool',
      en: 'Privacy Policy — AI GDPR Audit Tool',
      lv: 'Privātuma politika — AI GDPR Audit Tool'
    },
    'ai-gdpr-auditor-terms.html': {
      ru: 'Условия использования — AI GDPR Audit Tool',
      en: 'Terms of Service — AI GDPR Audit Tool',
      lv: 'Lietošanas noteikumi — AI GDPR Audit Tool'
    },
    'refund-policy.html': {
      ru: 'Политика возврата — ProSolvely by Ilona Samovica',
      en: 'Refund Policy — ProSolvely by Ilona Samovica',
      lv: 'Naudas atgriešanas politika — ProSolvely by Ilona Samovica'
    }
  };
  var pageTitles = pageTitlesByFile[pageKey] || pageTitlesByFile['ai-gdpr-auditor-privacy.html'];

  function setLang(code) {
    blocks.forEach(function (el) {
      el.classList.toggle('is-active', el.getAttribute('data-lang') === code);
    });
    document.documentElement.lang = code === 'ru' ? 'ru' : code === 'lv' ? 'lv' : 'en';
    document.title = pageTitles[code] || pageTitles.en;
    if (back) {
      var labels = {
        ru: '&#8592; К цифровым продуктам',
        en: '&#8592; Back to digital products',
        lv: '&#8592; Atpaka&#316; uz digit&#257;lajiem produktiem'
      };
      back.href = backBase + '?lang=' + encodeURIComponent(code);
      back.innerHTML = labels[code] || labels.en;
    }
  }

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
})();
