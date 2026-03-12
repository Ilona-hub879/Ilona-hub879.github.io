// 1. Translations Dictionary (RU, EN, LV)
const translations = {
  ru: {
    hero_title: 'Сохраняю ваше время и деньги. Использую код.',
    hero_prefix: 'Я автоматизирую: ',
    btn_hero: 'К тарифам',
    about_title: 'О подходе',
    about_desc: 'Меньше рутины, больше вайба. Я превращаю хаотичные бизнес-задачи в стройные алгоритмы. Автоматизация — это не просто код, это система, которая освобождает вас для создания великого.',
    calc_title: 'Калькулятор сэкономленного времени',
    calc_subtitle: 'Введите задачу, которую вы ненавидите делать руками.',
    calc_placeholder: 'Например: Сбор отчетов по пятницам',
    calc_btn: 'Рассчитать',
    calc_res_prefix: 'Результат: ',
    gal_title: 'Галерея работ',
    gal_1_t: 'Telegram Бот',
    gal_1_d: 'Умный ассистент для поддержки клиентов.',
    gal_2_t: 'Парсер данных',
    gal_2_d: 'Сбор аналитики с 1000 сайтов за минуту.',
    gal_3_t: 'CRM Интеграция',
    gal_3_d: 'Связка всего со всем без единого разрыва.',
    pr_title: 'Цены',
    pr_sub: '* Цены на 5-8% ниже рынка благодаря автоматизации моих собственных процессов разработки.',
    pr_b_t: 'Базовый',
    pr_b_p: 'от $200',
    pr_b_d: 'Простые скрипты и боты. Идеально для старта автоматизации.',
    pr_p_t: 'Про',
    pr_p_p: 'от $500',
    pr_p_d: 'Сложные интеграции, парсеры и цепочки данных.',
    pr_c_t: 'Корп',
    pr_c_p: 'Индивидуально',
    pr_c_d: 'Полная автоматизация бизнеса, поддержка и SLA.',
    ft_rights: '© 2026 Vibecoder & Automator. Все права защищены.',
    ft_privacy: 'Политика конфиденциальности (GDPR)',
    cookie_text: 'Мы используем cookies, чтобы настроить вайб и сохранить ваши предпочтения (включая язык).',
    cookie_btn: 'Принять',
    cookie_decline: 'Отклонить',
    sig_label: 'Vibecoder & Automator',
    sig_title: 'Вайбкодер, который экономит вам время.',
    sig_desc: 'LV · RU · EN · Автоматизация, боты, парсеры, интеграции.',
    sig_cta: 'Написать мне',
    // Dynamic lists
    roles: ['бизнес-процессы', 'рутину', 'хаос', 'отчеты', 'задачи'],
    calc_answers: [
      "Пока вы это писали, скрипт уже бы всё сделал.",
      "Сэкономлено: 42 часа. Можно посмотреть сериалы.",
      "Это займёт 0.5 секунд у машины и вечность у человека.",
      "Вы сэкономите столько времени, что придется искать новое хобби.",
      "Автоматизировано! Теперь вы можете просто пить кофе.",
      "Скрипт готов. Осторожно: вызывает привыкание к свободному времени.",
      "Роботы в шоке, но они это сделают за вас.",
      "Ваши конкуренты всё ещё делают это вручную. А мы - нет.",
      "Минус одна головная боль. Плюс один повод для радости.",
      "Сэкономлено 100% времени. Запускаем магию."
    ]
  },
  en: {
    hero_title: 'Saving your time and money. Powered by code.',
    hero_prefix: 'I automate: ',
    btn_hero: 'View Pricing',
    about_title: 'My Approach',
    about_desc: 'Less routine, more vibe. I turn chaotic business tasks into elegant algorithms. Automation isn’t just code; it’s a system that frees you up to create greatness.',
    calc_title: 'Saved Time Calculator',
    calc_subtitle: 'Enter a task you hate doing manually.',
    calc_placeholder: 'e.g., Weekly Friday reporting',
    calc_btn: 'Calculate',
    calc_res_prefix: 'Result: ',
    gal_title: 'Work Gallery',
    gal_1_t: 'Telegram Bot',
    gal_1_d: 'Smart assistant for customer support.',
    gal_2_t: 'Data Parser',
    gal_2_d: 'Collecting analytics from 1000 sites in a minute.',
    gal_3_t: 'CRM Integration',
    gal_3_d: 'Connecting everything seamlessly without breaking.',
    pr_title: 'Pricing',
    pr_sub: '* Prices are 5-8% below market average thanks to the automation of my own dev processes.',
    pr_b_t: 'Basic',
    pr_b_p: 'from $200',
    pr_b_d: 'Simple scripts and bots. Perfect for starting out.',
    pr_p_t: 'Pro',
    pr_p_p: 'from $500',
    pr_p_d: 'Complex integrations, parsers, and data pipelines.',
    pr_c_t: 'Corp',
    pr_c_p: 'Custom',
    pr_c_d: 'Full business automation, dedicated support, SLA.',
    ft_rights: '© 2026 Vibecoder & Automator. All rights reserved.',
    ft_privacy: 'Privacy Policy (GDPR)',
    cookie_text: 'We use cookies to keep the vibe right and save your preferences (like language).',
    cookie_btn: 'Accept',
    cookie_decline: 'Decline',
    sig_label: 'Vibecoder & Automator',
    sig_title: 'Vibecoder who saves your time.',
    sig_desc: 'LV · RU · EN · Automation, bots, parsers, integrations.',
    sig_cta: 'Contact me',
    roles: ['business processes', 'routine', 'chaos', 'reports', 'tasks'],
    calc_answers: [
      "While you were typing this, a script would have finished it.",
      "Saved: 42 hours. Go watch some Netflix.",
      "Takes 0.5 seconds for a machine, and eternity for a human.",
      "You'll save so much time you'll need a new hobby.",
      "Automated! Now you can just drink coffee.",
      "Script ready. Warning: may cause addiction to free time.",
      "Robots are shocked, but they'll do it for you.",
      "Your competitors still do this manually. We don't.",
      "Minus one headache. Plus one reason to smile.",
      "100% time saved. Initiating magic."
    ]
  },
  lv: {
    hero_title: 'Ietaupu jūsu laiku un naudu. Izmantojot kodu.',
    hero_prefix: 'Es automatizēju: ',
    btn_hero: 'Skatīt cenas',
    about_title: 'Par pieeju',
    about_desc: 'Mazāk rutīnas, vairāk vaiba. Es pārvēršu haotiskus biznesa uzdevumus elegantos algoritmos. Automatizācija nav tikai kods, tā ir sistēma, kas atbrīvo jūs lieliem darbiem.',
    calc_title: 'Ietaupītā laika kalkulators',
    calc_subtitle: 'Ievadiet uzdevumu, kuru ienīstat darīt ar rokām.',
    calc_placeholder: 'Piemēram: Piektdienas atskaišu vākšana',
    calc_btn: 'Aprēķināt',
    calc_res_prefix: 'Rezultāts: ',
    gal_title: 'Darbu galerija',
    gal_1_t: 'Telegram Bots',
    gal_1_d: 'Gudrs asistents klientu atbalstam.',
    gal_2_t: 'Datu Pārseris',
    gal_2_d: 'Analītikas savākšana no 1000 lapām minūtes laikā.',
    gal_3_t: 'CRM Integrācija',
    gal_3_d: 'Sasaiste starp visu bez neviena pārrāvuma.',
    pr_title: 'Cenas',
    pr_sub: '* Cenas ir par 5-8% zemākas nekā tirgū, pateicoties manu izstrādes procesu automatizācijai.',
    pr_b_t: 'Bāzes',
    pr_b_p: 'no $200',
    pr_b_d: 'Vienkārši skripti un boti. Ideāli sākumam.',
    pr_p_t: 'Pro',
    pr_p_p: 'no $500',
    pr_p_d: 'Sarežģītas integrācijas, pārseri un datu ķēdes.',
    pr_c_t: 'Korp',
    pr_c_p: 'Individuāli',
    pr_c_d: 'Pilna biznesa automatizācija, atbalsts un SLA.',
    ft_rights: '© 2026 Vibecoder & Automator. Visas tiesības aizsargātas.',
    ft_privacy: 'Privātuma politika (GDPR)',
    cookie_text: 'Mēs izmantojam sīkfailus, lai uzturētu labu vaibu un saglabātu jūsu izvēles (ieskaitot valodu).',
    cookie_btn: 'Pieņemt',
    cookie_decline: 'Noraidīt',
    sig_label: 'Vibecoder & Automator',
    sig_title: 'Vibekoders, kas taupa jūsu laiku.',
    sig_desc: 'LV · RU · EN · Automatizācija, boti, parsētāji, integrācijas.',
    sig_cta: 'Sazināties',
    roles: ['biznesa procesus', 'rutīnu', 'haosu', 'atskaites', 'uzdevumus'],
    calc_answers: [
      "Kamēr jūs šo rakstījāt, skripts to jau būtu izdarījis.",
      "Ietaupīts: 42 stundas. Varat skatīties seriālus.",
      "Mašīnai tas aizņems 0.5 sekundes, bet cilvēkam - mūžību.",
      "Jūs ietaupīsiet tik daudz laika, ka nāksies meklēt jaunu hobiju.",
      "Automatizēts! Tagad varat vienkārši dzert kafiju.",
      "Skripts gatavs. Uzmanību: izraisa atkarību no brīvā laika.",
      "Roboti ir šokā, bet viņi to izdarīs jūsu vietā.",
      "Jūsu konkurenti to joprojām dara manuāli. Bet mēs nē.",
      "Mīnus viena galvassāpe. Plus viens iemesls priekam.",
      "Ietaupīts 100% laika. Palaižam maģiju."
    ]
  }
};

