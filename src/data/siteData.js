import { createWhatsAppUrl } from '../utils/whatsapp'

export const brand = {
  name: 'Yasmin Vitória Beauty',
  location: 'Divinópolis/MG',
  slogan: 'Sua beleza natural, cuidada com delicadeza.',
  whatsappPhone: '5537999999999',
  whatsappMessage: 'Olá, Yasmin! Gostaria de agendar um atendimento.',
  instagramUrl:
    'https://www.instagram.com/yasminvitoria.beauty?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
}

export const links = {
  whatsapp: createWhatsAppUrl({
    phone: brand.whatsappPhone,
    message: brand.whatsappMessage,
  }),
  instagram: brand.instagramUrl,
  services: '#servicos',
  results: '#resultados',
  faq: '#duvidas',
  booking: '#agendar',
}

export const developerCredit = {
  label: 'Desenvolvido por',
  name: 'Thiago Carvalho',
  image: '/assets/developer/thiago-carvalho.jpg',
  instagramHandle: '@thiagocarvalho.dev',
  instagramUrl:
    'https://www.instagram.com/thiagocarvalho.dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  email: 'euthiagobusiness@gmail.com',
}

export const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Agendar', href: '#agendar' },
]

export const ctas = {
  whatsapp: {
    label: 'Agendar pelo WhatsApp',
    href: links.whatsapp,
    ariaLabel: 'Agendar atendimento pelo WhatsApp',
    external: true,
  },
  booking: {
    label: 'Quero agendar meu atendimento',
    href: links.whatsapp,
    ariaLabel: 'Quero agendar meu atendimento pelo WhatsApp',
    external: true,
  },
  services: {
    label: 'Conhecer serviços',
    href: links.services,
  },
  results: {
    label: 'Quero um resultado assim',
    href: links.whatsapp,
    ariaLabel: 'Quero um resultado assim pelo WhatsApp',
    external: true,
  },
  doubts: {
    label: 'Tirar dúvidas no WhatsApp',
    href: links.whatsapp,
    ariaLabel: 'Tirar dúvidas no WhatsApp',
    external: true,
  },
}

export const aboutCards = [
  {
    title: 'Atendimento personalizado',
    text: 'Escuta atenta antes de indicar qualquer procedimento.',
    icon: 'heart',
  },
  {
    title: 'Resultado natural',
    text: 'Realce dos seus traços com equilíbrio e leveza.',
    icon: 'shield',
  },
  {
    title: 'Experiência acolhedora',
    text: 'Cuidado do começo ao fim, com orientação clara.',
    icon: 'smile',
  },
]

export const services = [
  {
    title: 'Design simples',
    icon: 'sparkle',
    benefit: 'Olhar mais harmônico para o dia a dia.',
    description:
      'Modelagem personalizada das sobrancelhas para valorizar o formato natural do rosto e deixar o olhar mais harmônico.',
  },
  {
    title: 'Design com henna',
    icon: 'leaf',
    benefit: 'Definição suave sem pesar sua expressão.',
    description:
      'Modelagem com aplicação de henna para preencher falhas, realçar o olhar e trazer mais definição de forma natural.',
  },
  {
    title: 'Brow Lamination',
    icon: 'wand',
    benefit: 'Fios alinhados com aparência leve e natural.',
    description:
      'Procedimento que alinha os fios das sobrancelhas, proporcionando um efeito mais volumoso, organizado e natural.',
  },
  {
    title: 'Brow Lamination + coloração',
    icon: 'palette',
    benefit: 'Mais presença mantendo a delicadeza.',
    description:
      'Combina alinhamento dos fios com coloração para intensificar o resultado e trazer mais destaque às sobrancelhas.',
  },
  {
    title: 'Limpeza de pele',
    icon: 'droplet',
    benefit: 'Pele renovada, limpa e confortável.',
    description:
      'Procedimento voltado para higienização, renovação e revitalização da pele, deixando-a mais limpa, uniforme e saudável.',
  },
  {
    title: 'Depilação de buço',
    icon: 'feather',
    benefit: 'Acabamento delicado para a pele.',
    description:
      'Remoção dos pelos da região do buço para uma pele com aparência mais uniforme e delicada.',
  },
]

