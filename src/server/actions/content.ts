'use server'

import { prisma } from '@/lib/prisma'
import type { GeneratedContent, SavedContent } from '@/types'
import { revalidatePath } from 'next/cache'

export async function saveContent(data: {
  niche: string
  goal: string
  format: string
  tone: string
  product: string
  audience: string
  extraNotes?: string
  generatedContent: GeneratedContent
}): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    const saved = await prisma.content.create({
      data: {
        niche: data.niche,
        goal: data.goal,
        format: data.format,
        tone: data.tone,
        product: data.product,
        audience: data.audience,
        extraNotes: data.extraNotes,
        generatedContent: JSON.stringify(data.generatedContent),
      },
    })
    revalidatePath('/historico')
    return { success: true, id: saved.id }
  } catch {
    return { success: false, error: 'Erro ao salvar conteúdo' }
  }
}

export async function getHistory(): Promise<SavedContent[]> {
  const items = await prisma.content.findMany({
    orderBy: { createdAt: 'desc' },
  })
  return items.map((item) => ({
    ...item,
    generatedContent: JSON.parse(item.generatedContent) as GeneratedContent,
  }))
}

export async function deleteContent(id: string): Promise<{ success: boolean }> {
  try {
    await prisma.content.delete({ where: { id } })
    revalidatePath('/historico')
    return { success: true }
  } catch {
    return { success: false }
  }
}

export async function getContentById(id: string): Promise<SavedContent | null> {
  const item = await prisma.content.findUnique({ where: { id } })
  if (!item) return null
  return {
    ...item,
    generatedContent: JSON.parse(item.generatedContent) as GeneratedContent,
  }
}
