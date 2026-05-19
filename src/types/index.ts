export type Niche =
  | 'corretor-imoveis'
  | 'imobiliaria'
  | 'personal-trainer'
  | 'nutricionista'
  | 'clinica-estetica'
  | 'loja-roupas'
  | 'social-media'
  | 'mentor-infoprodutor'
  | 'barbearia'
  | 'restaurante'
  | 'prestador-servico'
  | 'outro'

export type Goal =
  | 'vender'
  | 'divulgar'
  | 'engajar'
  | 'motivar'
  | 'educar'
  | 'gerar-directs'
  | 'quebrar-objecoes'
  | 'atrair-seguidores'

export type Format =
  | 'stories'
  | 'post'
  | 'carrossel'
  | 'reels'
  | 'calendario-semanal'
  | 'ideias-rapidas'

export type Tone =
  | 'direto'
  | 'motivacional'
  | 'profissional'
  | 'descontraido'
  | 'vendedor'
  | 'educativo'
  | 'provocativo'

export interface ContentFormData {
  niche: Niche
  goal: Goal
  format: Format
  tone: Tone
  product: string
  audience: string
  extraNotes?: string
}

export interface Story {
  number: number
  text: string
  objective: string
  visualSuggestion: string
  cta?: string
}

export interface StoriesContent {
  format: 'stories'
  stories: Story[]
}

export interface PostContent {
  format: 'post'
  title: string
  caption: string
  cta: string
  hashtags: string[]
  imageSuggestion: string
}

export interface CarrosselSlide {
  number: number
  title: string
  text: string
  cta?: string
}

export interface CarrosselContent {
  format: 'carrossel'
  slides: CarrosselSlide[]
}

export interface ReelsScene {
  scene: number
  spokenText: string
  onScreenText: string
}

export interface ReelsContent {
  format: 'reels'
  hook: string
  scenes: ReelsScene[]
  cta: string
}

export interface CalendarDay {
  day: string
  theme: string
  format: string
  caption: string
  objective: string
}

export interface CalendarContent {
  format: 'calendario-semanal'
  days: CalendarDay[]
}

export interface QuickIdea {
  number: number
  idea: string
}

export interface QuickIdeasContent {
  format: 'ideias-rapidas'
  ideas: QuickIdea[]
}

export type GeneratedContent =
  | StoriesContent
  | PostContent
  | CarrosselContent
  | ReelsContent
  | CalendarContent
  | QuickIdeasContent

export interface SavedContent {
  id: string
  niche: string
  goal: string
  format: string
  tone: string
  product: string
  audience: string
  extraNotes?: string | null
  generatedContent: GeneratedContent
  createdAt: Date
}