export const resultItems = [
  {
    category: 'Design de sobrancelhas',
    label: 'Resultado real',
    alt: 'Foto real de resultado de design de sobrancelhas',
    image: '/assets/results/result-01.jpg',
    shape: 'lg:col-span-4 aspect-[3/4]',
  },
  {
    category: 'Design com henna',
    label: 'Resultado real',
    alt: 'Foto real de resultado de design com henna',
    image: '/assets/results/result-02.jpg',
    shape: 'lg:col-span-4 aspect-[3/4]',
  },
  {
    category: 'Brow lamination',
    label: 'Resultado real',
    alt: 'Foto real de resultado de brow lamination',
    image: '/assets/results/result-03.jpg',
    shape: 'lg:col-span-4 aspect-[3/4]',
  },
  {
    category: 'Acabamento facial',
    label: 'Detalhes',
    alt: 'Foto real de acabamento facial',
    image: '/assets/results/result-04.jpg',
    shape: 'lg:col-span-4 aspect-[3/4]',
  },
  {
    category: 'Design personalizado',
    label: 'Resultado real',
    alt: 'Foto real de design personalizado de sobrancelhas',
    image: '/assets/results/result-05.jpg',
    shape: 'lg:col-span-4 aspect-[3/4]',
  },
  {
    category: 'Beleza natural',
    label: 'Resultado real',
    alt: 'Foto real de resultado natural',
    image: '/assets/results/result-06.jpg',
    shape: 'lg:col-span-4 aspect-[3/4]',
  },
  {
    category: 'Cuidado facial',
    label: 'Resultado real',
    alt: 'Foto real de cuidado facial',
    image: '/assets/results/result-07.jpg',
    shape: 'lg:col-span-3 aspect-[4/5]',
  },
  {
    category: 'Atendimento personalizado',
    label: 'Resultado real',
    alt: 'Foto real de atendimento personalizado',
    image: '/assets/results/result-08.jpg',
    objectPosition: 'center 66%',
    shape: 'lg:col-span-3 aspect-[4/5]',
  },
  {
    category: 'Olhar natural',
    label: 'Resultado real',
    alt: 'Foto real de olhar natural',
    image: '/assets/results/result-09.jpg',
    objectPosition: 'center 68%',
    shape: 'lg:col-span-3 aspect-[4/5]',
  },
  {
    category: 'Sobrancelhas',
    label: 'Resultado real',
    alt: 'Foto real de sobrancelhas',
    image: '/assets/results/result-10.jpg',
    shape: 'lg:col-span-3 aspect-[4/5]',
  },
  {
    category: 'Detalhes do atendimento',
    label: 'Resultado real',
    alt: 'Foto real de detalhes do atendimento',
    image: '/assets/results/result-11.jpg',
    objectPosition: 'center 66%',
    shape: 'col-span-2 lg:col-span-12 aspect-[16/7]',
  },
]

export const differentials = [
  {
    title: 'Atendimento personalizado',
    text: 'Cada procedimento considera seu rosto, rotina e objetivo.',
  },
  {
    title: 'Resultado natural',
    text: 'A ideia é realçar seus traços sem apagar sua identidade.',
  },
  {
    title: 'Transparência',
    text: 'Você entende cada etapa antes de começar.',
  },
  {
    title: 'Experiência acolhedora',
    text: 'Um atendimento calmo, atento e sem pressa.',
  },
  {
    title: 'Orientação pós-atendimento',
    text: 'Cuidados claros para manter o resultado bonito por mais tempo.',
  },
]

export const testimonials = [
  {
    text: 'Me senti ouvida, bem atendida e segura durante todo o procedimento.',
    name: 'Cliente Yasmin Vitória Beauty',
  },
  {
    text: 'O resultado ficou natural, delicado e do jeito que eu queria.',
    name: 'Cliente Yasmin Vitória Beauty',
  },
  {
    text: 'Além do cuidado, a Yasmin explicou tudo com muita clareza.',
    name: 'Cliente Yasmin Vitória Beauty',
  },
]

export const faqItems = [
  {
    question: 'Como funciona o agendamento?',
    answer:
      'O agendamento é feito pelo WhatsApp. Você escolhe o procedimento desejado, tira suas dúvidas e verifica os horários disponíveis.',
  },
  {
    question: 'O design com henna fica artificial?',
    answer:
      'Não. O procedimento é feito de forma personalizada, buscando um resultado natural e harmônico com o seu rosto.',
  },
  {
    question: 'Qual procedimento é melhor para mim?',
    answer:
      'A escolha depende do seu objetivo. No atendimento, você recebe orientação para entender qual serviço combina melhor com sua necessidade.',
  },
  {
    question: 'A limpeza de pele dói?',
    answer:
      'Pode haver um leve desconforto em alguns momentos, mas o procedimento é realizado com cuidado para garantir segurança e bem-estar.',
  },
  {
    question: 'Preciso fazer manutenção?',
    answer:
      'Alguns serviços podem precisar de manutenção conforme a rotina, tipo de pele, crescimento dos fios e cuidados em casa.',
  },
]
