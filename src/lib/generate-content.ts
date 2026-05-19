import type {
  ContentFormData,
  GeneratedContent,
  StoriesContent,
  PostContent,
  CarrosselContent,
  ReelsContent,
  CalendarContent,
  QuickIdeasContent,
} from '@/types'

const nicheLabels: Record<string, string> = {
  'corretor-imoveis': 'corretor de imóveis',
  'imobiliaria': 'imobiliária',
  'personal-trainer': 'personal trainer',
  'nutricionista': 'nutricionista',
  'clinica-estetica': 'clínica de estética',
  'loja-roupas': 'loja de roupas',
  'social-media': 'social media',
  'mentor-infoprodutor': 'mentor/infoprodutor',
  'barbearia': 'barbearia',
  'restaurante': 'restaurante',
  'prestador-servico': 'prestador de serviço',
  'outro': 'empreendedor',
}

function getNicheLabel(niche: string): string {
  return nicheLabels[niche] || 'empreendedor'
}

function getCtaByNiche(niche: string, product: string): string {
  const ctas: Record<string, string> = {
    'corretor-imoveis': `Me chama no direct com a palavra IMÓVEL que eu te mando as opções de ${product || 'imóvel'}.`,
    'imobiliaria': `Chama a gente no direct com QUERO COMPRAR e nosso time te atende agora.`,
    'personal-trainer': `Me manda uma mensagem com a palavra TREINO e te mando um plano personalizado.`,
    'nutricionista': `Me chama no direct com SAÚDE que te explico como funciona a consultoria.`,
    'clinica-estetica': `Manda BELEZA no direct e receba nossa tabela de procedimentos + promoção especial.`,
    'loja-roupas': `Chama no direct com QUERO VER que te mando o catálogo completo.`,
    'social-media': `Me manda CRESCER no direct e te explico como posso transformar seu Instagram.`,
    'mentor-infoprodutor': `Manda QUERO EVOLUIR no direct e te conto os detalhes do programa.`,
    'barbearia': `Chama no direct ou clica no link da bio para agendar seu horário agora.`,
    'restaurante': `Acesse o link da bio para fazer seu pedido ou reserva agora.`,
    'prestador-servico': `Me chama no direct ou WhatsApp para solicitar um orçamento sem compromisso.`,
    'outro': `Me chama no direct para saber mais sobre ${product || 'nosso serviço'}.`,
  }
  return ctas[niche] || `Entre em contato pelo direct para saber mais sobre ${product || 'nosso produto'}.`
}

