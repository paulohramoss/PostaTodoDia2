'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Bookmark, Loader2, Check } from 'lucide-react'
import { saveContent } from '@/server/actions/content'
import type { ContentFormData, GeneratedContent } from '@/types'
import { toast } from 'sonner'

interface SaveButtonProps {
  formData: ContentFormData
  generatedContent: GeneratedContent
}

export function SaveButton({ formData, generatedContent }: SaveButtonProps) {
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    try {
      const result = await saveContent({
        ...formData,
        generatedContent,
      })
      if (result.success) {
        setSaved(true)
        toast.success('Conteúdo salvo no histórico!')
        setTimeout(() => setSaved(false), 3000)
      } else {
        toast.error(result.error || 'Erro ao salvar')
      }
    } finally {
      setSaving(false)
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleSave}
      disabled={saving || saved}
      className="gap-1.5"
    >
      {saving ? (
        <>
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
          <span>Salvando...</span>
        </>
      ) : saved ? (
        <>
          <Check className="w-3.5 h-3.5 text-green-600" />
          <span className="text-green-600">Salvo!</span>
        </>
      ) : (
        <>
          <Bookmark className="w-3.5 h-3.5" />
          <span>Salvar</span>
        </>
      )}
    </Button>
  )
}
