import { ActivityItem, AnimalItem, FAQItem } from '../types';

export const FARM_CONTACT = {
  name: 'Aula Verde',
  tagline: 'Granja Educativa e Interactiva',
  subtitle: 'Un aula sin paredes',
  phone: '2214369212',
  phoneFormatted: '0221 436-9212',
  whatsappUrl: 'https://wa.me/5492214369212',
  instagram: 'aulaverdegranja',
  instagramUrl: 'https://instagram.com/aulaverdegranja',
  address: 'Ruta 11 Km 22, Magdalena, Prov. de Buenos Aires',
  locationDetail: 'A solo 20 minutos de La Plata. Acceso 100% asfaltado para micros y vehículos.',
  hectares: '14 Hectáreas',
  quinchoCapacity: '+80 personas',
  promoPrice: 25000,
  promoDiscountCeibos: 30,
};

export const ACTIVITIES: ActivityItem[] = [
  {
    id: 'paseo',
    title: 'Paseo por la Granja',
    subtitle: 'Recorrido por todo el predio',
    description: 'Caminata guiada a lo largo de nuestras 14 hectáreas. Descubrimos la flora nativa, los montes de sombra, los corrales y el funcionamiento sustentable de una granja agroecológica en plena pampa bonaerense.',
    badge: '14 Hectáreas',
    icon: 'Compass',
    highlights: ['Flora y arboledas autóctonas', 'Senderos seguros y llanos', 'Educación ambiental en terreno']
  },
  {
    id: 'animales',
    title: 'Interacción con Animales',
    subtitle: 'Interacción directa y respeto animal',
    description: 'Los chicos experimentan el contacto directo y afectuoso con animales de campo en corrales especialmente diseñados para su bienestar y seguridad. Aprenden sobre sus cuidados, ciclos de vida y alimentación.',
    badge: 'Cuidado y Respeto',
    icon: 'HeartHandshake',
    highlights: ['Alimentación guiada por coordinadores', 'Patos, ovejas, caballos, ciervos y más', 'Fomento de la empatía y la biofilia']
  },
  {
    id: 'huerta',
    title: 'Huerta Orgánica',
    subtitle: 'Siembra, tierra fértil y cosecha',
    description: 'Taller vivencial con las manos en la tierra. Identificación de semillas, aromáticas, compostaje orgánico y ciclo de vida de los vegetales que llegan a nuestras mesas.',
    badge: 'Manos en la Tierra',
    icon: 'Sprout',
    highlights: ['Reconocimiento de hortalizas y aromáticas', 'Compost y cuidado del suelo', 'Siembra en almácigos para llevar a la escuela']
  },
  {
    id: 'cocina',
    title: 'Cocina Rústica',
    subtitle: 'Elaboración tradicional de campo',
    description: 'Taller práctico donde los alumnos aprenden recetas tradicionales camperas (panificación artesanal o amasado de campo), entendiendo el valor de los ingredientes naturales y el trabajo cooperativo.',
    badge: 'Taller Práctico',
    icon: 'UtensilsCrossed',
    highlights: ['Amasado de pan casero', 'Hornos de barro y cocina campestre', 'Degustación de lo elaborado']
  },
  {
    id: 'juegos',
    title: 'Juegos Recreativos',
    subtitle: 'Dinámicas al aire libre y aire puro',
    description: 'Juegos cooperativos, carreras de embolsados, búsqueda del tesoro rural y actividades lúdicas guiadas en un inmenso predio verde, seguro y cercado, promoviendo el compañerismo y la recreación activa.',
    badge: 'Aire Puro y Diversión',
    icon: 'Smile',
    highlights: ['Coordinadores especializados', 'Juegos tradicionales en césped', 'Espacio seguro y protegido']
  }
];

