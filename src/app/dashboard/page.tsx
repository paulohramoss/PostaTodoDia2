import { Sidebar } from '@/components/sidebar'
import { DashboardCard } from '@/components/dashboard-card'
import { Camera, FileText, LayoutGrid, Video, Calendar, Lightbulb, Sparkles } from 'lucide-react'

const formats = [
  {
    title: 'Stories',
    description: '5 stories prontos para postar, com objetivos claros e CTA para direct.',
    icon: Camera,
    format: 'stories',
    color: 'bg-violet-100 text-violet-600',
  },
  {
    title: 'Post para Feed',
    description: 'Legenda completa com título, texto, CTA e hashtags otimizadas para o nicho.',
    icon: FileText,
    format: 'post',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Carrossel',
    description: '6 slides com título e texto para cada, perfeito para conteúdo educativo.',
    icon: LayoutGrid,
    format: 'carrossel',
    badge: 'Mais engajamento',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    title: 'Reels',
    description: 'Roteiro completo cena por cena com narração e texto na tela.',
    icon: Video,
    format: 'reels',
    badge: 'Mais alcance',
    color: 'bg-red-100 text-red-600',
  },
  {
    title: 'Calendário Semanal',
    description: '7 dias de conteúdo planejado com tema, formato e caption para cada dia.',
    icon: Calendar,
    format: 'calendario-semanal',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    title: 'Ideias Rápidas',
    description: '15 ideias de posts personalizadas para o seu nicho e público.',
    icon: Lightbulb,
    format: 'ideias-rapidas',
    color: 'bg-amber-100 text-amber-600',
  },
]

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-6 h-6 text-violet-600" />
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            </div>
            <p className="text-gray-500">
              Escolha um formato de conteúdo para começar a criar
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {formats.map((format) => (
              <DashboardCard
                key={format.format}
                title={format.title}
                description={format.description}
                icon={format.icon}
                format={format.format}
                badge={format.badge}
                color={format.color}
              />
            ))}
          </div>

          <div className="mt-8 bg-violet-50 rounded-xl p-6">
            <h2 className="font-semibold text-violet-900 mb-2">Dica de uso</h2>
            <p className="text-sm text-violet-700">
              Para melhores resultados, seja específico no campo "Produto/Serviço" e "Público-alvo".
              Quanto mais detalhes você fornecer, mais personalizado será o conteúdo gerado.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
