import type { Condicao, Incomodo, ResultadoId } from "./diagnostico";

// Texto de cada resultado. Os números e as condutas saem dos PDFs da Michelly
// (cardápios das fases 1–3 e guia de suplementos, em 03_EXPANSAO/
// app-acompanhamento-glp1/referencias-michelly na pasta do cliente). A Fase 2
// "Ponto de Virada" não tem PDF próprio: no método dela o platô é o gatilho da
// recomposição, então a conduta é a virada para ela.
//
// Regra: o texto NUNCA orienta dose da caneta. Dose é do médico.

export type Conduta = { titulo: string; texto: string };

export type Fase = {
  id: ResultadoId;
  tag: string;
  nome: string;
  /** Uma linha, logo abaixo do nome. */
  resumo: string;
  /** O que é essa fase, em 2 parágrafos curtos. */
  oQueE: string[];
  condutas: Conduta[];
  evitar: string[];
  /** Quando ela sai dessa fase e vai pra próxima. */
  proxima: string;
  /** g de proteína por kg de peso atual. */
  proteinaPorKg: { min: number; max: number };
};

export const AGUA_ML_POR_KG = { min: 35, max: 45 };

export const FASES: Record<ResultadoId, Fase> = {
  fase1: {
    id: "fase1",
    tag: "Fase 1",
    nome: "Aceleração Inicial",
    resumo: "Emagrecer firme, protegendo o músculo, com energia e sem murchar.",
    oQueE: [
      "É a fase em que a caneta está no pico de ação: a fome some e o peso desce rápido. O perigo mora justamente aí. Comendo pouco e sem estratégia, boa parte do que sai da balança é músculo, e não gordura.",
      "O objetivo agora é aproveitar esse déficit sem gerar estresse no metabolismo: bater a meta de proteína todos os dias, alternar os dias de carboidrato para o corpo não se acostumar e cuidar do intestino e dos efeitos colaterais.",
    ],
    condutas: [
      {
        titulo: "Proteína primeiro, todos os dias",
        texto:
          "1,2 a 1,6 g de proteína por quilo do seu peso atual. Deixe 30 g no almoço e 30 g no jantar e divida o resto entre o café da manhã e os lanches. Lembre: 100 g de frango têm cerca de 30 g de proteína, não 100 g.",
      },
      {
        titulo: "Ciclo de carboidrato",
        texto:
          "No almoço e no jantar, carboidrato só na terça, na quinta e no sábado (2 colheres de sopa). Nos outros dias, prato de vegetais e proteína. Isso evita que o metabolismo se acostume.",
      },
      {
        titulo: "4 a 5 refeições em horário fixo",
        texto:
          "Mesmo sem fome. Pular refeição com a caneta é o caminho mais curto para perder músculo, ter tontura e cansaço.",
      },
      {
        titulo: "Água de 35 a 45 ml por quilo",
        texto:
          "Fracionada ao longo do dia e longe das refeições. Ao acordar, eletrólitos (ou água com limão, uma pitada de sal e magnésio) antes do café.",
      },
      {
        titulo: "Exercício 4 vezes por semana",
        texto:
          "A meta é 2 dias de musculação e 2 de aeróbio. A musculação é o que avisa o corpo que o músculo precisa ficar.",
      },
      {
        titulo: "Suplementos que valem a pena",
        texto:
          "Suplemento proteico, creatina (3 a 5 g todos os dias, com ou sem treino), vitamina D, ômega 3, magnésio e um polivitamínico. O resto depende dos seus sintomas.",
      },
    ],
    evitar: [
      "Ficar horas sem comer porque \"não sente fome\"",
      "Açúcar e álcool: inflamam e pioram a resistência à insulina",
      "Beber líquido junto com as refeições",
      "Contar só calorias e esquecer da proteína",
    ],
    proxima:
      "Você vai para a Fase 2 se a balança parar por 3 a 4 semanas seguidas. Se faltarem menos de 5 kg para a meta, vai direto para a Fase 3.",
    proteinaPorKg: { min: 1.2, max: 1.6 },
  },

  fase2: {
    id: "fase2",
    tag: "Fase 2",
    nome: "Ponto de Virada",
    resumo: "A balança travou. Você não entra em pânico e não corre para subir a dose.",
    oQueE: [
      "O platô é o corpo se defendendo: depois de semanas de déficit, ele desacelera para economizar energia. Não é falha sua nem da caneta. É o sinal de que a estratégia que funcionou até aqui precisa mudar.",
      "Aumentar a dose por conta própria ou cortar ainda mais comida só aprofunda o problema. A virada é o contrário: mais proteína, treino de força com carga e carboidrato na hora certa, para o corpo voltar a usar a gordura como energia.",
    ],
    condutas: [
      {
        titulo: "Suba a proteína",
        texto:
          "A meta passa para 1,6 a 2,0 g por quilo do seu peso atual: 30 a 35 g em cada refeição principal e 15 a 30 g nos lanches.",
      },
      {
        titulo: "Carboidrato só em dia de treino de força",
        texto:
          "Nos dias de musculação, 3 colheres de sopa de carboidrato no almoço ou no jantar (70 a 90 g). Nos dias sem treino de força, prato sem carboidrato, ou metade da porção se a fome apertar.",
      },
      {
        titulo: "Treino de força é prioridade",
        texto:
          "Sem carga não existe educação do metabolismo. Se você ainda não faz musculação, este é o momento de começar.",
      },
      {
        titulo: "Creatina e HMB",
        texto:
          "Creatina 3 a 5 g todos os dias e 3 g de HMB para sinalizar a construção de músculo mesmo com a caneta agindo.",
      },
      {
        titulo: "Ordem do prato",
        texto:
          "Primeiro os vegetais, depois a proteína e por último o carboidrato. Isso reduz o pico de insulina.",
      },
      {
        titulo: "Revise o básico",
        texto:
          "Água de 35 a 45 ml por quilo, intestino funcionando e sono. Qualquer um desses fora do lugar segura a balança.",
      },
    ],
    evitar: [
      "Subir a dose por conta própria: dose é conversa com o seu médico",
      "Cortar ainda mais comida para \"destravar\"",
      "Trocar musculação por mais aeróbio",
      "Se pesar todo dia e decidir pelo número do dia",
    ],
    proxima:
      "Quando faltarem menos de 5 kg para a meta, você entra na Fase 3. Se a balança voltar a descer bem antes disso, siga com as condutas desta fase.",
    proteinaPorKg: { min: 1.6, max: 2.0 },
  },

  fase3: {
    id: "fase3",
    tag: "Fase 3",
    nome: "Recomposição",
    resumo: "Firmar o corpo e cuidar da pele e do rosto. Chegar no fim do tratamento bonita, não acabada.",
    oQueE: [
      "Nos últimos quilos o corpo tende a estagnar, e o foco muda de perder muito peso para ganhar músculo. Não espere a caneta acabar para mudar a estratégia: é agora que você evita a aparência de \"corpo de Ozempic\".",
      "A ideia é sinalizar ao corpo que ele deve usar a gordura que resta como energia para construir músculo. Com isso vêm a firmeza, a pele e o rosto que você quer ter no fim do tratamento.",
    ],
    condutas: [
      {
        titulo: "Proteína de 1,6 a 2,0 g por quilo",
        texto:
          "Exemplo: uma mulher de 75 kg precisa de 120 a 150 g por dia. 30 a 35 g nas três refeições principais e 15 a 30 g nos lanches.",
      },
      {
        titulo: "Carboidrato em volta do treino",
        texto:
          "Carboidrato complexo antes e depois do treino de força (70 a 90 g no almoço ou no jantar nesses dias). Nos dias sem treino de força, sem carboidrato ou metade da porção.",
      },
      {
        titulo: "Musculação com carga",
        texto:
          "Treino de força e hipertrofia é a prioridade desta fase. É ele que transforma perda de peso em corpo firme.",
      },
      {
        titulo: "Creatina e HMB todos os dias",
        texto: "Creatina 3 a 5 g e 3 g de HMB, com qualquer refeição.",
      },
      {
        titulo: "Pele, cabelo e unhas",
        texto:
          "Colágeno com biotina, zinco, vitamina C, silício e selênio ajuda. Mas nenhum suplemento substitui a meta de proteína batida todo dia.",
      },
      {
        titulo: "Ordem do prato",
        texto: "Vegetais primeiro, proteína depois, carboidrato por último.",
      },
    ],
    evitar: [
      "Continuar com a estratégia da Fase 1 até o fim",
      "Medir o resultado só pela balança: músculo pesa, fita métrica e fotos contam mais",
      "Pular o treino de força",
      "Esperar a caneta acabar para pensar na saída",
    ],
    proxima:
      "Quando você e o seu médico decidirem reduzir ou espaçar a dose, você entra na Fase 4.",
    proteinaPorKg: { min: 1.6, max: 2.0 },
  },

  fase4: {
    id: "fase4",
    tag: "Fase 4",
    nome: "Alta da Caneta",
    resumo: "O dia que você mais teme vira o mais planejado.",
    oQueE: [
      "À medida que a dose cai, a fome real volta e a sua fisiologia natural volta a trabalhar. O desmame não é só parar de aplicar: é uma transição do metabolismo, e é aqui que a maioria das mulheres recupera o peso.",
      "O objetivo é assumir aos poucos o controle que a caneta exercia: mais proteína, mais volume no prato com poucas calorias, alimentos que ajudam o seu próprio GLP-1 e treino mantido (ou aumentado).",
    ],
    condutas: [
      {
        titulo: "Comece pelo S.O.S. Intestino",
        texto:
          "Na primeira semana de redução ou espaçamento da dose, faça o protocolo de 3 dias de modulação intestinal. Ele prepara o intestino para ajudar na produção natural de GLP-1.",
      },
      {
        titulo: "Proteína de 1,8 a 2,2 g por quilo",
        texto: "A mais alta de todo o método. Recalcule sempre pelo seu peso atual.",
      },
      {
        titulo: "Volume, não calorias",
        texto:
          "Quando a fome voltar, aumente o prato com vegetais, fibras e frutas leves (melão, melancia, morango, chuchu, cogumelos, salada). A densidade calórica continua baixa.",
      },
      {
        titulo: "Alimentos que ajudam o seu GLP-1",
        texto:
          "Abacate, ovos, aveia, castanhas e psyllium (1 colher de sobremesa em água antes do almoço e do jantar). Azeite e abacate também sinalizam saciedade ao cérebro.",
      },
      {
        titulo: "Mastigue devagar",
        texto:
          "A caneta deixava a digestão lenta. Agora mastigue cada garfada 20 a 30 vezes: o sinal de saciedade leva cerca de 20 minutos para chegar.",
      },
      {
        titulo: "Não reduza o exercício",
        texto:
          "Mantenha a musculação e o aeróbio com boa frequência. Se puder, aumente.",
      },
    ],
    evitar: [
      "Parar a caneta de uma vez: a redução é gradual e sempre com o seu médico",
      "Voltar ao prato de antes do tratamento",
      "Confundir vontade de comer com fome (faça o teste do ovo cozido)",
      "Diminuir o treino porque o peso já chegou",
    ],
    proxima:
      "Quando o seu médico der alta da caneta, as condutas continuam: você entra no Depois da Caneta.",
    proteinaPorKg: { min: 1.8, max: 2.2 },
  },

  pausa: {
    id: "pausa",
    tag: "Atenção",
    nome: "Pausa não planejada",
    resumo: "Doses puladas ou espaçadas sem plano. Hora de proteger o que você conquistou.",
    oQueE: [
      "Espaçar ou pular doses por custo, falta do remédio ou efeito colateral é mais comum do que parece. O problema é que o corpo sente: a fome vai e volta, o intestino muda e o peso começa a oscilar, sem o preparo que uma saída planejada teria.",
      "A conduta aqui é a da saída da caneta, adiantada: proteína alta, prato com volume e treino mantido. E, principalmente, transformar essa pausa em um plano junto com o seu médico, seja para voltar, seja para sair de vez.",
    ],
    condutas: [
      {
        titulo: "Leve essa decisão ao seu médico",
        texto:
          "Conte que está espaçando ou pulando doses e por quê. Com ele, a pausa vira um plano: manter, reduzir aos poucos ou parar com segurança.",
      },
      {
        titulo: "Proteína de 1,8 a 2,2 g por quilo",
        texto:
          "A mesma da saída da caneta. É o que segura a saciedade e o músculo quando a fome volta sem aviso.",
      },
      {
        titulo: "Volume no prato",
        texto:
          "Quando a fome aparecer, aumente vegetais, folhas e frutas leves antes de aumentar o resto. Vegetais primeiro, proteína depois, carboidrato por último.",
      },
      {
        titulo: "Cuide do intestino",
        texto:
          "A oscilação da dose mexe com o intestino. Se ele travar ou inchar, faça o S.O.S. Intestino e mantenha água e fibras na meta.",
      },
      {
        titulo: "Mantenha a musculação",
        texto: "O músculo é o que sustenta o metabolismo quando o remédio está irregular.",
      },
    ],
    evitar: [
      "Compensar a dose pulada com dose maior depois",
      "Relaxar a alimentação na semana sem aplicação",
      "Esconder a pausa do seu médico",
      "Esperar o peso subir para agir",
    ],
    proxima:
      "Se você e o seu médico decidirem reduzir até parar, você segue na Fase 4. Se voltar à dose regular, refaça o Raio-X depois de 4 semanas.",
    proteinaPorKg: { min: 1.8, max: 2.2 },
  },

  pos: {
    id: "pos",
    tag: "Pós-caneta",
    nome: "Depois da Caneta",
    resumo: "Sustentar o resultado com o corpo trabalhando sozinho.",
    oQueE: [
      "Sem a medicação, a fome real voltou e o esvaziamento do estômago é o de antes. O risco agora é o reganho silencioso: um pouco mais a cada semana, sem perceber.",
      "Ainda dá tempo, mas a conduta é outra. Você segue a lógica da recomposição (proteína alta e treino de força) com as ferramentas do Guia Pós-Caneta para lidar com a fome que voltou.",
    ],
    condutas: [
      {
        titulo: "Proteína de 1,6 a 2,0 g por quilo",
        texto:
          "É ela que segura a saciedade e o músculo. Distribua 30 a 35 g nas refeições principais.",
      },
      {
        titulo: "Treino de força fixo na agenda",
        texto:
          "Músculo é o que mantém o metabolismo alto sem a caneta. Carboidrato nos dias de treino, em volta dele.",
      },
      {
        titulo: "Volume no prato",
        texto:
          "Metade do prato de folhas e legumes, depois a proteína e por último o carboidrato. Enche sem pesar.",
      },
      {
        titulo: "Fome física ou vontade?",
        texto:
          "O teste do ovo cozido: se você não comeria um ovo cozido agora, não é fome. Beba um copo grande de água e espere o sinal de fome de verdade.",
      },
      {
        titulo: "Pese-se uma vez por semana",
        texto:
          "No mesmo dia e horário. Subiu 2 kg? É o sinal para reforçar as condutas, não para desistir.",
      },
    ],
    evitar: [
      "Voltar a comer como antes do tratamento",
      "Largar o treino de força",
      "Esperar reganhar muito para agir",
      "Voltar à caneta por conta própria: isso é conversa com o seu médico",
    ],
    proxima:
      "Se o peso voltar a subir, a conduta é a da Fase 2 (Ponto de Virada), com proteína e treino no centro.",
    proteinaPorKg: { min: 1.6, max: 2.0 },
  },
};

