import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Header } from '@/components/header'
import {
  Zap,
  Camera,
  FileText,
  LayoutGrid,
  Video,
  Calendar,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
} from 'lucide-react'

const niches = [
  'Corretor de Imóveis',
  'Personal Trainer',
  'Nutricionista',
  'Clínica Estética',
  'Loja de Roupas',
  'Social Media',
  'Mentor/Infoprodutor',
  'Barbearia',
  'Restaurante',
  'Prestador de Serviço',
]

const formats = [
  { icon: Camera, label: 'Stories', description: '5 stories prontos com CTA', color: 'bg-violet-100 text-violet-600' },
  { icon: FileText, label: 'Post', description: 'Legenda + hashtags otimizadas', color: 'bg-blue-100 text-blue-600' },
  { icon: LayoutGrid, label: 'Carrossel', description: 'Até 6 slides com títulos', color: 'bg-pink-100 text-pink-600' },
  { icon: Video, label: 'Reels', description: 'Roteiro cena por cena', color: 'bg-red-100 text-red-600' },
  { icon: Calendar, label: 'Calendário Semanal', description: '7 dias de conteúdo planejado', color: 'bg-indigo-100 text-indigo-600' },
  { icon: Lightbulb, label: 'Ideias Rápidas', description: '15 ideias de posts do nicho', color: 'bg-amber-100 text-amber-600' },
]

const benefits = [
  {
    icon: Zap,
    title: 'Geração instantânea',
    description: 'Conteúdo completo em segundos. Sem espera, sem fila, sem limite de uso.',
  },
  {
    icon: TrendingUp,
    title: 'Feito para converter',
    description: 'Cada texto tem CTA estratégico para gerar directs, seguidores e vendas.',
  },
  {
    icon: Users,
    title: 'Personalizado para seu nicho',
    description: 'O conteúdo é adaptado ao seu público, produto e objetivo de cada post.',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-blue-50 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-violet-700 bg-violet-100 border-violet-200">
              Conteúdo para Instagram em segundos
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Pare de travar na{' '}
              <span className="text-violet-600">
                hora de postar
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              O PostaTodoDia gera posts, stories, reels e carrosseis personalizados para o seu
              nicho — prontos para copiar e postar. Nunca mais fique sem ideia.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="xl" className="gap-2">
                <Link href="/gerar">
                  <Zap className="w-5 h-5" />
                  Criar meu conteúdo agora
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="/dashboard">
                  Ver formatos disponíveis
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-400">Grátis · Sem cadastro · Resultado imediato</p>
          </div>
        </div>
      </section>

      {/* Formats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">6 formatos prontos para o Instagram</h2>
            <p className="text-gray-600">Escolha o formato certo para cada momento da sua estratégia</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {formats.map((format) => {
              const Icon = format.icon
              return (
                <Card key={format.label} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${format.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{format.label}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{format.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Por que usar o PostaTodoDia?</h2>
            <p className="text-gray-600">Tudo que você precisa para nunca mais ficar sem conteúdo</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-violet-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Example Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Exemplo de conteúdo gerado</h2>
            <p className="text-gray-600">Veja o tipo de resultado que você recebe em segundos</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-violet-600">Personal Trainer</Badge>
                  <Badge variant="secondary">Post · Vender</Badge>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Título</p>
                    <p className="font-semibold text-gray-900">
                      Por que treino personalizado é a melhor escolha para quem quer resultado rápido
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Legenda</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Hoje quero te falar sobre algo que muitas pessoas deixam passar sem perceber.
                      Se você está buscando resultados e ainda não encontrou o que esperava, posso te
                      dizer: o problema não é você. É que a maioria das academias não foi feita para
                      quem realmente quer resultado...
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Hashtags</p>
                    <div className="flex flex-wrap gap-1">
                      {['#personaltrainer', '#treino', '#fitness', '#transformação', '#academia'].map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-sm text-green-800">
                      Me manda uma mensagem com a palavra <strong>TREINO</strong> e te mando um plano personalizado.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Niches Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Nichos atendidos</h2>
            <p className="text-gray-600">Conteúdo adaptado para cada tipo de negócio</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {niches.map((niche) => (
              <Badge
                key={niche}
                variant="outline"
                className="text-sm py-1.5 px-4 border-gray-200 text-gray-700"
              >
                {niche}
              </Badge>
            ))}
            <Badge
              variant="outline"
              className="text-sm py-1.5 px-4 border-dashed border-gray-300 text-gray-500"
            >
              + muito mais
            </Badge>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-violet-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Como funciona</h2>
            <p className="text-gray-600">3 passos para ter seu conteúdo pronto</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Preencha o formulário', description: 'Informe seu nicho, objetivo, produto e público. Leva menos de 1 minuto.' },
              { step: '2', title: 'Gere o conteúdo', description: 'O sistema cria o conteúdo completo e personalizado para você na hora.' },
              { step: '3', title: 'Copie e poste', description: 'Copie o texto, use a sugestão visual e poste no seu Instagram. Simples assim.' },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">O que você recebe em cada geração</h2>
            <div className="space-y-3 text-left">
              {[
                'Texto completo e otimizado para o Instagram',
                'CTA estratégico para gerar directs e vendas',
                'Sugestão de imagem ou vídeo para o post',
                'Hashtags relevantes para o seu nicho',
                'Adaptação ao seu tom de voz e objetivo',
                'Histórico salvo para consultar depois',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-violet-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pronto para nunca mais travar no Instagram?
          </h2>
          <p className="text-violet-200 text-lg mb-8">
            Crie seu primeiro conteúdo agora. É grátis, rápido e sem cadastro.
          </p>
          <Button asChild size="xl" variant="outline" className="bg-white text-violet-700 hover:bg-violet-50 border-white gap-2">
            <Link href="/gerar">
              <Zap className="w-5 h-5" />
              Criar conteúdo grátis agora
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-violet-600 rounded flex items-center justify-center">
              <Zap className="w-3 h-3 text-white" />
            </div>
            <span className="font-semibold text-gray-900">PostaTodoDia</span>
          </div>
          <p className="text-sm text-gray-400">
            Conteúdo para Instagram gerado com inteligência
          </p>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Dashboard
            </Link>
            <Link href="/gerar" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Criar
            </Link>
            <Link href="/historico" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Histórico
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
