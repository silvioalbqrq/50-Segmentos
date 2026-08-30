const setores = [
  {
    "id": 1,
    "nome": "Frigoríficos e Açougues",
    "cat": "agro",
    "tag": "Agro",
    "resumo": "Como a alíquota zero de carnes transforma o setor mais beneficiado da Reforma tributária"
  },
  {
    "id": 2,
    "nome": "Autopeças",
    "cat": "comercio",
    "tag": "Comercio",
    "resumo": "O fim do paraíso tributário e o que fazer para sobreviver à nova realidade do IBS e CBS"
  },
  {
    "id": 3,
    "nome": "Farmácias e Drogarias",
    "cat": "comercio",
    "tag": "Comercio",
    "resumo": "Da tributação fragmentada ao IVA dual — como a Reforma tributária remodela o setor farmacêutico"
  },
  {
    "id": 4,
    "nome": "Bens Móveis Usados e Veículos",
    "cat": "comercio",
    "tag": "Comercio",
    "resumo": "Do crédito presumido à não cumulatividade — como o Art. 171 da LC 214/2025 remodela o mercado de"
  },
  {
    "id": 5,
    "nome": "Supermercados",
    "cat": "comercio",
    "tag": "Comercio",
    "resumo": "Múltiplos sub-setores com impactos tributários diferentes — alguns ganham, alguns perdem, alguns"
  },
  {
    "id": 6,
    "nome": "E-commerce",
    "cat": "comercio",
    "tag": "Comercio",
    "resumo": "Fim do Regime Especial de ICMS em 2029, transição para IBS e oportunidade de créditos massivos em"
  },
  {
    "id": 7,
    "nome": "Pet Shops",
    "cat": "comercio",
    "tag": "Comercio",
    "resumo": "vendem muito medicamento veterinário precisam revisar sua política de precificação com antecedência para"
  },
  {
    "id": 8,
    "nome": "Restaurantes, Bares e Lanchonetes",
    "cat": "servicos",
    "tag": "Servicos",
    "resumo": "Regime especial com redução de 40%, mas vedação de crédito para clientes PJ e necessidade de"
  },
  {
    "id": 9,
    "nome": "Hotelaria",
    "cat": "servicos",
    "tag": "Servicos",
    "resumo": "Redução de 40% em CBS/IBS, vedação de crédito para cliente PJ, crédito permitido para o hotel, Airon"
  },
  {
    "id": 10,
    "nome": "Saúde — Consultórios e Clínicas",
    "cat": "saude",
    "tag": "Saúde",
    "resumo": "Redução de 60% para serviços de saúde humana. Atenção ao Simples Nacional."
  },
  {
    "id": 11,
    "nome": "Odontologia",
    "cat": "saude",
    "tag": "Saude",
    "resumo": "Redução de 60% aplicável — mas a decisão entre regimes exige simulação detalhada, especialmente para"
  },
  {
    "id": 12,
    "nome": "Salões de Beleza",
    "cat": "servicos",
    "tag": "Servicos",
    "resumo": "Setor sem nenhum benefício especial na Reforma — e o modelo de parceria com MEI, que hoje reduz a base"
  },
  {
    "id": 13,
    "nome": "Escolas e Instituições de Ensino",
    "cat": "servicos",
    "tag": "Servicos",
    "resumo": "A redução de 60% em CBS/IBS não resolve o maior problema: a folha de pagamento não gera crédito"
  },
  {
    "id": 14,
    "nome": "Infoprodutores",
    "cat": "servicos",
    "tag": "Servicos",
    "resumo": "E-books imunes, cursos online com redução de 60% se enquadrados como extensão acadêmica,"
  },
  {
    "id": 15,
    "nome": "Advocacia",
    "cat": "servicos",
    "tag": "Servicos",
    "resumo": "Redução de 30% em CBS/IBS, pressão de mercado para regime regular em clientes PJ, Simples"
  },
  {
    "id": 16,
    "nome": "Contabilidade",
    "cat": "servicos",
    "tag": "Servicos",
    "resumo": "Redução de 30% em CBS/IBS, Simples Nacional Anexo III, Fator R e a posição dupla do contador:"
  },
  {
    "id": 17,
    "nome": "Postos de Combustível",
    "cat": "comercio",
    "tag": "Comercio",
    "resumo": "Regime monofásico mantido com oportunidade inédita de ressarcimento mensal de créditos tributários"
  },
  {
    "id": 18,
    "nome": "Setor Imobiliário",
    "cat": "servicos",
    "tag": "Servicos",
    "resumo": "Regime  específico  com  redução  de  50%  a  70%  nas  alíquotas,  dois  novos  redutores  de  base  e  opções  de"
  },
  {
    "id": 19,
    "nome": "Veículos Novos",
    "cat": "comercio",
    "tag": "Comercio",
    "resumo": "Regime especial de transição com crédito presumido de CBS para veículos elétricos e híbridos — benefício"
  },
  {
    "id": 20,
    "nome": "Produtor Rural",
    "cat": "agro",
    "tag": "Agro",
    "resumo": "Tratamento diferenciado com redução de 60% nos insumos, diferimento tributário e crédito presumido para"
  },
  {
    "id": 21,
    "nome": "Laboratório de análises clínicas",
    "cat": "saude",
    "tag": "Saúde",
    "resumo": "Redução de 60%. Crédito sobre reagentes e equipamentos."
  },
  {
    "id": 22,
    "nome": "Hospitais e Clínicas Cirúrgicas",
    "cat": "saude",
    "tag": "Saude",
    "resumo": "Redução de 60% aplica-se — glosas dedutíveis da base, dois regimes tributários em jogo: o do hospital e o do"
  },
  {
    "id": 23,
    "nome": "Construtoras e Incorporadoras",
    "cat": "industria",
    "tag": "Industria",
    "resumo": "Regime cumulativo e RET dão lugar ao IBS/CBS com créditos amplos, redutor de ajuste e redutor social —"
  },
  {
    "id": 24,
    "nome": "Agência de Marketing Digital",
    "cat": "servicos",
    "tag": "Servicos",
    "resumo": "ISS baixo (2%–5%) é substituído por IBS ~20% em 2033; mão de obra não gera crédito — setor de serviços"
  },
  {
    "id": 25,
    "nome": "Indústria Têxtil e Confecções",
    "cat": "industria",
    "tag": "Industria",
    "resumo": "Guerra fiscal dos benefícios estaduais chega ao fim — alíquota plena de 26,5% sem regimes diferenciados;"
  },
  {
    "id": 26,
    "nome": "Agências de Turismo",
    "cat": "servicos",
    "tag": "Servicos",
    "resumo": "Sem benefício de redução na Reforma — mas o regime geral abre créditos sobre toda a cadeia operacional"
  },
  {
    "id": 27,
    "nome": "Indústria de pescado e camarão",
    "cat": "agro",
    "tag": "Agro",
    "resumo": "Peixes  in  natura  entram  na  Cesta  Básica  com  alíquota  zero;  camarões  e  crustáceos  têm  redução  de  60%;"
  },
  {
    "id": 28,
    "nome": "Atacadista de Bebidas",
    "cat": "comercio",
    "tag": "Comercio",
    "resumo": "Fim  do  regime  concentrado  e  do  ICMS-ST  —  toda  a  cadeia  passa  a  destacar  CBS/IBS  a  26,5%;  Imposto"
  },
  {
    "id": 29,
    "nome": "Provedor de Internet",
    "cat": "servicos",
    "tag": "Servicos",
    "resumo": "alíquota  plena  sem  redução;  fim  da  estratégia  SCM/SVA  em  2027;  crédito  financeiro  pleno  compensa"
  },
  {
    "id": 30,
    "nome": "Desenvolvedores de Software",
    "cat": "servicos",
    "tag": "Servicos",
    "resumo": "Sem redução de alíquota na Reforma — o grande dilema é o crédito B2B: Simples gera crédito limitado ao"
  },
  {
    "id": 31,
    "nome": "Sucata e Reciclagem",
    "cat": "industria",
    "tag": "Industria",
    "resumo": "STF  derrubou  suspensão  e  vedação  de  crédito  em  2026;  Reforma  cria  crédito  presumido  de  20%  para"
  },
  {
    "id": 32,
    "nome": "Farmácias de Manipulação",
    "cat": "saude",
    "tag": "Saude",
    "resumo": "Redução de 60% para fórmulas magistrais — alíquota varia por produto; a Reforma resolve a briga histórica"
  },
  {
    "id": 33,
    "nome": "Clínicas Veterinárias",
    "cat": "saude",
    "tag": "Saude",
    "resumo": "Redução de 30% aplica-se — mas exige CNPJ exclusivo, sócios habilitados pelo CFMV e atividade restrita à"
  },
  {
    "id": 34,
    "nome": "Transportadora e logística",
    "cat": "servicos",
    "tag": "Servicos",
    "resumo": "Alíquota cheia sem redução setorial; não cumulatividade plena como principal compensação; tributação migra"
  },
  {
    "id": 35,
    "nome": "Setor de Energia Elétrica",
    "cat": "industria",
    "tag": "Industria",
    "resumo": "Diferimento absoluto do IBS/CBS em toda a cadeia intermediária — o tributo só é exigido no fornecimento para"
  },
  {
    "id": 36,
    "nome": "Clínica de Estética",
    "cat": "servicos",
    "tag": "Servicos",
    "resumo": "Sem benefício de redução para o serviço estético puro — alíquota varia conforme o profissional e a natureza"
  },
  {
    "id": 37,
    "nome": "Revenda de Pneus",
    "cat": "comercio",
    "tag": "Comercio",
    "resumo": "Fim do monofásico em 2027 impacta diretamente varejista e atacadista — CBS/IBS passa a incidir sobre toda"
  },
  {
    "id": 38,
    "nome": "Locação de Bens Móveis",
    "cat": "servicos",
    "tag": "Servicos",
    "resumo": "Sem ISS nem ICMS hoje — o IBS entra em 2029 como imposto totalmente novo, sem compensação de tributos"
  },
  {
    "id": 39,
    "nome": "Distribuidoras de Medicamentos",
    "cat": "comercio",
    "tag": "Comercio",
    "resumo": "O monofásico acaba — a distribuidora passa a recolher CBS/IBS com redução de 60%; crédito acumulado na"
  },
  {
    "id": 40,
    "nome": "Indústria de Laticínios e Derivados",
    "cat": "agro",
    "tag": "Agro",
    "resumo": "alíquota zero para os básicos, redução de 60% para fermentados — crédito acumulado expressivo e crédito"
  },
  {
    "id": 41,
    "nome": "Indústria de Panificação e Confeitaria",
    "cat": "agro",
    "tag": "Agro",
    "resumo": "Alíquota zero para o pão francês e a farinha de trigo — bolos, biscoitos e confeitaria pagam alíquota plena."
  },
  {
    "id": 42,
    "nome": "Indústria de Sucos e Bebidas Não Alcoólicas",
    "cat": "industria",
    "tag": "Industria",
    "resumo": "Suco natural sem açúcar (NCM 20.09): redução de 60% — alíquota efetiva ~11,2%; néctares e sucos com"
  },
  {
    "id": 43,
    "nome": "Indústria de Rações e Alimentos Pet",
    "cat": "agro",
    "tag": "Agro",
    "resumo": "Sem  benefício  setorial  na  Reforma  —  CBS/IBS  pleno  sobre  alimentos  pet;  Lucro  Presumido  é  prejudicado"
  },
  {
    "id": 44,
    "nome": "Indústria de Massas e Cereais",
    "cat": "agro",
    "tag": "Agro",
    "resumo": "alíquota zero para massas não cozidas e farinha de trigo; extinção do ICMS-ST representa ganho expressivo"
  },
  {
    "id": 45,
    "nome": "Distribuidoras de Alimentos",
    "cat": "comercio",
    "tag": "Comercio",
    "resumo": "Mix de alíquota zero, redução de 60% e alíquota plena exige controle rigoroso de NCM; fim do ICMS-ST alivia"
  },
  {
    "id": 46,
    "nome": "Indústria de Bebidas",
    "cat": "industria",
    "tag": "Industria",
    "resumo": "A indústria é o único elo da cadeia que recolhe o Imposto Seletivo — sem crédito para a cadeia subsequente;"
  },
  {
    "id": 47,
    "nome": "Indústria de Carne e Frango",
    "cat": "agro",
    "tag": "Agro",
    "resumo": "Alíquota  zero  mantida  na  carne  in  natura  —  crédito  acumulado  sobre  toda  a  cadeia  produtiva  é  o  maior"
  },
  {
    "id": 48,
    "nome": "Setor Hortifruti",
    "cat": "agro",
    "tag": "Agro",
    "resumo": "alíquota zero ampla no Anexo XV — crédito presumido do produtor rural pequeno e crédito sobre despesas"
  },
  {
    "id": 49,
    "nome": "Cemitério e Funerária",
    "cat": "servicos",
    "tag": "Servicos",
    "resumo": "alíquotas zero ou créditos presumidos que marcam outros setores. A tributação incide sobre o faturamento, e"
  },
  {
    "id": 50,
    "nome": "Padaria e Confeitaria Varejista",
    "cat": "comercio",
    "tag": "Comercio",
    "resumo": "Natureza híbrida — produção, comércio e serviço no mesmo estabelecimento; complexidade migra da entrada"
  },
  {
    "id": 51,
    "nome": "Comércio Varejista em Geral",
    "cat": "comercio",
    "tag": "Comercio",
    "resumo": "O comércio varejista é o elo que mais convive com distorções hoje — ICMS-ST embutido no custo sem crédito,"
  },
  {
    "id": 52,
    "nome": "Setor de Serviços em Geral",
    "cat": "servicos",
    "tag": "Servicos",
    "resumo": "O setor de serviços foi o mais ignorado pela Reforma — sem reduções, sem benefícios, e com o ISS baixo"
  },
  {
    "id": 53,
    "nome": "Setor Industrial em Geral",
    "cat": "industria",
    "tag": "Industria",
    "resumo": "A indústria no Lucro Real tende a ser beneficiada — alíquota menor, crédito amplo e extinção do ICMS-ST; a"
  }
];