let currentLang = localStorage.getItem('lang') || 'ru';

// 2. Initial Setup
document.addEventListener('DOMContentLoaded', () => {
  // Init AOS animations
  if (typeof AOS !== 'undefined') {
    AOS.init({ once: true, duration: 800, offset: 50 });
  }

  // Set up language switcher
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener('change', (e) => {
      currentLang = e.target.value;
      localStorage.setItem('lang', currentLang);
      applyTranslations();
    });
  }

  applyTranslations();
  initTypewriter();
  initCalculator();
  initCookieBanner();
  initCursorBlob();
});

// 3. i18n Application
function applyTranslations() {
  const dict = translations[currentLang];
  document.documentElement.lang = currentLang;

  // Simple text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerHTML = dict[key]; 
  });

  // Input placeholders
  document.querySelectorAll('[data-placeholder-i18n]').forEach(el => {
    const key = el.getAttribute('data-placeholder-i18n');
    if (dict[key]) el.setAttribute('placeholder', dict[key]);
  });
  
  // Restart typewriter seamlessly when language changes
  typewriterState.roleIndex = 0;
  typewriterState.charIndex = 0;
  const twEl = document.getElementById('typewriter');
  if (twEl) twEl.textContent = '';
  
  // Hide calculator result on language switch to avoid mixed text
  const resultDiv = document.getElementById('calc-result');
  if (resultDiv) resultDiv.classList.add('hidden');
}

