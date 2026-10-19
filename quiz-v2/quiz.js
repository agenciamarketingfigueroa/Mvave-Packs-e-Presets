import { initializeCampaignTracking, buildTrackedCheckoutUrl } from '/campaign-tracking.js';
import { configs, products, stepsFor, recommend, methodCopy } from './config.js';

const config = configs[document.body.dataset.instrument];
const steps = stepsFor(config);
// Snapshot por página: outro anúncio aberto em outra aba não muda este quiz.
const campaign = Object.freeze({ ...initializeCampaignTracking() });
const root = document.querySelector('#quiz');
const status = document.querySelector('#quiz-status');
const answers = {};
let stepIndex = -1;
let busy = false;
let attempt = 0;
let timer;

const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const arrow = '<span aria-hidden="true">↗</span>';
const eq = '<div class="quiz-eq" aria-hidden="true">' + [2,4,7,5,9,6,10,7,4,8,5,3,6,4,2].map(n => `<i style="--level:${n}"></i>`).join('') + '</div>';

function track(event, extra = {}) {
  const data = { funnel: 'quiz_v2', instrument: config.instrument, quiz_attempt: attempt, ...answers, ...extra };
  // Somente escolhas enumeradas; não enviar URL, atribuição ou dados pessoais.
  try { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event, ...data }); } catch (_) { /* Analytics não bloqueia o quiz. */ }
  try { if (typeof window.fbq === 'function') window.fbq('trackCustom', event, data); } catch (_) { /* Ad blockers não bloqueiam o checkout. */ }
}

function show(html, focus = true) {
  root.innerHTML = html;
  if (focus) {
    root.querySelector('[data-heading]')?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

function intro() {
  show(`<section class="quiz-intro quiz-enter">
    <div class="quiz-intro-copy"><p class="eyebrow">Seu setup. Seu timbre.</p>
    <h1 data-heading tabindex="-1">Descubra qual pack de IRs combina com <span>${config.possessive}.</span></h1>
    <p class="quiz-lead">Responda 5 perguntas rápidas e encontre uma opção para o seu equipamento e o som que você procura.</p>
    <button type="button" class="btn btn-amber quiz-start" data-start>COMEÇAR DIAGNÓSTICO ${arrow}</button>
    <p class="quiz-small">Menos de 1 minuto · Sem cadastro</p></div>
    <ol class="quiz-path"><li><b>01</b> Conte sobre seu setup</li><li><b>02</b> Receba seu diagnóstico</li><li><b>03</b> Escolha seu pack</li></ol>
  </section>`, false);
  root.querySelector('[data-start]').addEventListener('click', () => {
    attempt += 1;
    track('quiz_started');
    stepIndex = 0;
    renderStep();
  });
}

function renderStep() {
  busy = false;
  const step = steps[stepIndex];
  show(`<section class="quiz-question quiz-enter" aria-labelledby="question-title">
    <div class="quiz-progress-label"><span>${config.label} <span aria-hidden="true">/</span> Seu diagnóstico</span><strong>${stepIndex + 1} de ${steps.length}</strong></div>
    <progress max="${steps.length}" value="${stepIndex + 1}" aria-label="Pergunta ${stepIndex + 1} de ${steps.length}"></progress>
    <div class="quiz-question-heading"><h1 id="question-title" data-heading tabindex="-1">${step.title}</h1><p>${step.hint}</p></div>
    <div class="quiz-options ${step.key === 'equipment' ? 'quiz-equipment' : ''}" role="group" aria-labelledby="question-title">
    ${step.options.map((option, index) => `<button type="button" class="quiz-option" data-answer="${option.id}" aria-pressed="${answers[step.key] === option.id}">
      ${step.key === 'equipment' ? (option.image ? `<img src="${option.image}" alt="${escape(option.caption ? 'MK300' : option.label)}" width="140" height="85">` : '<span class="quiz-other-icon" aria-hidden="true">+</span>') : `<span class="quiz-option-number" aria-hidden="true">0${index + 1}</span>`}
      <span class="quiz-option-label">${option.label}${option.caption ? `<small>${option.caption}</small>` : ''}</span>
      <span class="quiz-check" aria-hidden="true">${answers[step.key] === option.id ? '✓' : '↗'}</span>
    </button>`).join('')}</div>
    <div class="quiz-step-footer"><button type="button" class="quiz-back" data-back>← Voltar</button><span>Toque em uma opção para avançar</span></div>
  </section>`);
  root.querySelector('[data-back]').addEventListener('click', () => {
    if (busy) return;
    stepIndex -= 1;
    if (stepIndex < 0) { intro(); root.querySelector('[data-start]').focus(); }
    else renderStep();
  });
  root.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => {
    if (busy) return;
    busy = true;
    answers[step.key] = button.dataset.answer;
    root.querySelectorAll('[data-answer]').forEach(option => {
      option.setAttribute('aria-pressed', String(option === button));
      option.setAttribute('aria-disabled', 'true');
      option.querySelector('.quiz-check').textContent = option === button ? '✓' : '↗';
    });
    root.querySelector('[data-back]').disabled = true;
    status.textContent = 'Resposta selecionada. Próxima etapa.';
    const eventKey = step.key === 'other_instruments' ? 'other_instrument' : step.key;
    track(`quiz_${eventKey}_selected`, { step: stepIndex + 1 });
    timer = window.setTimeout(() => {
      status.textContent = '';
      if (stepIndex === steps.length - 1) processing();
      else { stepIndex += 1; renderStep(); }
    }, 220);
  }));
}

