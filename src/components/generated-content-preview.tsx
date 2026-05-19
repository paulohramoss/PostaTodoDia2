'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CopyButton } from '@/components/copy-button'
import { SaveButton } from '@/components/save-button'
import type {
  GeneratedContent,
  StoriesContent,
  PostContent,
  CarrosselContent,
  ReelsContent,
  CalendarContent,
  QuickIdeasContent,
  ContentFormData,
} from '@/types'
import { Camera, FileText, LayoutGrid, Video, Calendar, Lightbulb, Hash } from 'lucide-react'

interface GeneratedContentPreviewProps {
  content: GeneratedContent
  formData: ContentFormData
}

function StoriesPreview({ content }: { content: StoriesContent }) {
  const allText = content.stories
    .map(
      (s) =>
        `Story ${s.number}: ${s.text}\nObjetivo: ${s.objective}\nSugestão visual: ${s.visualSuggestion}${s.cta ? `\nCTA: ${s.cta}` : ''}`
    )
    .join('\n\n---\n\n')

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Camera className="w-5 h-5 text-violet-600" />
          <h3 className="font-semibold text-gray-900">Stories ({content.stories.length} slides)</h3>
        </div>
        <CopyButton text={allText} />
      </div>
      <div className="space-y-3">
        {content.stories.map((story) => (
          <Card key={story.number} className="border-l-4 border-l-violet-400">
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <Badge variant="secondary" className="shrink-0">
                  Story {story.number}
                </Badge>
                <CopyButton text={story.text} size="sm" />
              </div>
              <p className="text-sm text-gray-800 mb-3 whitespace-pre-wrap">{story.text}</p>
              <div className="space-y-1.5">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-medium text-gray-500 w-28 shrink-0">Objetivo:</span>
                  <span className="text-xs text-gray-600">{story.objective}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-medium text-gray-500 w-28 shrink-0">Visual:</span>
                  <span className="text-xs text-gray-600">{story.visualSuggestion}</span>
                </div>
                {story.cta && (
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-medium text-violet-600 w-28 shrink-0">CTA:</span>
                    <span className="text-xs text-violet-700 font-medium">{story.cta}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function PostPreview({ content }: { content: PostContent }) {
  const fullCaption = `${content.caption}\n\n${content.hashtags.join(' ')}`

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900">Post para Feed</h3>
        </div>
        <CopyButton text={fullCaption} />
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Título / Chamada</p>
            <CopyButton text={content.title} size="sm" />
          </div>
          <div className="bg-violet-50 rounded-lg p-3">
            <p className="font-semibold text-violet-900">{content.title}</p>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Legenda</p>
            <CopyButton text={content.caption} size="sm" />
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-sm text-gray-800 whitespace-pre-wrap">{content.caption}</p>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">CTA</p>
            <CopyButton text={content.cta} size="sm" />
          </div>
          <div className="bg-green-50 rounded-lg p-3">
            <p className="text-sm text-green-800 font-medium">{content.cta}</p>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <Hash className="w-3.5 h-3.5 text-gray-500" />
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Hashtags</p>
            </div>
            <CopyButton text={content.hashtags.join(' ')} size="sm" />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {content.hashtags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Sugestão de Imagem</p>
          <div className="bg-amber-50 rounded-lg p-3">
            <p className="text-xs text-amber-800">{content.imageSuggestion}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function CarrosselPreview({ content }: { content: CarrosselContent }) {
  const allText = content.slides
    .map((s) => `Slide ${s.number}: ${s.title}\n${s.text}${s.cta ? `\nCTA: ${s.cta}` : ''}`)
    .join('\n\n---\n\n')

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LayoutGrid className="w-5 h-5 text-pink-600" />
          <h3 className="font-semibold text-gray-900">Carrossel ({content.slides.length} slides)</h3>
        </div>
        <CopyButton text={allText} />
      </div>
      <div className="space-y-3">
        {content.slides.map((slide) => (
          <Card key={slide.number} className="border-l-4 border-l-pink-400">
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <Badge variant="secondary" className="shrink-0">
                  Slide {slide.number}
                </Badge>
                <CopyButton text={`${slide.title}\n${slide.text}${slide.cta ? `\n${slide.cta}` : ''}`} size="sm" />
              </div>
              <p className="font-semibold text-gray-900 mb-1.5">{slide.title}</p>
              <p className="text-sm text-gray-600">{slide.text}</p>
              {slide.cta && (
                <div className="mt-2 bg-violet-50 rounded p-2">
                  <p className="text-xs text-violet-700 font-medium">{slide.cta}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function ReelsPreview({ content }: { content: ReelsContent }) {
  const fullScript = `HOOK: ${content.hook}\n\n${content.scenes
    .map((s) => `Cena ${s.scene}:\nNarração: ${s.spokenText}\nTela: ${s.onScreenText}`)
    .join('\n\n')}\n\nCTA: ${content.cta}`

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Video className="w-5 h-5 text-red-600" />
          <h3 className="font-semibold text-gray-900">Roteiro Reels</h3>
        </div>
        <CopyButton text={fullScript} />
      </div>

      <div className="bg-red-50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-1">
          <p className="text-xs font-semibold text-red-700 uppercase tracking-wider">Hook (primeiros 3 segundos)</p>
          <CopyButton text={content.hook} size="sm" />
        </div>
        <p className="text-sm font-medium text-red-900">{content.hook}</p>
      </div>

      <div className="space-y-3">
        {content.scenes.map((scene) => (
          <Card key={scene.scene} className="border-l-4 border-l-red-300">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <Badge variant="secondary" className="shrink-0">
                  Cena {scene.scene}
                </Badge>
                <CopyButton text={`${scene.spokenText}\n${scene.onScreenText}`} size="sm" />
              </div>
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-medium text-gray-500">Narração: </span>
                  <span className="text-sm text-gray-800">{scene.spokenText}</span>
                </div>
                <div className="bg-gray-50 rounded p-2">
                  <span className="text-xs font-medium text-gray-500">Texto na tela: </span>
                  <span className="text-xs text-gray-700 font-medium">{scene.onScreenText}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-green-50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-1">
          <p className="text-xs font-semibold text-green-700 uppercase tracking-wider">CTA Final</p>
          <CopyButton text={content.cta} size="sm" />
        </div>
        <p className="text-sm font-medium text-green-900">{content.cta}</p>
      </div>
    </div>
  )
}

function CalendarPreview({ content }: { content: CalendarContent }) {
  const fullText = content.days
    .map((d) => `${d.day}\nTema: ${d.theme}\nFormato: ${d.format}\nObjetivo: ${d.objective}\nCaption: ${d.caption}`)
    .join('\n\n---\n\n')

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-indigo-600" />
          <h3 className="font-semibold text-gray-900">Calendário Semanal</h3>
        </div>
        <CopyButton text={fullText} />
      </div>
      <div className="space-y-3">
        {content.days.map((day, i) => (
          <Card key={i} className="border-l-4 border-l-indigo-400">
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <p className="font-semibold text-gray-900">{day.day}</p>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs shrink-0">
                    {day.format}
                  </Badge>
                  <CopyButton text={`${day.day}: ${day.caption}`} size="sm" />
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-500 w-20">Tema:</span>
                  <Badge variant="outline" className="text-xs">{day.theme}</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-500 w-20">Objetivo:</span>
                  <span className="text-xs text-gray-600">{day.objective}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-medium text-gray-500 w-20 shrink-0">Caption:</span>
                  <span className="text-xs text-gray-700 italic">"{day.caption}"</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function QuickIdeasPreview({ content }: { content: QuickIdeasContent }) {
  const allIdeas = content.ideas.map((i) => `${i.number}. ${i.idea}`).join('\n')

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-amber-500" />
          <h3 className="font-semibold text-gray-900">Ideias Rápidas ({content.ideas.length})</h3>
        </div>
        <CopyButton text={allIdeas} />
      </div>
      <div className="grid gap-2">
        {content.ideas.map((idea) => (
          <div
            key={idea.number}
            className="flex items-start gap-3 bg-amber-50 rounded-lg p-3 group"
          >
            <span className="flex-shrink-0 w-6 h-6 bg-amber-200 text-amber-800 rounded-full flex items-center justify-center text-xs font-bold">
              {idea.number}
            </span>
            <div className="flex-1 flex items-start justify-between gap-2">
              <p className="text-sm text-gray-800">{idea.idea}</p>
              <CopyButton text={idea.idea} size="sm" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function GeneratedContentPreview({ content, formData }: GeneratedContentPreviewProps) {
  const getAllText = () => {
    switch (content.format) {
      case 'stories':
        return content.stories.map((s) => s.text).join('\n\n---\n\n')
      case 'post':
        return `${content.title}\n\n${content.caption}\n\n${content.hashtags.join(' ')}`
      case 'carrossel':
        return content.slides.map((s) => `${s.title}: ${s.text}`).join('\n\n')
      case 'reels':
        return `${content.hook}\n\n${content.scenes.map((s) => s.spokenText).join('\n\n')}\n\n${content.cta}`
      case 'calendario-semanal':
        return content.days.map((d) => `${d.day}: ${d.caption}`).join('\n')
      case 'ideias-rapidas':
        return content.ideas.map((i) => `${i.number}. ${i.idea}`).join('\n')
    }
  }

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Conteúdo Gerado</CardTitle>
          <div className="flex items-center gap-2">
            <CopyButton text={getAllText()} />
            <SaveButton formData={formData} generatedContent={content} />
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="pt-6">
        {content.format === 'stories' && <StoriesPreview content={content} />}
        {content.format === 'post' && <PostPreview content={content} />}
        {content.format === 'carrossel' && <CarrosselPreview content={content} />}
        {content.format === 'reels' && <ReelsPreview content={content} />}
        {content.format === 'calendario-semanal' && <CalendarPreview content={content} />}
        {content.format === 'ideias-rapidas' && <QuickIdeasPreview content={content} />}
      </CardContent>
    </Card>
  )
}