function generateStoriesContent(data: ContentFormData): StoriesContent {
  const nicheLabel = getNicheLabel(data.niche)
  const cta = getCtaByNiche(data.niche, data.product)

  const storiesTemplates: Record<string, StoriesContent> = {
    'corretor-imoveis': {
      format: 'stories',
      stories: [
        {
          number: 1,
          text: 'Você sabia que a maioria das pessoas erra na hora de escolher um imóvel por não saber o que perguntar? 🤔 Responde aqui: você já tentou comprar um imóvel e desistiu no meio do processo?',
          objective: 'Interação e identificação com o problema',
          visualSuggestion: 'Fundo com foto de imóvel bonito, enquete com Sim/Não',
        },
        {
          number: 2,
          text: 'O maior erro de quem está comprando o primeiro imóvel é não calcular os custos extras. IPTU, condomínio, escritura, registro... isso pode pesar mais de 10% do valor do imóvel.',
          objective: 'Educar sobre problema comum',
          visualSuggestion: 'Slide com lista de custos ocultos, design limpo',
        },
        {
          number: 3,
          text: 'Minha dica de ouro: antes de assinar qualquer contrato, visite o imóvel em 3 horários diferentes (manhã, tarde e noite). Você vai descobrir coisas que ninguém te conta.',
          objective: 'Entregar valor com dica prática',
          visualSuggestion: 'Foto do corretor em frente a imóvel, tom de bastidor',
        },
        {
          number: 4,
          text: 'Hoje tive uma reunião com um casal que estava sem esperança de encontrar o imóvel ideal... e em 2 semanas já vão assinar o contrato! Ajudar famílias a realizar esse sonho é o que me move todos os dias. 🏡',
          objective: 'Humanizar e gerar conexão emocional',
          visualSuggestion: 'Foto do corretor, depoimento ou bastidor de atendimento',
        },
        {
          number: 5,
          text: `Se você está pensando em comprar, vender ou alugar um imóvel, não precisa fazer isso sozinho. Eu cuidarei de tudo por você. ${cta}`,
          objective: 'CTA para direct',
          visualSuggestion: 'Foto profissional, destaque para a palavra de ativação do direct',
          cta,
        },
      ],
    },
    'personal-trainer': {
      format: 'stories',
      stories: [
        {
          number: 1,
          text: 'Você treina há meses e não vê resultado? 🤔 Enquete: você acha que o problema é a dieta ou o treino?',
          objective: 'Interação e identificação',
          visualSuggestion: 'Fundo com equipamentos de treino, enquete',
        },
        {
          number: 2,
          text: 'A verdade que poucos personal trainers te contam: sem periodização adequada, você vai ficar estagnado indefinidamente. Não é falta de esforço — é falta de método.',
          objective: 'Educar e posicionar como especialista',
          visualSuggestion: 'Slide informativo com texto grande e impactante',
        },
        {
          number: 3,
          text: 'Dica do dia: os 10 minutos ANTES do treino importam tanto quanto o treino em si. Aquecimento ativo, mobilidade e foco mental mudam completamente seus resultados.',
          objective: 'Entrega de valor',
          visualSuggestion: 'Vídeo ou foto mostrando exercício de aquecimento',
        },
        {
          number: 4,
          text: 'Resultado real do meu aluno João: em 3 meses de treino personalizado, perdeu 12kg sem passar fome e sem ficar horas na academia. Método que funciona para a sua rotina. 💪',
          objective: 'Prova social',
          visualSuggestion: 'Antes e depois (com autorização), ou texto com resultado',
        },
        {
          number: 5,
          text: `Pronto para transformar seu corpo com um treino feito para VOCÊ? ${cta}`,
          objective: 'CTA',
          visualSuggestion: 'Foto motivacional, destaque para a palavra de ativação',
          cta,
        },
      ],
    },
  }

  if (storiesTemplates[data.niche]) {
    return storiesTemplates[data.niche]
  }

  return {
    format: 'stories',
    stories: [
      {
        number: 1,
        text: `Você já teve algum problema com ${data.product || nicheLabel}? 🤔 Responde aqui na enquete:`,
        objective: 'Interação e identificação',
        visualSuggestion: `Fundo colorido com enquete Sim/Não sobre ${data.product}`,
      },
      {
        number: 2,
        text: `A maioria das pessoas não sabe que ${data.product || 'esse serviço'} pode resolver exatamente ${data.goal === 'vender' ? 'o problema que você tem' : 'essa dificuldade'}. E o motivo é simples...`,
        objective: 'Despertar curiosidade',
        visualSuggestion: 'Slide escuro com texto em destaque',
      },
      {
        number: 3,
        text: `Aqui vai uma dica que poucos profissionais de ${nicheLabel} compartilham: ${data.extraNotes || 'o segredo está na consistência e na personalização para o seu perfil'}. Guarda esse story!`,
        objective: 'Entregar valor real',
        visualSuggestion: 'Fundo neutro, texto em destaque, ícone de dica',
      },
      {
        number: 4,
        text: `Bastidor: hoje atendi ${data.audience || 'um cliente'} que estava ${data.goal === 'vender' ? 'em dúvida se ia comprar' : 'sem saber por onde começar'} e conseguimos resolver tudo juntos. Adoro esses resultados! 💪`,
        objective: 'Prova social e bastidor',
        visualSuggestion: 'Foto ou vídeo do ambiente de trabalho',
      },
      {
        number: 5,
        text: `Se você quer ${data.goal === 'vender' ? 'comprar' : 'saber mais sobre'} ${data.product || 'o que ofereço'}, me chama agora. ${cta}`,
        objective: 'CTA direto',
        visualSuggestion: 'CTA visualmente destacado, seta apontando para o direct',
        cta,
      },
    ],
  }
}