function processing() {
  const product = recommend(config, answers);
  track('quiz_completed', { recommended_product: product });
  show(`<section class="quiz-processing quiz-enter"><p class="eyebrow">5 de 5 · Tudo pronto</p>${eq}<h1 data-heading tabindex="-1">Analisando seu setup…</h1><p role="status" id="processing-copy">Conectando suas escolhas à biblioteca.</p></section>`);
  timer = window.setTimeout(() => {
    document.querySelector('#processing-copy').textContent = 'Encontramos uma opção para você.';
    timer = window.setTimeout(result, 600);
  }, 900);
}

function offerCard(key, recommended, description) {
  const product = products[key];
  const count = product.count.match(/^[\d.]+/)[0];
  const formats = product.count.replace(/^[\d.]+ arquivos(?: de IR)?\s*/, '').replace(/[()]/g, '');
  return `<article class="quiz-offer${recommended ? ' quiz-offer-recommended' : ''}" aria-labelledby="offer-${key}">
    <span class="quiz-offer-kicker">${recommended ? '✓ RECOMENDADO PARA SEU SETUP' : 'OUTRA OPÇÃO PARA VOCÊ'}</span>
    <h2 id="offer-${key}">${product.name}</h2><p>${description}</p>
    <div class="quiz-quantity"><strong>${count}</strong><span>arquivos de IR</span><small>${formats}</small></div>
    <ul class="quiz-benefits"><li>${key === 'completo' ? 'Guitarra, baixo e violão' : `Biblioteca dedicada a ${config.possessive}`}</li><li>8 videoaulas de configuração pelo computador</li><li>Acesso vitalício ao pack adquirido</li></ul>
    <div class="quiz-offer-footer"><div class="quiz-price"><span>Pagamento único</span><strong>R$ ${product.price}</strong></div>
    <a class="btn ${recommended ? 'btn-amber' : 'btn-dark'} quiz-checkout" data-checkout="${key}" href="${escape(buildTrackedCheckoutUrl(product.checkout, campaign))}">${key === 'completo' ? 'LIBERAR PACK COMPLETO' : `LIBERAR PACK DE ${config.label.toUpperCase()}`} ${arrow}</a>
    <p class="quiz-offer-micro">Acesso após a confirmação do pagamento<br>Videoaulas incluídas · Suporte via WhatsApp</p></div>
  </article>`;
}

