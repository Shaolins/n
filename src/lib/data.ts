
export const services = [
  {
    name: "Corte de Cabelo Clássico",
    description: "Um corte atemporal, adaptado à sua preferência. Inclui lavagem e modelagem.",
  },
  {
    name: "Fade Moderno",
    description: "Um fade moderno e nítido de qualquer estilo. Mesclagem de precisão para um visual perfeito.",
  },
  {
    name: "Aparo e Modelagem de Barba",
    description: "Modelagem e aparo especializados para aperfeiçoar o estilo da sua barba. Inclui toalha quente.",
  },
  {
    name: "O Serviço Completo",
    description: "A experiência definitiva: um corte de cabelo personalizado, aparo de barba e um relaxante barbear com toalha quente.",
  },
];

export const stylists = [
  {
    name: "Alex",
    bio: "Com mais de uma década de maestria, Alex é onde a barbearia clássica encontra a arte moderna. Um verdadeiro perfeccionista, ele se especializa em criar cortes clássicos impecáveis e fades modernos e nítidos, garantindo que cada cliente saia com um visual atemporal e na moda.",
    specialty: "Cortes Clássicos e Fades Modernos",
  },
  {
    name: "Samantha",
    bio: "Uma visionária no mundo do cabelo, Samantha traz 8 anos de paixão criativa para cada agendamento. Ela se destaca em modelagens transformadoras e trabalhos de coloração complexos, transformando seu cabelo em uma tela de autoexpressão. Sua abordagem é capturar sua personalidade única em um estilo que diz muito.",
    specialty: "Estilo Criativo e Coloração",
  },
  {
    name: "Marco",
    bio: "Marco é um mestre do cuidado pessoal com paixão pela precisão. Com 15 anos de experiência, ele esculpe barbas e realiza barbas com toalha quente com o toque de um artista. Para Marco, não é apenas um aparo; é sobre criar um visual refinado e distinto que eleva toda a sua presença.",
    specialty: "Escultura de Barba e Barbas Quentes",
  },
];

export const galleryImages = []; // This is now managed by placeholder-images.json

export const pricing = [
    { service: "Corte de Cabelo Clássico", price: "50" },
    { service: "Fade Moderno", price: "60" },
    { service: "Corte Infantil (Menores de 12 anos)", price: "40" },
    { service: "Corte Raspado", price: "35" },
    { service: "Aparo e Modelagem de Barba", price: "30" },
    { service: "O Serviço Completo (Corte e Barba)", price: "90" },
    { service: "Tratamento de Coloração", price: "A partir de 80" },
];

export const exclusiveServices = [
  { service: "Barba (Barbear à navalha, toalha quente, modelagem)", price: "70,00" },
  { service: "Tratamentos (Hidratação capilar, esfoliação facial)", price: "50,00" },
  { service: "Corte de Cabelo + Barba + Toalha Quente", price: "110" },
  { service: "Pacote: Dia do noivo", price: "450,00" },
  { service: "Linha própria de 5 cosméticos masculinos premium", price: "350,00" },
];

const allPricingServices = pricing.map(p => p.service);
const allExclusiveServices = exclusiveServices.map(s => s.service);

export const allServicesForBooking = [...new Set([...allPricingServices, ...allExclusiveServices])].map(serviceName => ({ name: serviceName }));