function generatePostContent(data: ContentFormData): PostContent {
  const nicheLabel = getNicheLabel(data.niche)
  const cta = getCtaByNiche(data.niche, data.product)

  const hashtagMap: Record<string, string[]> = {
    'corretor-imoveis': ['#corretor', '#imóveis', '#sonhodacasamédia', '#mercadoimobiliario', '#comprarcasa', '#apartamento', '#investimentoimobiliario', '#realtor', '#casaprópria', '#imovel'],
    'personal-trainer': ['#personaltrainer', '#treino', '#fitness', '#saúde', '#academia', '#musculação', '#vidaativa', '#transformação', '#treinopersonal', '#exercício'],
    'nutricionista': ['#nutricionista', '#alimentaçãosaudável', '#saúde', '#nutrição', '#dieta', '#emagrecimento', '#vidasaudável', '#alimentação', '#comerbem', '#bemestar'],
    'clinica-estetica': ['#estetica', '#beleza', '#autocuidado', '#procedimentoestetico', '#skincare', '#belezafeminina', '#aesthetic', '#tratamentoestetico', '#pele', '#belezaetransformação'],
    'loja-roupas': ['#moda', '#roupa', '#lookdodia', '#fashion', '#estilo', '#modafeminina', '#ootd', '#loja', '#novacoleção', '#tendência'],
    'social-media': ['#socialmedia', '#marketing', '#instagram', '#marketingdigital', '#empreendedorismo', '#conteudo', '#crescimentonoinstagram', '#agenciadigital', '#gestaoderedes', '#engajamento'],
    'barbearia': ['#barbearia', '#barber', '#cabelo', '#barba', '#barbershop', '#corte', '#cabeleireiro', '#estilo', '#grooming', '#barbeirosbrasil'],
    'restaurante': ['#restaurante', '#gastronomia', '#comida', '#food', '#chef', '#foodlover', '#alimentação', '#almoço', '#jantar', '#culinária'],
    'mentor-infoprodutor': ['#infoprodutor', '#mentoria', '#empreendedorismo', '#marketingdigital', '#renda', '#negociosonline', '#liberdadefinanceira', '#cursoonline', '#mentor', '#transformação'],
  }

  const hashtags = hashtagMap[data.niche] || ['#empreendedorismo', '#negociolocal', '#instagram', '#marketing', '#conteudo', '#vendas', '#serviço', '#qualidade', '#resultado', '#crescimento']

  const titles: Record<string, string> = {
    'vender': `Por que ${data.product || 'nosso serviço'} é a melhor escolha para ${data.audience || 'você'}`,
    'divulgar': `Conheça ${data.product || 'o que fazemos'} e como podemos transformar sua realidade`,
    'engajar': `Você concorda com isso? (Sobre ${data.product || nicheLabel})`,
    'educar': `${data.audience || 'Você'} precisa saber disso sobre ${data.product || nicheLabel}`,
    'motivar': `Isso que está te impedindo de ter resultado com ${data.product || nicheLabel}`,
    'gerar-directs': `Antes de contratar qualquer ${nicheLabel}, leia isso`,
    'quebrar-objecoes': `"É caro demais." Preciso responder isso agora.`,
    'atrair-seguidores': `Se você é ${data.audience || 'alguém que quer crescer'}, esse post é para você`,
  }

  const captions: Record<string, string> = {
    'vender': `Hoje quero te falar sobre algo que muitas pessoas deixam passar sem perceber.\n\nSe você está buscando ${data.product || 'uma solução'} e ainda não encontrou o resultado esperado, posso te dizer: o problema não é você.\n\nÉ que a maioria das opções no mercado não foi feita para ${data.audience || 'quem realmente precisa'}.\n\nO que eu ofereço é diferente porque:\n✅ Foco no que realmente funciona para você\n✅ Atendimento personalizado do início ao fim\n✅ Resultado real, sem enrolação\n\nJá trabalhei com dezenas de ${data.audience || 'clientes'} que pensavam que nunca iam conseguir. E hoje eles têm resultados que nem imaginavam.\n\nQuer ser o próximo? ${cta}`,
    'educar': `Ninguém te contou isso sobre ${data.product || nicheLabel} — mas eu vou te contar agora.\n\n🔹 Ponto 1: A maioria das pessoas começa errado. Pulam etapas importantes e depois reclamam que não funciona.\n\n🔹 Ponto 2: Consistência vale mais que intensidade. Você não precisa fazer muito — precisa fazer certo, todo dia.\n\n🔹 Ponto 3: O acompanhamento profissional acelera qualquer processo em pelo menos 3x.\n\nSe você quer realmente mudar sua realidade com ${data.product || nicheLabel}, o caminho começa com as escolhas certas.\n\nSalva esse post para relembrar quando precisar. E se quiser aprofundar: ${cta}`,
    'engajar': `Preciso da sua opinião sobre isso 👇\n\nMuita gente me pergunta: "Vale a pena investir em ${data.product || nicheLabel}?"\n\nE minha resposta sempre é: depende do que você está disposto a fazer com isso.\n\nAlgumas pessoas chegam buscando resultado rápido, sem consistência. Outras chegam com paciência e determinação — e saem com resultados reais.\n\nQual perfil é o seu?\n\n👉 Comenta aqui: você já tentou e desistiu, ou ainda não começou?\n\nQuero entender melhor para te ajudar da forma certa. ${cta}`,
    'motivar': `Sabe o que separa quem consegue resultado de quem fica só tentando?\n\nNão é talento. Não é sorte. Não é dinheiro.\n\nÉ a decisão de não parar.\n\nCada vez que você sentiu vontade de desistir e não desistiu, você deu um passo que a maioria não dá.\n\n${data.extraNotes || 'O progresso nem sempre é visível, mas está acontecendo.'}\n\nContinua. O resultado vem para quem persiste. 💪\n\n${cta}`,
    'divulgar': `Quero te apresentar algo que fiz pensando especificamente em ${data.audience || 'pessoas como você'}.\n\n${data.product || 'O que ofereço'} surgiu depois de anos trabalhando com ${nicheLabel} e percebendo que faltava uma solução que realmente entregasse o que promete.\n\nComo funciona:\n🎯 Diagnóstico personalizado do seu caso\n🎯 Estratégia sob medida para seu perfil\n🎯 Acompanhamento próximo até o resultado\n\nEssa semana tenho ${Math.floor(Math.random() * 3) + 2} vagas disponíveis. ${cta}`,
    'gerar-directs': `Antes de contratar qualquer ${nicheLabel}, te faço 3 perguntas:\n\n1️⃣ Ele/Ela tem cases reais de resultado?\n2️⃣ O atendimento é personalizado ou genérico?\n3️⃣ Você consegue falar diretamente com o profissional?\n\nSe não souber responder as 3, você está prestes a desperdiçar dinheiro.\n\nEu sou ${nicheLabel} e tenho resposta para todas as três. ${cta}`,
    'quebrar-objecoes': `"Isso é caro demais."\n\nJá ouvi isso dezenas de vezes. E sempre respondo a mesma coisa:\n\nCaro em relação a quê?\n\nEm relação a continuar com o mesmo problema por mais 1 ano? Em relação a perder tempo e dinheiro com soluções que não funcionam?\n\nO preço de não resolver um problema sempre é maior que o investimento para resolvê-lo.\n\n${data.product || 'O que ofereço'} não é despesa. É o atalho para o resultado que você já deveria ter. ${cta}`,
    'atrair-seguidores': `Se você é ${data.audience || 'alguém que quer crescer'}, esse perfil foi feito para você.\n\nAqui você vai encontrar:\n📌 Conteúdo prático sobre ${nicheLabel}\n📌 Dicas que funcionam no mundo real\n📌 Bastidor do meu trabalho\n📌 Resultados reais de clientes\n\nSalva esse post, me segue e ativa o sininho 🔔 para não perder nenhuma publicação.\n\nBem-vindo(a) ao lugar certo! ${cta}`,
  }

  return {
    format: 'post',
    title: titles[data.goal] || `Tudo sobre ${data.product || nicheLabel} que você precisa saber`,
    caption: captions[data.goal] || captions['vender'],
    cta,
    hashtags,
    imageSuggestion: `Foto profissional relacionada a ${nicheLabel}, com ${data.tone === 'descontraido' ? 'ambiente descontraído e cores vibrantes' : 'composição limpa e profissional'}. Inclua texto sobreposto com o título do post.`,
  }
}