// Blocos de "atenção extra", um por incômodo marcado. Apontam para o pilar de
// Blindagem (protocolos por sintoma) e de Mentalidade.
export const INCOMODOS: Record<Incomodo, { rotulo: string; titulo: string; texto: string }> = {
  enjoo: {
    rotulo: "Enjoo ou náusea",
    titulo: "Enjoo",
    texto:
      "Siga o protocolo 48h de Ouro nas 24 horas antes e nas 24 depois de cada aplicação. Refeições menores, sem líquido junto, e chá de gengibre ou de hortelã ajudam.",
  },
  intestino: {
    rotulo: "Intestino preso ou gases",
    titulo: "Intestino",
    texto:
      "Comece pelo S.O.S. Intestino (3 dias de modulação intestinal) antes do cardápio. Água na meta, fibras (psyllium, chia, linhaça) e chá de hibisco.",
  },
  cansaco: {
    rotulo: "Cansaço ou falta de energia",
    titulo: "Cansaço",
    texto:
      "Quase sempre é proteína ou água abaixo da meta. Confira as duas, tome eletrólitos ao acordar e mantenha a creatina todos os dias.",
  },
  fraqueza: {
    rotulo: "Fraqueza ou perda de força",
    titulo: "Fraqueza",
    texto:
      "Pode ser músculo indo embora junto com o peso. Proteína no topo da faixa todos os dias, creatina e musculação com carga. Se vier com tontura, confira a água e os eletrólitos.",
  },
  cabelo: {
    rotulo: "Queda de cabelo",
    titulo: "Queda de cabelo",
    texto:
      "Veja o protocolo de queda de cabelo da Blindagem. A base é a meta de proteína batida todo dia; biotina, zinco e vitamina C ajudam. Se puder, peça ferritina nos exames.",
  },
  flacidez: {
    rotulo: "Flacidez ou pele caída",
    titulo: "Flacidez",
    texto:
      "Proteína alta e musculação com carga são o que firmam o corpo. As condutas da Recomposição (Fase 3) valem para você mesmo antes de chegar lá.",
  },
  fome: {
    rotulo: "A fome ou a vontade de doce voltaram",
    titulo: "Fome voltando",
    texto:
      "Veja o pilar de Mentalidade. Separe fome física de vontade (teste do ovo cozido) e aumente o volume do prato com vegetais antes de aumentar as calorias.",
  },
};

