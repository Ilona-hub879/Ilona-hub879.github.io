(function () {
  var blocks = document.querySelectorAll('[data-lang]');
  var back = document.getElementById('legal-back');
  var backBase = document.body.getAttribute('data-back-href') || 'digital-products.html';

  function setLang(code) {
    blocks.forEach(function (el) {
      el.classList.toggle('is-active', el.getAttribute('data-lang') === code);
    });
    document.documentElement.lang = code === 'ru' ? 'ru' : code === 'lv' ? 'lv' : 'en';
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