function generateCarrosselContent(data: ContentFormData): CarrosselContent {
  const nicheLabel = getNicheLabel(data.niche)
  const cta = getCtaByNiche(data.niche, data.product)

  const goalTitles: Record<string, string[]> = {
    'vender': [
      `Por que ${data.product || nicheLabel} vai mudar sua vida`,
      'O problema que você ainda não resolveu',
      'Por que as outras opções não funcionam',
      'O que nossos clientes dizem',
      'Como funciona na prática',
      'Dê o primeiro passo agora',
    ],
    'educar': [
      `O que você precisa saber sobre ${nicheLabel}`,
      'Erro #1: Começar sem planejamento',
      'Erro #2: Não ter consistência',
      'Erro #3: Esperar resultado rápido',
      'O que realmente funciona',
      'Quer aprender mais?',
    ],
    'engajar': [
      'Você concorda com isso?',
      'A realidade que ninguém fala',
      'O que os resultados mostram',
      'O que os especialistas dizem',
      'E você, o que acha?',
      'Me conta nos comentários',
    ],
    'motivar': [
      'Tudo começa com uma decisão',
      'O que separa quem consegue de quem não consegue',
      'A jornada não é fácil, mas vale a pena',
      'Resultados reais de quem persistiu',
      'Seu momento é agora',
      'Dê o próximo passo',
    ],
    'quebrar-objecoes': [
      '"Não tenho tempo para isso"',
      '"É muito caro para mim"',
      '"Não sei se vai funcionar para mim"',
      '"Vou deixar para depois"',
      'A verdade por trás de cada objeção',
      'Chega de esperar o momento perfeito',
    ],
  }

  const slideTitles = goalTitles[data.goal] || goalTitles['vender']

  const slideTexts = [
    `Quando se trata de ${data.product || nicheLabel}, a maioria das pessoas não sabe por onde começar. Neste carrossel, vou te mostrar tudo que você precisa.`,
    `${data.audience || 'Muitas pessoas'} chegam até mim com o mesmo problema: já tentaram de tudo mas não conseguiram o resultado esperado com ${data.product || nicheLabel}.`,
    `A verdade é que as soluções genéricas não funcionam. Cada pessoa precisa de uma abordagem personalizada — e é exatamente isso que ofereço como ${nicheLabel}.`,
    `"Depois de trabalhar com ${data.product || nicheLabel}, mudei completamente minha visão sobre isso. Os resultados vieram em menos tempo do que esperava." — Cliente real`,
    `O processo é simples e transparente: 1️⃣ Diagnóstico inicial 2️⃣ Plano personalizado 3️⃣ Execução com acompanhamento 4️⃣ Resultados mensuráveis`,
    `Não deixe para amanhã o que pode transformar sua realidade hoje. ${cta}`,
  ]

  return {
    format: 'carrossel',
    slides: slideTitles.map((title, i) => ({
      number: i + 1,
      title,
      text: slideTexts[i] || `Conteúdo sobre ${data.product || nicheLabel} para ${data.audience || 'você'}.`,
      cta: i === 5 ? cta : undefined,
    })),
  }
}

