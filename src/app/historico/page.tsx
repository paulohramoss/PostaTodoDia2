import { getHistory } from '@/server/actions/content'
import { Sidebar } from '@/components/sidebar'
import { EmptyState } from '@/components/empty-state'
import { HistoricoList } from '@/components/historico-list'
import { Clock } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function HistoricoPage() {
  const items = await getHistory()

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-6 h-6 text-violet-600" />
              <h1 className="text-2xl font-bold text-gray-900">Histórico</h1>
            </div>
            <p className="text-gray-500">
              {items.length > 0
                ? `${items.length} conteúdo${items.length !== 1 ? 's' : ''} salvo${items.length !== 1 ? 's' : ''}`
                : 'Seus conteúdos salvos aparecerão aqui'}
            </p>
          </div>

          {items.length === 0 ? (
            <EmptyState
              title="Nenhum conteúdo salvo ainda"
              description="Crie e salve conteúdo para acessar rapidamente depois. Clique em Criar Conteúdo para começar."
              actionLabel="Criar primeiro conteúdo"
              actionHref="/gerar"
            />
          ) : (
            <HistoricoList items={items} />
          )}
        </div>
      </main>
    </div>
  )
}
