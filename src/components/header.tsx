import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Zap } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg text-gray-900">PostaTodoDia</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/dashboard" className="text-sm text-gray-600 hover:text-gray-900 transition-colors hidden sm:block">
            Dashboard
          </Link>
          <Link href="/historico" className="text-sm text-gray-600 hover:text-gray-900 transition-colors hidden sm:block">
            Histórico
          </Link>
          <Button asChild size="sm">
            <Link href="/gerar">Criar conteúdo</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
