/**
 * Single source of truth for AI GDPR Audit Tool prices on prosolvely.com.
 * Change amounts here only; UI slots with .product-pricing-slot update on load.
 * (Guide/legal copy still has manual € mentions until a build step syncs them.)
 */
(function (global) {
  var PRICING = {
    currency: 'EUR',
    symbol: '€',
    oneTime: {
      amount: 12.49,
      documents: 1
    },
    subscription: {
      amount: 62.49,
      period: 'month',
      documentsPerPeriod: 30
    }
  };

  var LABELS = {
    ru: {
      pricesHeading: 'Цены (EUR, €)',
      oneTimeBadge: 'Разово',
      subBadge: 'Подписка',
      oneTimeTitle: 'Разовая проверка',
      oneTimeDesc: '1 полный AI GDPR-аудит одного документа (PDF/DOCX)',
      subTitle: 'Месячная подписка',
      subDesc: 'До 30 полных проверок документов за расчётный месяц',
      perMonth: '/ месяц',
      compactOne: 'разово · 1 документ',
      compactSub: 'подписка · до 30 док./мес.'
    },
    en: {
      pricesHeading: 'Pricing (EUR, €)',
      oneTimeBadge: 'One-time',
      subBadge: 'Subscription',
      oneTimeTitle: 'One-time check',
      oneTimeDesc: '1 full AI GDPR audit of one document (PDF/DOCX)',
      subTitle: 'Monthly subscription',
      subDesc: 'Up to 30 full document checks per billing month',
      perMonth: '/ month',
      compactOne: 'one-time · 1 document',
      compactSub: 'subscription · up to 30 docs/month'
    },
    lv: {
      pricesHeading: 'Cenas (EUR, €)',
      oneTimeBadge: 'Vienreizēji',
      subBadge: 'Abonements',
      oneTimeTitle: 'Vienreizēja pārbaude',
      oneTimeDesc: '1 pilns AI GDPR audits vienam dokumentam (PDF/DOCX)',
      subTitle: 'Mēneša abonements',
      subDesc: 'Līdz 30 pilnām dokumentu pārbaudēm mēnesī',
      perMonth: '/ mēnesī',
      compactOne: 'vienreiz · 1 dokuments',
      compactSub: 'abonements · līdz 30 dok./mēn.'
    }
  };

  function formatAmount(amount, lang) {
    var s = amount.toFixed(2);
    return lang === 'en' ? s : s.replace('.', ',');
  }

  function priceWithSymbol(amount, lang) {
    return PRICING.symbol + formatAmount(amount, lang);
  }

  function labels(lang) {
    return LABELS[lang] || LABELS.en;
  }

  function renderCompact(lang) {
    var L = labels(lang);
    var ot = priceWithSymbol(PRICING.oneTime.amount, lang);
    var sub = priceWithSymbol(PRICING.subscription.amount, lang);
    return (
      '<div class="product-pricing-compact" role="group" aria-label="' +
      L.pricesHeading +
      '">' +
      '<p class="product-pricing-compact-heading font-syne text-[10px] uppercase tracking-widest text-emerald/90 mb-2">' +
      L.pricesHeading +
      '</p>' +
      '<ul class="product-pricing-compact-list">' +
      '<li><span class="product-pricing-amount">' +
      ot +
      '</span> <span class="product-pricing-meta">' +
      L.compactOne +
      '</span></li>' +
      '<li><span class="product-pricing-amount">' +
      sub +
      L.perMonth +
      '</span> <span class="product-pricing-meta">' +
      L.compactSub +
      '</span></li>' +
      '</ul></div>'
    );
  }

  function renderFull(lang) {
    var L = labels(lang);
    var ot = priceWithSymbol(PRICING.oneTime.amount, lang);
    var sub = priceWithSymbol(PRICING.subscription.amount, lang);
    return (
      '<section class="product-pricing-full" aria-labelledby="pricing-full-' +
      lang +
      '">' +
      '<h3 id="pricing-full-' +
      lang +
      '" class="font-syne text-sm font-semibold text-emerald mb-3">' +
      L.pricesHeading +
      '</h3>' +
      '<div class="product-pricing-grid">' +
      '<article class="product-pricing-card">' +
      '<span class="product-pricing-badge">' +
      L.oneTimeBadge +
      '</span>' +
      '<p class="product-pricing-card-price">' +
      ot +
      '</p>' +
      '<p class="product-pricing-card-title">' +
      L.oneTimeTitle +
      '</p>' +
      '<p class="product-pricing-card-desc">' +
      L.oneTimeDesc +
      '</p>' +
      '</article>' +
      '<article class="product-pricing-card">' +
      '<span class="product-pricing-badge product-pricing-badge--sub">' +
      L.subBadge +
      '</span>' +
      '<p class="product-pricing-card-price">' +
      sub +
      '<span class="product-pricing-card-period">' +
      L.perMonth +
      '</span></p>' +
      '<p class="product-pricing-card-title">' +
      L.subTitle +
      '</p>' +
      '<p class="product-pricing-card-desc">' +
      L.subDesc +
      '</p>' +
      '</article></div></section>'
    );
  }

  function mount() {
    document.querySelectorAll('.product-pricing-slot').forEach(function (slot) {
      var article = slot.closest('article[data-lang]');
      if (!article) return;
      var lang = article.getAttribute('data-lang');
      var view = slot.getAttribute('data-pricing-view');
      slot.innerHTML = view === 'full' ? renderFull(lang) : renderCompact(lang);
    });
  }

  global.AiGdprPricing = {
    PRICING: PRICING,
    formatAmount: formatAmount,
    priceWithSymbol: priceWithSymbol,
    mount: mount
  };
})(typeof window !== 'undefined' ? window : globalThis);