// 4. Typewriter Effect
const typewriterState = {
  roleIndex: 0,
  charIndex: 0,
  isDeleting: false,
  timer: null
};

function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  function tick() {
    const roles = translations[currentLang].roles;
    const currentRole = roles[typewriterState.roleIndex];
    
    if (typewriterState.isDeleting) {
      el.textContent = currentRole.substring(0, typewriterState.charIndex - 1);
      typewriterState.charIndex--;
    } else {
      el.textContent = currentRole.substring(0, typewriterState.charIndex + 1);
      typewriterState.charIndex++;
    }

    let speed = typewriterState.isDeleting ? 40 : 80;

    if (!typewriterState.isDeleting && typewriterState.charIndex === currentRole.length) {
      speed = 2500; // Pause at end of word
      typewriterState.isDeleting = true;
    } else if (typewriterState.isDeleting && typewriterState.charIndex === 0) {
      typewriterState.isDeleting = false;
      typewriterState.roleIndex = (typewriterState.roleIndex + 1) % roles.length;
      speed = 400; // Pause before typing next word
    }

    typewriterState.timer = setTimeout(tick, speed);
  }
  
  clearTimeout(typewriterState.timer);
  tick();
}

// 5. Saved Time Calculator Logic
function initCalculator() {
  const btn = document.getElementById('calc-btn');
  const input = document.getElementById('calc-input');
  const resultDiv = document.getElementById('calc-result');

  if (!btn || !input || !resultDiv) return;

  btn.addEventListener('click', () => {
    const val = input.value.trim();
    if (!val) {
      input.focus();
      return;
    }

    const dict = translations[currentLang];
    const answers = dict.calc_answers;
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    
    resultDiv.innerHTML = `<span class="text-white">${dict.calc_res_prefix}</span> ${randomAnswer}`;
    resultDiv.classList.remove('hidden');
    
    // Add a quick pulse effect
    resultDiv.classList.add('animate-pulse');
    setTimeout(() => resultDiv.classList.remove('animate-pulse'), 800);
  });
  
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') btn.click();
  });
}

// 6. Cookie Banner Logic
function initCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  const btn = document.getElementById('cookie-accept');
  const declineBtn = document.getElementById('cookie-decline');

  if (!banner || !btn || !declineBtn) return;

  if (!localStorage.getItem('cookie_consent')) {
    setTimeout(() => {
      banner.classList.remove('translate-y-full', 'opacity-0');
    }, 1500); // Slide in after 1.5 seconds
  }

  btn.addEventListener('click', () => {
    localStorage.setItem('cookie_consent', 'accepted');
    banner.classList.add('translate-y-full', 'opacity-0');
    setTimeout(() => banner.style.display = 'none', 500);
  });

  declineBtn.addEventListener('click', () => {
    localStorage.setItem('cookie_consent', 'declined');
    banner.classList.add('translate-y-full', 'opacity-0');
    setTimeout(() => banner.style.display = 'none', 500);
  });
}

// 7. Cursor blob effect (gold glow following cursor)
function initCursorBlob() {
  const blob = document.getElementById('cursor-blob');
  if (!blob) return;

  let isMoving = false;

  window.addEventListener('pointermove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    blob.style.opacity = '1';
    blob.style.transform = `translate3d(${x - 130}px, ${y - 130}px, 0)`;

    if (!isMoving) {
      isMoving = true;
      blob.style.transition = 'transform 450ms ease-out, opacity 500ms ease-out';
      setTimeout(() => {
        isMoving = false;
      }, 500);
    }
  });

  window.addEventListener('pointerleave', () => {
    blob.style.opacity = '0';
  });
}
