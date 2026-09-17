export interface ActivityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  icon: string;
  highlights: string[];
}

export interface AnimalItem {
  id: string;
  name: string;
  species: string;
  emoji: string;
  fact: string;
  curiosity: string;
  diet: string;
  tag: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'colegios' | 'eventos' | 'general';
}

export interface VisitFormData {
  institutionName: string;
  contactName: string;
  groupType: 'jardin' | 'primaria' | 'secundaria' | 'especial' | 'evento_privado';
  estimatedStudents: number;
  accompanyingAdults: number;
  preferredShift: 'manana' | 'tarde' | 'jornada_completa' | 'evento_privado';
  preferredDate: string;
  notes: string;
  isLosCeibosFamily: boolean;
}
