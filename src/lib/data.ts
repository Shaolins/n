

export const services = [
  {
    name: "Corte de Cabelo Clássico",
    description: "Um corte atemporal, adaptado à sua preferência. Inclui lavagem e modelagem.",
    price: "50",
    isExclusive: false
  },
  {
    name: "Fade Moderno",
    description: "Um fade moderno e nítido de qualquer estilo. Mesclagem de precisão para um visual perfeito.",
    price: "60",
    isExclusive: false
  },
  {
    name: "Aparo e Modelagem de Barba",
    description: "Modelagem e aparo especializados para aperfeiçoar o estilo da sua barba. Inclui toalha quente.",
    price: "30",
    isExclusive: false
  },
  {
    name: "O Serviço Completo",
    description: "A experiência definitiva: um corte de cabelo personalizado, aparo de barba e um relaxante barbear com toalha quente.",
    price: "90",
    isExclusive: false
  },
  {
    name: "Barba (Barbear à navalha, toalha quente, modelagem)",
    price: "70",
    isExclusive: true,
  },
  {
    name: "Tratamentos (Hidratação capilar, esfoliação facial)",
    price: "50",
    isExclusive: true,
  },
  {
    name: "Pacote: Dia do noivo",
    price: "450",
    isExclusive: true,
  },
  {
    name: "Massagens e Pacotes VIP",
    price: "120",
    isExclusive: true,
  },
];


const alexServices = [
  "Corte de Cabelo Clássico",
  "Fade Moderno",
  "O Serviço Completo",
  "Corte de Cabelo + Barba + Toalha Quente",
  "Pacote: Dia do noivo",
];

const samanthaServices = [
  "Tratamento de Coloração",
  "Pacote: Dia do noivo",
];

const marcoServices = [
  "Aparo e Modelagem de Barba",
  "O Serviço Completo",
  "Barba (Barbear à navalha, toalha quente, modelagem)",
  "Tratamentos (Hidratação capilar, esfoliação facial)",
  "Corte de Cabelo + Barba + Toalha Quente",
  "Pacote: Dia do noivo",
];


export const stylists = [
  {
    name: "Alex",
    bio: "Com mais de uma década de maestria, Alex é onde a barbearia clássica encontra a arte moderna. Um verdadeiro perfeccionista, ele se especializa em criar cortes clássicos impecáveis e fades modernos e nítidos, garantindo que cada cliente saia com um visual atemporal e na moda.",
    specialty: "Cortes Clássicos e Fades Modernos",
    services: alexServices,
  },
  {
    name: "Samantha",
    bio: "Uma visionária no mundo do cabelo, Samantha traz 8 anos de paixão criativa para cada agendamento. Ela se destaca em modelagens transformadoras e trabalhos de coloração complexos, transformando seu cabelo em uma tela de autoexpressão. Sua abordagem é capturar sua personalidade única em um estilo que diz muito.",
    specialty: "Estilo Criativo e Coloração",
    services: samanthaServices,
  },
  {
    name: "Marco",
    bio: "Marco é um mestre do cuidado pessoal com paixão pela precisão. Com 15 anos de experiência, ele esculpe barbas e realiza barbas com toalha quente com o toque de um artista. Para Marco, não é apenas um aparo; é sobre criar um visual refinado e distinto que eleva toda a sua presença.",
    specialty: "Escultura de Barba e Barbas Quentes",
    services: marcoServices,
  },
];

export const allServicesForBooking = services
  .filter(s => s.name !== 'Tratamento de Coloração')
  .filter(s => !s.isExclusive)
  .map(s => ({ name: s.name }));

export const exclusiveServicesForBooking = services
  .filter(s => s.isExclusive)
  .map(s => ({ name: s.name }));

export const pricing = services.filter(s => !s.isExclusive);
export const exclusiveServices = services.filter(s => s.isExclusive);