export const ANIMALS: AnimalItem[] = [
  {
    id: 'conejos',
    name: 'Conejitos de Granja',
    species: 'Oryctolagus cuniculus',
    emoji: '🐇',
    fact: 'Miden el pulso de la granja con sus caricias suaves y orejas atentas.',
    curiosity: 'Sus dientes nunca dejan de crecer, por eso disfrutan roer heno y ramas tiernas.',
    diet: 'Heno de alfalfa, hojas verdes, zanahorias y pasto fresco.',
    tag: 'Ternura total'
  },
  {
    id: 'ovejas',
    name: 'Ovejas y Corderitos',
    species: 'Ovis orientalis aries',
    emoji: '🐑',
    fact: 'Viven en rebaño pacífico en nuestras pasturas abiertas de Magdalena.',
    curiosity: 'Tienen una memoria fotográfica excepcional y reconocen rostros humanos y de sus compañeras.',
    diet: 'Pasturas naturales, trébol y forraje balanceado.',
    tag: 'Comportamiento en rebaño'
  },
  {
    id: 'caballos',
    name: 'Caballos y Ponis',
    species: 'Equus caballus',
    emoji: '🐴',
    fact: 'Los gigantes nobles de Aula Verde que acompañan con mansedumbre a los visitantes.',
    curiosity: 'Duermen tanto acostados como de pie gracias a un sistema especial de bloqueo de tendones en sus patas.',
    diet: 'Pasto de campo, fardos de avena y agua fresca.',
    tag: 'Fuerza y nobleza'
  },
  {
    id: 'patos',
    name: 'Patos y Gansos',
    species: 'Anas platyrhynchos',
    emoji: '🦆',
    fact: 'Habitan nuestras lagunas y sectores húmedos con sus chapuzones sincronizados.',
    curiosity: 'Sus plumas poseen un aceite natural impermeable que las mantiene completamente secas al nadar.',
    diet: 'Granos de maíz, hojas acuáticas y semillas.',
    tag: 'Aves acuáticas'
  },
  {
    id: 'gallinas',
    name: 'Gallinas y Gallos',
    species: 'Gallus gallus domesticus',
    emoji: '🐔',
    fact: 'Revolotean en libertad buscando lombrices y granos bajo la sombra de los álamos.',
    curiosity: 'Se comunican con más de 24 vocalizaciones diferentes para avisar sobre comida o peligros.',
    diet: 'Maíz quebrado, granos enteros y bichitos del pasto.',
    tag: 'Aves de corral'
  },
  {
    id: 'chanchos',
    name: 'Chanchos y Lechones',
    species: 'Sus scrofa domestica',
    emoji: '🐷',
    fact: 'Curiosos, inteligentes y súper sociables en sus corrales con barro fresco.',
    curiosity: 'Son más limpios de lo que la gente cree: usan el lodo para refrescarse y proteger su piel del sol, ya que no sudan.',
    diet: 'Zapallos, verduras frescas, afrecho y frutos caídos.',
    tag: 'Inteligencia animal'
  },
  {
    id: 'ciervos',
    name: 'Ciervos',
    species: 'Cervidae',
    emoji: '🦌',
    fact: 'Elegantes y esbeltos, pastan con tranquilidad en amplios potreros naturales.',
    curiosity: 'Sus astas se renuevan anualmente en un proceso biológico fascinante que los chicos aprenden a observar.',
    diet: 'Hojas tiernas, cortezas, hierbas campestres y brotes.',
    tag: 'Fauna del monte'
  },
  {
    id: 'pavos',
    name: 'Pavos Reales',
    species: 'Pavo cristatus',
    emoji: '🦚',
    fact: 'Sorprenden a todos cuando despliegan su asombrosa cola irisada en forma de abanico.',
    curiosity: 'Sus plumas no tienen pigmentos azules reales: el color se genera por la estructura microscópica que refracta la luz solar.',
    diet: 'Semillas variadas, bayas, brotes e insectos.',
    tag: 'Color y esplendor'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: '¿Qué incluye la Promo Apertura de $25.000 por alumno?',
    answer: 'Incluye la jornada educativa completa con todas las actividades guiadas (recorrido por las 14 hectáreas, interacción con animales, taller de huerta, cocina rústica y juegos al aire libre) más el DESAYUNO COMPLETO de campo (té, matecocido calentito, leche, café y pan artesanal elaborado en la granja).',
    category: 'colegios'
  },
  {
    question: '¿Pagan los docentes, directivos o acompañantes escolares?',
    answer: 'No, el equipo docente y acompañantes a cargo del grupo escolar (generalmente 1 adulto cada 10 alumnos) tienen ingreso y desayuno bonificado sin costo alguno.',
    category: 'colegios'
  },
  {
    question: '¿Cómo es el acceso para micros escolares y transporte?',
    answer: 'El acceso es 100% por asfalto directo por Ruta 11 Km 22, sin caminos de tierra ni pozos. Contamos con amplia dársena de ingreso y estacionamiento interno seguro y plano para micros de larga distancia, charters escolares y autos.',
    category: 'general'
  },
  {
    question: '¿Qué ocurre en caso de pronóstico de lluvia o mal tiempo?',
    answer: 'Contamos con un quincho cerrado de gran capacidad para más de 80 personas donde se pueden realizar actividades techadas. Si el mal tiempo impide la vivencia al aire libre, se coordina una nueva fecha disponible sin ningún tipo de penalidad ni pérdida de la reserva.',
    category: 'general'
  },
  {
    question: '¿Cómo funciona el alquiler para Eventos Privados?',
    answer: 'Alquilamos el predio para cumpleaños infantiles campestres, reuniones familiares, bautismos, comuniones y jornadas de empresa en el horario de 11:00 a 18:00 hs. Incluye uso exclusivo del quincho para más de 80 personas, parrillas, baños y sectores de recreación. Las familias de Los Ceibos cuentan con 30% de descuento especial.',
    category: 'eventos'
  },
  {
    question: '¿Qué deben llevar los chicos el día de la visita?',
    answer: 'Sugerimos zapatillas cómodas para caminar, ropa cómoda que se pueda ensuciar un poquito en la huerta, gorrita para el sol, botella de agua reutilizable con nombre y repelente para mosquitos.',
    category: 'colegios'
  },
  {
    question: '¿Cuentan con seguro y primeros auxilios?',
    answer: 'Sí, el predio cuenta con cobertura de Seguro de Responsabilidad Civil integral, botiquín de primeros auxilios y protocolo de emergencias médicas con área protegida para tranquilidad de las instituciones educativas.',
    category: 'general'
  }
];
