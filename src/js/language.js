document.addEventListener('DOMContentLoaded', () => {
  const userLang = navigator.language || navigator.userLanguage;
  const lang = userLang.startsWith('pt') ? 'pt' : 'en';

  function setLanguage(lang) {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
      const key = el.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        if (el.tagName === 'META' && el.name === 'description') {
          el.content = translations[lang][key];
        } else if (el.tagName === 'A') {
          el.setAttribute('aria-label', translations[lang][key]);
        } else {
          el.innerHTML = translations[lang][key];
        }
      }
    });
    document.title = translations[lang].title;
  }

  setLanguage(lang);
});