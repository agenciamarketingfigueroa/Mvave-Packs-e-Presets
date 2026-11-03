(() => {
  const deadline = Date.parse('2026-12-01T00:00:00-03:00');
  const timer = document.querySelector('.draw-clock');
  const fields = {
    days: document.querySelector('[data-count="days"]'),
    hours: document.querySelector('[data-count="hours"]'),
    minutes: document.querySelector('[data-count="minutes"]'),
    seconds: document.querySelector('[data-count="seconds"]')
  };

  function updateCountdown() {
    const remaining = Math.max(0, deadline - Date.now());
    const totalSeconds = Math.floor(remaining / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    fields.days.textContent = String(days).padStart(2, '0');
    fields.hours.textContent = String(hours).padStart(2, '0');
    fields.minutes.textContent = String(minutes).padStart(2, '0');
    fields.seconds.textContent = String(seconds).padStart(2, '0');
    timer.setAttribute('aria-label', remaining ? `Faltam ${days} dias, ${hours} horas e ${minutes} minutos até 1º de dezembro de 2026` : 'Chegou o dia do sorteio de dezembro de 2026');
    if (!remaining) {
      document.querySelector('#countdown-title').textContent = 'Hoje é o dia do sorteio';
      document.querySelector('#countdown-note').textContent = 'Acompanhe @mvavebr para o horário da seleção e a divulgação do resultado.';
      window.clearInterval(interval);
    }
  }

  const interval = window.setInterval(updateCountdown, 1000);
  updateCountdown();

  const toggle = document.querySelector('.menu-toggle');
  const closeMenu = () => {
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.querySelector('span').textContent = '☰';
  };
  toggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('span').textContent = open ? '×' : '☰';
  });
  document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });

  const campaignParams = new URLSearchParams(window.location.search);
  document.querySelectorAll('[data-campaign-link]').forEach(link => {
    const url = new URL(link.href);
    campaignParams.forEach((value, key) => {
      if (key === 'sck' || key.startsWith('utm_') || ['fbclid', 'gclid'].includes(key)) url.searchParams.set(key, value);
    });
    link.href = url.pathname + url.search;
  });
  document.querySelector('#copyright-year').textContent = String(new Date().getFullYear());
})();
