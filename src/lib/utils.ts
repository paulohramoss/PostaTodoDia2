import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const nicheLabels: Record<string, string> = {
  'corretor-imoveis': 'Corretor de Imóveis',
  'imobiliaria': 'Imobiliária',
  'personal-trainer': 'Personal Trainer',
  'nutricionista': 'Nutricionista',
  'clinica-estetica': 'Clínica de Estética',
  'loja-roupas': 'Loja de Roupas',
  'social-media': 'Social Media',
  'mentor-infoprodutor': 'Mentor/Infoprodutor',
  'barbearia': 'Barbearia',
  'restaurante': 'Restaurante',
  'prestador-servico': 'Prestador de Serviço',
  'outro': 'Outro',
}

export const goalLabels: Record<string, string> = {
  'vender': 'Vender',
  'divulgar': 'Divulgar',
  'engajar': 'Engajar',
  'motivar': 'Motivar',
  'educar': 'Educar',
  'gerar-directs': 'Gerar Directs',
  'quebrar-objecoes': 'Quebrar Objeções',
  'atrair-seguidores': 'Atrair Seguidores',
}

export const formatLabels: Record<string, string> = {
  'stories': 'Stories',
  'post': 'Post',
  'carrossel': 'Carrossel',
  'reels': 'Reels',
  'calendario-semanal': 'Calendário Semanal',
  'ideias-rapidas': 'Ideias Rápidas',
}

export const toneLabels: Record<string, string> = {
  'direto': 'Direto',
  'motivacional': 'Motivacional',
  'profissional': 'Profissional',
  'descontraido': 'Descontraído',
  'vendedor': 'Vendedor',
  'educativo': 'Educativo',
  'provocativo': 'Provocativo',
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}
