(() => {
  'use strict';
  const questions = [
    { tag: '01 · Sua jornada', title: 'Há quanto tempo você toca violão?', help: 'Cada fase traz um jeito diferente de ouvir e buscar o próprio som.', answers: ['Estou começando agora', 'Há menos de 1 ano', 'De 1 a 3 anos', 'Há mais de 3 anos'] },
    { tag: '02 · Seu equipamento', title: 'Como é sua experiência com pedais e pedaleiras?', help: 'Pense no que você costuma fazer quando liga seu equipamento.', answers: ['Ainda estou aprendendo a usar', 'Uso os sons prontos e mexo pouco', 'Ajusto alguns efeitos, mas ainda tenho dúvidas', 'Monto e ajusto meus próprios timbres'] },
    { tag: '03 · Suas escolhas', title: 'Você entende o que cada efeito faz no seu som?', help: 'Por exemplo: quando usar compressor, equalização, delay ou reverb.', answers: ['Ainda confundo a função dos efeitos', 'Reconheço alguns, mas ajusto por tentativa', 'Entendo as funções, mas tenho dúvidas nos ajustes', 'Sei escolher e ajustar os efeitos que preciso'] },
    { tag: '04 · O caminho do som', title: 'Você entende como a ordem dos efeitos muda o timbre?', help: 'A cadeia de sinal é o caminho que o som percorre. Trocar a ordem dos blocos pode mudar o resultado.', answers: ['Cadeia de sinal é novidade para mim', 'Uso a ordem que já vem no preset', 'Sei que a ordem importa, mas não sei bem por quê', 'Organizo a cadeia conforme o som que procuro'] }
  ];
  const content = document.getElementById('quiz-content');
  const next = document.getElementById('quiz-next');
  const back = document.getElementById('quiz-back');
  const progress = document.getElementById('quiz-progress');
  const fill = document.getElementById('quiz-progress-fill');
  const footnote = document.getElementById('quiz-footnote');
  const answers = Array(4).fill(null);
  let step = 0;

  function diagnosis() {
    const experienced = answers.slice(1).every(value => value === 3);
    const title = experienced ? 'Você já tem uma boa base. Seu próximo passo é refinar.' : 'Seu próximo passo: dar intenção aos seus ajustes.';
    const intro = experienced
      ? 'Pelas suas respostas, você já escolhe efeitos e organiza a cadeia com segurança. O guia pode servir como consulta para revisar decisões e explorar outras possibilidades.'
      : (answers[0] <= 1 ? 'Você está construindo sua base no violão. ' : 'Sua experiência tocando é um bom ponto de partida. ') + 'Pelas suas respostas, estes são os pontos que vale aprofundar para ajustar com mais clareza:';
    const topics = [
      { title: answers[1] < 3 ? 'Mais autonomia no equipamento' : 'Um método para comparar timbres', text: answers[1] < 3 ? 'Entender o que mudar no preset ajuda a adaptar o som ao seu violão.' : 'Ouvir a base, mudar uma coisa por vez e comparar no contexto da música.' },
      { title: answers[2] < 3 ? 'Clareza sobre os efeitos' : 'Refinamento dos efeitos', text: answers[2] < 3 ? 'Conhecer a função de cada efeito dá um motivo para cada ajuste.' : 'Revisar EQ, dinâmica e ambiência para ouvir o que cada bloco acrescenta.' },
      { title: answers[3] < 3 ? 'O caminho do sinal' : 'Novas possibilidades de cadeia', text: answers[3] < 3 ? 'Entender a ordem dos blocos ajuda a prever como um efeito interfere no outro.' : 'Consultar referências e testar outras ordens conforme o resultado desejado.' }
    ];
    return '<span class="question-tag">Seu diagnóstico</span><h2 id="question-title" tabindex="-1">' + title + '</h2><p class="question-help">' + intro + '</p><div class="result-topics">' + topics.map(topic => '<div class="result-topic"><strong>' + topic.title + '</strong><p>' + topic.text + '</p></div>').join('') + '</div>';
  }

  function render(focus = true) {
    back.hidden = step === 0;
    next.disabled = step < 4 && answers[step] === null;
    const answered = answers.filter(value => value !== null).length;
    progress.setAttribute('aria-valuenow', answered);
    fill.style.width = (answered / 4 * 100) + '%';
    document.getElementById('step-label').textContent = step < 4 ? 'SEU PONTO DE PARTIDA' : 'SEU PRÓXIMO PASSO';
    document.getElementById('step-count').textContent = step < 4 ? String(step + 1).padStart(2, '0') + ' / 04' : ['DIAGNÓSTICO', 'CONHEÇA O GUIA', 'NA PRÁTICA'][step - 4];
    next.innerHTML = (step === 4 ? 'Quero conhecer o guia' : step === 6 ? 'Eu quero · ver a oferta' : 'Continuar') + ' <span aria-hidden="true">→</span>';
    footnote.textContent = step < 4 ? 'Escolha a opção que mais combina com você.' : step === 4 ? 'Uma orientação a partir das suas respostas, sem nota ou julgamento.' : 'Conhecer a oferta não adiciona uma compra ao seu pedido.';
    if (step < 4) {
      const q = questions[step];
      content.innerHTML = '<span class="question-tag">' + q.tag + '</span><h2 id="question-title" tabindex="-1">' + q.title + '</h2><p class="question-help" id="question-help">' + q.help + '</p><fieldset class="answer-options" aria-labelledby="question-title" aria-describedby="question-help">' + q.answers.map((answer, index) => '<label class="answer-option"><input type="radio" name="answer" value="' + index + '"' + (answers[step] === index ? ' checked' : '') + '><span>' + answer + '</span></label>').join('') + '</fieldset>';
    } else if (step === 4) {
      content.innerHTML = diagnosis();
    } else if (step === 5) {
      content.innerHTML = '<span class="question-tag">Uma referência sempre à mão</span><h2 id="question-title" tabindex="-1">Conheça o Guia de Bolso do Timbre.</h2><div class="guide-peek"><img src="/guia/assets/capa.jpg" width="112" height="168" alt="Capa do Guia de Bolso do Timbre"><p><strong>41 páginas</strong>PDF em português para ler no seu ritmo e consultar quando surgir uma dúvida.</p></div><ul class="guide-bullets"><li>Fundamentos do timbre e cadeia de sinal.</li><li>Gate, compressor, EQ, ganho, modulações, delay e reverb.</li><li>Referências para guitarra, baixo e violão.</li></ul>';
    } else {
      content.innerHTML = '<span class="question-tag">Da leitura ao próximo ajuste</span><h2 id="question-title" tabindex="-1">Abra na sua dúvida. Ajuste. Volte a tocar.</h2><p class="question-help">Use como leitura sequencial ou consulta rápida, com o equipamento ao seu lado.</p><div class="result-topics"><div class="result-topic"><strong>01 · Entenda o que está ouvindo</strong><p>Consulte os fundamentos e identifique o que quer mudar no som.</p></div><div class="result-topic"><strong>02 · Encontre um ponto de partida</strong><p>Explore receitas conceituais e adapte os ajustes ao seu equipamento.</p></div><div class="result-topic"><strong>03 · Confira antes de tocar</strong><p>Use os checklists de preparação, refinamento e palco.</p></div></div><p class="guide-note">O guia é um PDF. Não inclui arquivos de IR ou presets instaláveis.</p>';
    }
    if (focus) {
      document.getElementById('question-title').focus({preventScroll: true});
      if (window.matchMedia('(max-width: 700px)').matches) {
        document.getElementById('quiz-card').scrollIntoView({block: 'start', behavior: 'instant'});
      }
    }
  }

  content.addEventListener('change', event => {
    if (step >= 4 || !event.target.matches('input[name="answer"]')) return;
    answers[step] = Number(event.target.value);
    next.disabled = false;
    const answered = answers.filter(value => value !== null).length;
    progress.setAttribute('aria-valuenow', answered);
    fill.style.width = (answered / 4 * 100) + '%';
  });
  back.addEventListener('click', () => { if (step > 0) { step--; render(); } });
  next.addEventListener('click', () => {
    if (step < 4 && answers[step] === null) return;
    if (step < 6) { step++; render(); return; }
    document.getElementById('diagnostico').hidden = true;
    document.getElementById('offer-content').hidden = false;
    const title = document.getElementById('offer-title');
    title.setAttribute('tabindex', '-1');
    title.focus({preventScroll: true});
    window.scrollTo({top: 0, behavior: 'instant'});
  });
  // Preço de referência compartilhado com /guia/. O botão de upsell é inserido separadamente no HTML.
  const offer = window.GUIDE_OFFER || {};
  for (const [key, id] of [['price', 'offer-price'], ['installments', 'offer-installments']]) {
    if (typeof offer[key] === 'string' && offer[key].trim()) {
      document.getElementById(id).textContent = offer[key].trim();
      document.getElementById(id).hidden = false;
    }
  }
  render(false);
})();