function generateReelsContent(data: ContentFormData): ReelsContent {
  const nicheLabel = getNicheLabel(data.niche)
  const cta = getCtaByNiche(data.niche, data.product)

  const hooks: Record<string, string> = {
    'vender': `Se você ainda não tem ${data.product || nicheLabel} na sua vida, esse vídeo vai mudar sua opinião completamente.`,
    'educar': `Para de fazer isso agora — está te custando resultado com ${data.product || nicheLabel}.`,
    'motivar': `Você está a uma decisão de transformar completamente sua relação com ${data.product || nicheLabel}.`,
    'engajar': `Alguém precisava falar sobre isso. E esse alguém sou eu.`,
    'quebrar-objecoes': `"Isso não é para mim." Se você já pensou isso sobre ${data.product || nicheLabel}, fica até o fim.`,
    'gerar-directs': `Não contrate nenhum ${nicheLabel} sem ver esse vídeo antes.`,
    'divulgar': `Em 60 segundos vou te mostrar por que ${data.product || nicheLabel} é exatamente o que você precisava.`,
    'atrair-seguidores': `Se você quer resultado real com ${nicheLabel}, segue esse perfil agora.`,
  }

  return {
    format: 'reels',
    hook: hooks[data.goal] || `Tudo que você precisa saber sobre ${data.product || nicheLabel} em menos de 60 segundos.`,
    scenes: [
      {
        scene: 1,
        spokenText: `Você sabia que a maioria das pessoas que tentam ${data.goal === 'vender' ? 'comprar' : 'usar'} ${data.product || nicheLabel} erra logo no começo?`,
        onScreenText: `❌ O erro mais comum de quem busca ${data.product || nicheLabel}`,
      },
      {
        scene: 2,
        spokenText: `O problema não é falta de vontade. É que ninguém te ensinou o caminho certo. E hoje vou te mostrar os 3 passos que realmente funcionam.`,
        onScreenText: `✅ Os 3 passos que realmente funcionam`,
      },
      {
        scene: 3,
        spokenText: `Primeiro: você precisa entender qual é o seu objetivo real. Não o que você acha que quer — o que você realmente precisa para sua situação específica.`,
        onScreenText: `Passo 1: Defina seu objetivo real`,
      },
      {
        scene: 4,
        spokenText: `Segundo: busque um profissional de ${nicheLabel} que entenda do seu perfil específico. Solução genérica não dá resultado específico.`,
        onScreenText: `Passo 2: Busque orientação especializada`,
      },
      {
        scene: 5,
        spokenText: `Terceiro, e mais importante: seja consistente. Resultado real leva tempo, mas com o método certo, chega muito mais rápido.`,
        onScreenText: `Passo 3: Consistência é o diferencial`,
      },
      {
        scene: 6,
        spokenText: `Se você quer dar o primeiro passo agora, ${cta}`,
        onScreenText: `👇 Me chama no direct agora`,
      },
    ],
    cta,
  }
}

