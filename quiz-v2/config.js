// Oferta espelhada de app.js (products / CHECKOUTS). Não importar app.js:
// ele inicializa as páginas V1. O teste de contrato detecta divergências.
export const products = {
  guitarra: { name: 'Pack de IRs para Guitarra', price: '29,90', count: '11.658 arquivos de IR (7.450 WAV + 4.208 SYX)', checkout: 'https://pay.hotmart.com/G83013604X?off=2bbwth7u&checkoutMode=10' },
  baixo: { name: 'Pack de IRs para Baixo', price: '29,90', count: '2.179 arquivos WAV', checkout: 'https://pay.hotmart.com/Q83013351D?checkoutMode=10' },
  violao: { name: 'Pack de IRs para Violão', price: '29,90', count: '227 arquivos WAV', checkout: 'https://pay.hotmart.com/G83013838I?checkoutMode=10&off=flkvbzsf' },
  completo: { name: 'Pack Completo de IRs', price: '49,90', count: '14.064 arquivos de IR (9.856 WAV + 4.208 SYX)', checkout: 'https://pay.hotmart.com/J76211442I?checkoutMode=10&off=kb7vzng1' }
};

const equipment = (id, label, image, caption = '') => ({ id, label, image: image ? `/assets/img/equipment/${image}.webp` : '', caption });
const sharedEquipment = [
  equipment('blackbox', 'BlackBox', 'annblack-box'),
  equipment('mk300_mk200', 'MK300 / MK200', 'mk-300', 'Imagem: MK300'),
  equipment('ir_box', 'IR Box', 'ir-box'),
  equipment('other', 'Outro equipamento compatível', '', 'Com importação de IRs')
];
const options = entries => entries.map(([id, label, result]) => ({ id, label, result }));
export const configs = {
  guitar: {
    instrument: 'guitarra', label: 'Guitarra', possessive: 'sua guitarra',
    equipment: [equipment('cube_guitar', 'CubeBaby Guitar', 'cube-baby'), equipment('tank_g', 'Tank G', 'tank-g'), ...sharedEquipment],
    goals: options([
      ['variety', 'Ter mais opções de caixas e timbres', 'explorar mais opções de caixas e timbres'],
      ['clean', 'Melhorar meus sons clean', 'explorar novas respostas para os sons clean'],
      ['drive', 'Ter mais definição no drive / high gain', 'buscar mais definição nos sons de drive e high gain'],
      ['styles', 'Encontrar timbres para estilos diferentes', 'comparar timbres para estilos diferentes'],
      ['explore', 'Explorar novas possibilidades', 'explorar novas possibilidades de timbre']
    ]),
    others: options([['baixo', 'Sim, também toco baixo'], ['violao', 'Sim, também toco violão'], ['all', 'Sim, toco os três'], ['none', 'Não, toco apenas guitarra']])
  },
  bass: {
    instrument: 'baixo', label: 'Baixo', possessive: 'seu baixo',
    equipment: [equipment('cube_bass', 'CubeBaby Bass', 'cube-baby-bass'), equipment('tank_b', 'Tank B', 'tank-b'), ...sharedEquipment],
    goals: options([
      ['weight', 'Ter mais peso', 'buscar mais peso no seu baixo'],
      ['definition', 'Ter mais definição', 'buscar mais definição nas notas'],
      ['mix', 'Fazer o baixo encaixar melhor na mix', 'encontrar uma resposta que encaixe melhor na mix'],
      ['cabinets', 'Testar respostas diferentes de caixas', 'comparar respostas de diferentes caixas'],
      ['variety', 'Ter mais opções de timbre', 'ampliar suas opções de timbre']
    ]),
    others: options([['guitarra', 'Sim, também toco guitarra'], ['violao', 'Sim, também toco violão'], ['all', 'Sim, toco os três'], ['none', 'Não, toco apenas baixo']])
  },
  violao: {
    instrument: 'violao', label: 'Violão', possessive: 'seu violão',
    equipment: [equipment('cube_ac', 'CubeBaby AC', 'cube-baby-ac'), ...sharedEquipment],
    goals: options([
      ['natural', 'Ter um som mais natural em linha', 'buscar um som mais natural em linha'],
      ['piezo', 'Reduzir aquele som característico de piezo', 'explorar respostas que suavizem o som característico de piezo'],
      ['body', 'Ter mais corpo', 'buscar mais corpo no som do violão'],
      ['live', 'Melhorar meu som ao vivo', 'explorar respostas para o seu som ao vivo'],
      ['recording', 'Melhorar gravações em linha', 'explorar novas respostas nas gravações em linha']
    ]),
    others: options([['guitarra', 'Sim, também toco guitarra'], ['baixo', 'Sim, também toco baixo'], ['all', 'Sim, toco os três'], ['none', 'Não, toco apenas violão']])
  }
};

export const experience = options([
  ['beginner', 'Não. Nunca fiz isso.'],
  ['learning', 'Já tentei, mas ainda tenho dúvidas.'],
  ['experienced', 'Sim. Já uso IRs normalmente.']
]);
export const methods = options([
  ['free', 'Baixo IRs gratuitos e vou testando'],
  ['stock', 'Uso principalmente os IRs que vieram no equipamento'],
  ['paid', 'Já comprei outros IRs'],
  ['unorganized', 'Tenho vários arquivos, mas ficam meio desorganizados'],
  ['new', 'Ainda não uso IRs']
]);
export function stepsFor(config) {
  return [
    { key: 'equipment', title: 'Qual equipamento você usa?', hint: 'Escolha o que faz parte do seu setup.', options: config.equipment },
    { key: 'goal', title: 'O que você quer melhorar no seu timbre?', hint: 'Escolha o que mais importa para você agora.', options: config.goals },
    { key: 'ir_experience', title: 'Você já sabe carregar IRs no seu equipamento?', hint: 'Assim, a gente indica por onde começar.', options: experience },
    { key: 'current_method', title: 'Como você costuma encontrar novos timbres?', hint: 'Qual destas opções descreve melhor sua rotina?', options: methods },
    { key: 'other_instruments', title: 'Você toca algum outro instrumento?', hint: 'Sua biblioteca pode acompanhar os outros setups.', options: config.others }
  ];
}
export function recommend(config, answers) {
  return answers.other_instruments === 'none' ? config.instrument : 'completo';
}
export const methodCopy = {
  free: 'Em vez de procurar arquivos soltos, você pode explorar uma biblioteca organizada e comparar as opções no seu setup.',
  stock: 'Você pode ir além dos IRs que vieram no equipamento e comparar outras respostas com os timbres que já conhece.',
  paid: 'Use os timbres que você já conhece como referência para comparar novas opções da biblioteca.',
  unorganized: 'A biblioteca organizada por instrumento e referências ajuda a escolher o que testar, sem depender de arquivos espalhados.',
  new: 'Comece com poucas opções, ouça as diferenças e monte sua primeira seleção de IRs.'
};
