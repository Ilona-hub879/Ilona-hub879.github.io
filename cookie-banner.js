(function (global) {
  var CONSENT_KEY = 'cookie_consent';
  var LANG_KEY = 'lang';

  var BANNER_COPY = {
    ru: {
      lead: 'Мы используем необходимые cookie, чтобы сайт работал корректно. Подробнее — в ',
      link: 'Политике конфиденциальности',
      decline: 'Отклонить',
      accept: 'Принять'
    },
    en: {
      lead: 'We use essential cookies so the site works properly. See our ',
      link: 'Privacy Policy',
      tail: ' for details.',
      decline: 'Decline',
      accept: 'Accept'
    },
    lv: {
      lead: 'Mēs izmantojam nepieciešamās sīkdatnes, lai vietne darbotos pareizi. Sīkāk — ',
      link: 'Privātuma politikā',
      tail: '.',
      decline: 'Noraidīt',
      accept: 'Pieņemt'
    }
  };

  function hasConsent() {
    try {
      var v = localStorage.getItem(CONSENT_KEY);
      return v === 'accepted' || v === 'declined';
    } catch (e) {
      return false;
    }
  }

  function consentAllowsStorage() {
    try {
      return localStorage.getItem(CONSENT_KEY) === 'accepted';
    } catch (e) {
      return false;
    }
  }

  function getStoredLang() {
    if (!consentAllowsStorage()) return null;
    try {
      var lang = localStorage.getItem(LANG_KEY);
      return lang === 'ru' || lang === 'en' || lang === 'lv' ? lang : null;
    } catch (e) {
      return null;
    }
  }

  function persistLang(code) {
    if (code !== 'ru' && code !== 'en' && code !== 'lv') return;
    if (!consentAllowsStorage()) return;
    try {
      localStorage.setItem(LANG_KEY, code);
    } catch (e) {}
  }

  function resolveSiteLang(defaultLang) {
    var fallback = defaultLang || 'ru';
    var params = new URLSearchParams(global.location.search);
    var lang = params.get('lang');
    if (lang === 'ru' || lang === 'en' || lang === 'lv') return lang;
    var stored = getStoredLang();
    if (stored) return stored;
    return fallback;
  }

  function normalizeLang(code) {
    return code === 'en' || code === 'lv' || code === 'ru' ? code : 'ru';
  }

  function applyBannerCopy(lang) {
    var code = normalizeLang(lang);
    var copy = BANNER_COPY[code] || BANNER_COPY.ru;
    var lead = document.getElementById('cookie-banner-lead');
    var link = document.getElementById('cookie-banner-privacy');
    var tail = document.getElementById('cookie-banner-tail');
    var declineBtn = document.getElementById('cookie-decline');
    var acceptBtn = document.getElementById('cookie-accept');
    if (lead) lead.textContent = copy.lead;
    if (link) {
      link.textContent = copy.link;
      link.href = 'privacy2.html?lang=' + encodeURIComponent(code);
    }
    if (tail) {
      tail.textContent = copy.tail != null ? copy.tail : '.';
      tail.style.display = copy.tail === '' ? 'none' : '';
    }
    if (declineBtn) declineBtn.textContent = copy.decline;
    if (acceptBtn) acceptBtn.textContent = copy.accept;
  }

  function initCookieBanner(getActiveLang) {
    var banner = document.getElementById('cookie-banner');
    var btn = document.getElementById('cookie-accept');
    var declineBtn = document.getElementById('cookie-decline');
    if (!banner || !btn || !declineBtn) return;

    var activeLang =
      typeof getActiveLang === 'function'
        ? normalizeLang(getActiveLang())
        : normalizeLang(document.documentElement.lang || 'ru');
    applyBannerCopy(activeLang);

    if (!hasConsent()) {
      setTimeout(function () {
        banner.classList.remove('translate-y-full', 'opacity-0');
      }, 800);
    }

    btn.addEventListener('click', function () {
      try {
        localStorage.setItem(CONSENT_KEY, 'accepted');
        if (typeof getActiveLang === 'function') {
          persistLang(normalizeLang(getActiveLang()));
        }
      } catch (e) {}
      banner.classList.add('translate-y-full', 'opacity-0');
      setTimeout(function () {
        banner.style.display = 'none';
      }, 500);
    });

    declineBtn.addEventListener('click', function () {
      try {
        localStorage.setItem(CONSENT_KEY, 'declined');
      } catch (e) {}
      banner.classList.add('translate-y-full', 'opacity-0');
      setTimeout(function () {
        banner.style.display = 'none';
      }, 500);
    });
  }

  global.SiteConsent = {
    hasConsent: hasConsent,
    consentAllowsStorage: consentAllowsStorage,
    getStoredLang: getStoredLang,
    persistLang: persistLang,
    resolveSiteLang: resolveSiteLang,
    applyBannerCopy: applyBannerCopy,
    initCookieBanner: initCookieBanner
  };
})(window);