function generateCalendarContent(data: ContentFormData): CalendarContent {
  const nicheLabel = getNicheLabel(data.niche)
  const days = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']

  const themes = [
    {
      theme: 'Conteúdo educativo',
      format: 'Carrossel',
      objective: 'Educar',
      caption: `Você sabia isso sobre ${data.product || nicheLabel}? Salva esse post para não esquecer!`,
    },
    {
      theme: 'Bastidor/Rotina',
      format: 'Stories',
      objective: 'Humanizar',
      caption: `Um dia na vida de um ${nicheLabel}: te mostro como é o trabalho por dentro!`,
    },
    {
      theme: 'Prova social',
      format: 'Post',
      objective: 'Gerar confiança',
      caption: `Resultado real de cliente! Veja a transformação que aconteceu em apenas 30 dias...`,
    },
    {
      theme: 'Dica rápida',
      format: 'Reels',
      objective: 'Engajar',
      caption: `3 erros que todo iniciante comete com ${data.product || nicheLabel} (e como evitar)`,
    },
    {
      theme: 'Oferta ou promoção',
      format: 'Post + Stories',
      objective: 'Vender',
      caption: `Hoje só: condição especial para quem me chamar no direct com a palavra QUERO!`,
    },
    {
      theme: 'Conteúdo motivacional',
      format: 'Post',
      objective: 'Inspirar',
      caption: `A jornada de cada cliente é única. Mas o resultado é sempre o mesmo: transformação.`,
    },
    {
      theme: 'Interação com o público',
      format: 'Stories com enquete',
      objective: 'Engajamento',
      caption: `Preciso da sua opinião: qual conteúdo você quer ver mais aqui?`,
    },
  ]

  return {
    format: 'calendario-semanal',
    days: days.map((day, i) => ({
      day,
      theme: themes[i].theme,
      format: themes[i].format,
      caption: themes[i].caption,
      objective: themes[i].objective,
    })),
  }
}

