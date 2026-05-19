'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { GeneratedContentPreview } from '@/components/generated-content-preview'
import { deleteContent } from '@/server/actions/content'
import type { SavedContent, ContentFormData } from '@/types'
import { nicheLabels, goalLabels, formatLabels, toneLabels, formatDate } from '@/lib/utils'
import { ChevronDown, ChevronUp, Trash2 } from 'lucide-react'
import { toast } from 'sonner'

interface HistoricoListProps {
  items: SavedContent[]
}

function HistoricoItem({ item, onDelete }: { item: SavedContent; onDelete: (id: string) => void }) {
  const [expanded, setExpanded] = useState(false)
  const [deleting, setDeleting] = useState(false)

  const handleDelete = async () => {
    setDeleting(true)
    const result = await deleteContent(item.id)
    if (result.success) {
      toast.success('Conteúdo removido do histórico')
      onDelete(item.id)
    } else {
      toast.error('Erro ao remover conteúdo')
      setDeleting(false)
    }
  }

  const formData: ContentFormData = {
    niche: item.niche as ContentFormData['niche'],
    goal: item.goal as ContentFormData['goal'],
    format: item.format as ContentFormData['format'],
    tone: item.tone as ContentFormData['tone'],
    product: item.product,
    audience: item.audience,
    extraNotes: item.extraNotes ?? undefined,
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge className="bg-violet-600 text-xs shrink-0">
                {nicheLabels[item.niche] || item.niche}
              </Badge>
              <Badge variant="secondary" className="text-xs shrink-0">
                {formatLabels[item.format] || item.format}
              </Badge>
              <Badge variant="outline" className="text-xs shrink-0">
                {goalLabels[item.goal] || item.goal}
              </Badge>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-sm text-gray-600 truncate">
                <span className="font-medium">{item.product}</span>
                <span className="text-gray-400 mx-1">·</span>
                <span>{item.audience}</span>
              </p>
            </div>
            <p className="text-xs text-gray-400 mt-1">{formatDate(item.createdAt)}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDelete}
              disabled={deleting}
              className="h-8 w-8 text-gray-400 hover:text-red-500 hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setExpanded(!expanded)}
              className="gap-1"
            >
              {expanded ? (
                <>
                  <ChevronUp className="w-3.5 h-3.5" />
                  Fechar
                </>
              ) : (
                <>
                  <ChevronDown className="w-3.5 h-3.5" />
                  Ver conteúdo
                </>
              )}
            </Button>
          </div>
        </div>
      </CardHeader>
      {expanded && (
        <CardContent className="p-4 pt-0">
          <div className="border-t border-gray-100 pt-4">
            <GeneratedContentPreview content={item.generatedContent} formData={formData} />
          </div>
        </CardContent>
      )}
    </Card>
  )
}

export function HistoricoList({ items }: HistoricoListProps) {
  const [localItems, setLocalItems] = useState(items)

  const handleDelete = (id: string) => {
    setLocalItems((prev) => prev.filter((item) => item.id !== id))
  }

  if (localItems.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>Todos os itens foram removidos.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {localItems.map((item) => (
        <HistoricoItem key={item.id} item={item} onDelete={handleDelete} />
      ))}
    </div>
  )
}
