import placeholderImages from './placeholder-images.json';

export const services = [
  {
    name: "Corte de Cabelo Clássico",
    description: "Um corte atemporal, adaptado à sua preferência. Inclui lavagem e modelagem.",
    image: placeholderImages.services[0].src,
    aiHint: placeholderImages.services[0].aiHint,
  },
  {
    name: "Fade Moderno",
    description: "Um fade moderno e nítido de qualquer estilo. Mesclagem de precisão para um visual perfeito.",
    image: placeholderImages.services[1].src,
    aiHint: placeholderImages.services[1].aiHint,
  },
  {
    name: "Aparo e Modelagem de Barba",
    description: "Modelagem e aparo especializados para aperfeiçoar o estilo da sua barba. Inclui toalha quente.",
    image: placeholderImages.services[2].src,
    aiHint: placeholderImages.services[2].aiHint,
  },
  {
    name: "O Serviço Completo",
    description: "A experiência definitiva: um corte de cabelo personalizado, aparo de barba e um relaxante barbear com toalha quente.",
    image: placeholderImages.services[3].src,
    aiHint: placeholderImages.services[3].aiHint,
  },
];

export const stylists = [
  {
    name: "Alex 'A Lâmina' Johnson",
    bio: "Com mais de uma década de maestria, Alex 'A Lâmina' Johnson é onde a barbearia clássica encontra a arte moderna. Um verdadeiro perfeccionista, ele se especializa em criar cortes clássicos impecáveis e fades modernos e nítidos, garantindo que cada cliente saia com um visual atemporal e na moda.",
    specialty: "Cortes Clássicos e Fades Modernos",
    image: placeholderImages.stylists[0].src,
    aiHint: placeholderImages.stylists[0].aiHint,
  },
  {
    name: "Samantha 'A Estilista' Carter",
    bio: "Uma visionária no mundo do cabelo, Samantha traz 8 anos de paixão criativa para cada agendamento. Ela se destaca em modelagens transformadoras e trabalhos de coloração complexos, transformando seu cabelo em uma tela de autoexpressão. Sua abordagem é capturar sua personalidade única em um estilo que diz muito.",
    specialty: "Estilo Criativo e Coloração",
    image: placeholderImages.stylists[1].src,
    aiHint: placeholderImages.stylists[1].aiHint,
  },
  {
    name: "Marco 'O Escultor' Rossi",
    bio: "Marco é um mestre do cuidado pessoal com paixão pela precisão. Com 15 anos de experiência, ele esculpe barbas e realiza barbas com toalha quente com o toque de um artista. Para Marco, não é apenas um aparo; é sobre criar um visual refinado e distinto que eleva toda a sua presença.",
    specialty: "Escultura de Barba e Barbas Quentes",
    image: placeholderImages.stylists[2].src,
    aiHint: placeholderImages.stylists[2].aiHint,
  },
];

export const galleryImages = placeholderImages.gallery.map((image, index) => ({
  ...image,
  alt: `Penteado de transformação do cliente ${index + 1}`
}));

export const pricing = [
    { service: "Corte de Cabelo Clássico", price: "50" },
    { service: "Fade Moderno", price: "60" },
    { service: "Corte Infantil (Menores de 12 anos)", price: "40" },
    { service: "Corte Raspado", price: "35" },
    { service: "Aparo e Modelagem de Barba", price: "30" },
    { service: "Barba com Toalha Quente", price: "45" },
    { service: "O Serviço Completo (Corte e Barba)", price: "90" },
    { service: "Tratamento de Coloração", price: "A partir de 80" },
];