// Ajustes por condição, prometidos na FAQ da VSL ("o Raio-X ajusta o método ao
// seu caso"). PROVISÓRIOS: a Michelly reescreve na validação.
export const CONDICOES: Record<Condicao, { rotulo: string; titulo: string; texto: string }> = {
  tireoide: {
    rotulo: "Hipotireoidismo",
    titulo: "Hipotireoidismo",
    texto:
      "O ritmo de perda tende a ser mais lento: compare você com você mesma, não com outras mulheres. Tome o remédio da tireoide em jejum e longe do café e dos suplementos (cálcio, ferro, polivitamínico).",
  },
  menopausa: {
    rotulo: "Menopausa ou pré-menopausa",
    titulo: "Menopausa",
    texto:
      "Nessa fase o músculo se perde mais rápido. Deixe a proteína no topo da faixa, faça musculação sem falta e cuide do sono: ele pesa na fome e na balança.",
  },
  insulina: {
    rotulo: "Resistência à insulina, pré-diabetes ou diabetes",
    titulo: "Resistência à insulina",
    texto:
      "A ordem do prato é ainda mais importante para você: vegetais, proteína e carboidrato por último, de preferência nos dias de treino. Se usa remédio para a glicose, alinhe o jejum com o seu médico.",
  },
  bariatrica: {
    rotulo: "Já fiz bariátrica",
    titulo: "Bariátrica",
    texto:
      "Com o estômago menor, divida a proteína em mais refeições pequenas e use o suplemento proteico para chegar na meta. Mantenha as vitaminas que a sua equipe indicou.",
  },
};