function result() {
  busy = false;
  const productKey = recommend(config, answers);
  const equipment = config.equipment.find(o => o.id === answers.equipment);
  const goal = config.goals.find(o => o.id === answers.goal);
  const experienceLabel = { beginner: 'Primeiros passos', learning: 'Ainda tenho dúvidas', experienced: 'Já uso IRs' }[answers.ir_experience];
  const otherLabel = { guitarra: 'guitarra', baixo: 'baixo', violao: 'violão', all: 'os três instrumentos' }[answers.other_instruments];
  const experienceCopy = answers.ir_experience === 'experienced'
    ? '<h3>Vá direto para a biblioteca.</h3><p>Como você já usa IRs, carregue suas opções favoritas e compare diferentes respostas no seu equipamento.</p>'
    : `<h3>${answers.ir_experience === 'beginner' ? 'Seu primeiro IR tem um passo a passo.' : 'Um passo a passo para tirar suas dúvidas.'}</h3><p>Você recebe 8 videoaulas com o processo de download e configuração pelo computador, gravadas com um pedal M-Vave de guitarra. O editor e os passos podem variar conforme o modelo.</p><p>Se surgir alguma dúvida sobre o pack ou a compra, há suporte via WhatsApp.</p>`;
  const conditional = ['other', 'mk300_mk200'].includes(answers.equipment);
  const offerOrder = productKey === 'completo' ? ['completo', config.instrument] : [config.instrument, 'completo'];
  const descriptions = {
    [config.instrument]: `Uma opção para ${goal.result}, com uma biblioteca dedicada a ${config.possessive}.`,
    completo: productKey === 'completo'
      ? `Como você também toca ${otherLabel}, faz sentido considerar a biblioteca completa para guitarra, baixo e violão.`
      : 'Se quiser explorar outros instrumentos, a biblioteca completa reúne os packs de guitarra, baixo e violão.'
  };
  show(`<section class="quiz-result quiz-enter">
    <div class="quiz-result-heading"><p class="eyebrow">Seu diagnóstico está pronto</p><h1 data-heading tabindex="-1">Mais caminhos para <span>o seu timbre.</span></h1><p>Seu objetivo é ${goal.result}.</p></div>
    <div class="quiz-result-grid"><div class="quiz-diagnosis">
      <div class="quiz-setup">${equipment.image ? `<img src="${equipment.image}" alt="${escape(equipment.caption ? 'MK300' : equipment.label)}" width="120" height="80">` : ''}<div><span class="quiz-small">SEU EQUIPAMENTO</span><h2>${equipment.label}</h2>${equipment.caption ? `<small>${equipment.caption}</small>` : ''}</div></div>
      <dl class="quiz-summary"><div><dt>O que você procura</dt><dd>${goal.label}</dd></div><div><dt>Experiência com IRs</dt><dd>${experienceLabel}</dd></div></dl>
      <p>${conditional ? 'Se o seu modelo permite importar IRs, você pode' : `Com o ${equipment.label}, você pode`} explorar novas respostas no setup que já possui.</p>
      <div class="quiz-guidance">${experienceCopy}<p>${methodCopy[answers.current_method]}</p></div>
      <button class="quiz-back" type="button" data-edit>← Revisar minhas respostas</button>
    </div><div class="quiz-offers" role="group" aria-label="Compare os packs disponíveis">${offerOrder.map(key => offerCard(key, key === productKey, descriptions[key])).join('')}</div></div>
    <div class="quiz-faq"><details><summary>Como recebo o pack?</summary><p>O acesso é liberado após a confirmação do pagamento pela Hotmart. O pack é digital e inclui os arquivos e as aulas.</p></details>
    <details${conditional ? ' open' : ''}><summary>O que preciso conferir no equipamento?</summary><p>${conditional ? 'Confirme o modelo exato e o suporte à importação de IRs antes da compra. ' : ''}Use arquivos no formato e na resolução aceitos pelo seu modelo. A instalação depende do editor do equipamento; o pack não adiciona suporte a IR a um aparelho que não tenha essa função. As aulas mostram o processo pelo computador.</p></details></div>
  </section>`);
  track('quiz_result_viewed', { recommended_product: productKey });
  root.querySelector('[data-edit]').addEventListener('click', () => { stepIndex = steps.length - 1; renderStep(); });
  root.querySelectorAll('[data-checkout]').forEach(link => {
    const clicked = event => {
      if (event.type === 'auxclick' && event.button !== 1) return;
      track('quiz_checkout_clicked', { recommended_product: productKey, checkout_product: link.dataset.checkout });
    };
    link.addEventListener('click', clicked);
    link.addEventListener('auxclick', clicked);
  });
}

window.addEventListener('pagehide', () => window.clearTimeout(timer));
// Retomada do bfcache durante o feedback/análise, sem tela travada.
window.addEventListener('pageshow', event => { if (event.persisted && busy) renderStep(); });
intro();