function generateQuickIdeasContent(data: ContentFormData): QuickIdeasContent {
  const nicheLabel = getNicheLabel(data.niche)

  const ideasMap: Record<string, string[]> = {
    'corretor-imoveis': [
      'Carrossel: "5 perguntas que todo comprador de imóvel precisa fazer antes de assinar o contrato"',
      'Reels: "Tour pelo imóvel mais bonito que eu já vendi"',
      'Post: "Mito ou verdade: comprar imóvel na planta é sempre mais barato?"',
      'Stories com enquete: "Qual é seu maior medo na hora de comprar um imóvel?"',
      'Post educativo: "O que é ITBI e como calcular antes de fechar negócio"',
      'Carrossel: "Como sair do aluguel em 12 meses com planejamento"',
      'Reels: "3 coisas que ninguém te conta sobre financiamento imobiliário"',
      'Post: Depoimento de cliente que realizou o sonho da casa própria',
      'Stories: "Bastidor: como é meu dia quando tenho plantão de vendas"',
      'Carrossel: "Bairros com melhor custo-benefício na sua cidade"',
      'Reels: "Erro clássico de quem vai visitar imóvel pela primeira vez"',
      'Post motivacional: "Seu imóvel dos sonhos existe. Você só precisa de alguém para te ajudar a encontrar."',
      'Stories: Quiz sobre tipos de imóvel',
      'Carrossel: "Imóvel na praia x imóvel na cidade: qual vale mais como investimento?"',
      'Reels: "Como eu ajudei uma família a sair do aluguel em menos de 60 dias"',
    ],
    'personal-trainer': [
      'Reels: "Treino de 20 minutos que queima mais que 1 hora de esteira"',
      'Carrossel: "Por que você não está vendo resultado mesmo treinando todos os dias"',
      'Post: "Mito: preciso ir à academia para ter resultado. Realidade:"',
      'Stories: Enquete "Qual é sua maior dificuldade com os treinos?"',
      'Reels: "Forma correta do agachamento (erro que todo mundo comete)"',
      'Carrossel: "Plano de treino para quem tem só 3 dias livres na semana"',
      'Post: Transformação de cliente com antes e depois',
      'Stories: "Bastidor do meu treino hoje"',
      'Carrossel: "5 alimentos que você deve comer antes do treino"',
      'Reels: "Circuito em casa para dias que você não pode ir à academia"',
      'Post motivacional: "Progresso, não perfeição"',
      'Stories: Quiz sobre hábitos saudáveis',
      'Carrossel: "Como dormir melhor para ter mais resultado no treino"',
      'Reels: "Demonstração: exercício substituto para quem tem dor no joelho"',
      'Post educativo: "Por que você precisa de acompanhamento profissional para treinar"',
    ],
    'nutricionista': [
      'Carrossel: "5 trocas alimentares que aceleram o emagrecimento"',
      'Reels: "O que eu como em um dia de trabalho intenso (nutricionista conta tudo)"',
      'Post: "Mito: você precisa cortar carboidrato para emagrecer?"',
      'Stories com enquete: "Qual é sua maior dificuldade na alimentação?"',
      'Carrossel: "Como montar um prato equilibrado em menos de 10 minutos"',
      'Reels: "3 erros que sabotam o emagrecimento mesmo comendo saudável"',
      'Post educativo: "O que é déficit calórico e por que ele importa"',
      'Stories: "Bastidor: preparando minha marmita semanal"',
      'Carrossel: "Alimentos que parecem saudáveis mas sabotam sua dieta"',
      'Reels: "Receita rápida e nutritiva para o dia a dia"',
      'Post: Resultado de paciente após consulta e plano alimentar',
      'Stories: Quiz sobre mitos da alimentação saudável',
      'Carrossel: "Como ler rótulos de alimentos: o guia prático"',
      'Reels: "Por que você sente fome 1 hora depois de comer"',
      'Post motivacional: "Saúde não é punição — é o maior presente que você pode se dar"',
    ],
  }

  const genericIdeas = [
    `Carrossel: "5 coisas que todo ${data.audience || 'cliente'} precisa saber sobre ${data.product || nicheLabel}"`,
    `Reels: "Bastidor: como é um dia de trabalho como ${nicheLabel}"`,
    `Post: Depoimento real de cliente satisfeito com ${data.product || nicheLabel}`,
    `Stories com enquete: "Qual é sua maior dúvida sobre ${data.product || nicheLabel}?"`,
    `Carrossel: "Erros comuns ao buscar ${data.product || nicheLabel} (e como evitar)"`,
    `Reels: "Como funciona o processo de trabalho com ${nicheLabel}"`,
    `Post educativo: "Tudo que você precisa saber antes de contratar um ${nicheLabel}"`,
    `Stories: Quiz sobre ${data.product || nicheLabel}`,
    `Carrossel: "Por que investir em ${data.product || nicheLabel} vale a pena"`,
    `Reels: "Transformação real: antes e depois de trabalhar com ${nicheLabel}"`,
    `Post motivacional relacionado ao nicho de ${nicheLabel}`,
    `Stories: "Bastidor do meu trabalho hoje"`,
    `Carrossel: "Perguntas frequentes sobre ${data.product || nicheLabel}"`,
    `Reels: "Mito ou verdade sobre ${data.product || nicheLabel}"`,
    `Post: "O que me diferencia de outros ${nicheLabel}s do mercado"`,
  ]

  const ideas = ideasMap[data.niche] || genericIdeas

  return {
    format: 'ideias-rapidas',
    ideas: ideas.map((idea, i) => ({ number: i + 1, idea })),
  }
}

export function generateContent(data: ContentFormData): GeneratedContent {
  switch (data.format) {
    case 'stories':
      return generateStoriesContent(data)
    case 'post':
      return generatePostContent(data)
    case 'carrossel':
      return generateCarrosselContent(data)
    case 'reels':
      return generateReelsContent(data)
    case 'calendario-semanal':
      return generateCalendarContent(data)
    case 'ideias-rapidas':
      return generateQuickIdeasContent(data)
    default:
      return generatePostContent(data)
  }
}
