'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Sidebar } from '@/components/sidebar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { GeneratedContentPreview } from '@/components/generated-content-preview'
import { generateContent } from '@/lib/generate-content'
import type { ContentFormData, GeneratedContent } from '@/types'
import { Sparkles, Loader2, RefreshCw } from 'lucide-react'

const formSchema = z.object({
  niche: z.string().min(1, 'Selecione um nicho'),
  goal: z.string().min(1, 'Selecione um objetivo'),
  format: z.string().min(1, 'Selecione um formato'),
  tone: z.string().min(1, 'Selecione um tom'),
  product: z.string().min(2, 'Descreva seu produto ou serviço (mínimo 2 caracteres)'),
  audience: z.string().min(2, 'Descreva seu público-alvo (mínimo 2 caracteres)'),
  extraNotes: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

function GerarForm() {
  const searchParams = useSearchParams()
  const defaultFormat = searchParams.get('format') || ''
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null)
  const [submittedData, setSubmittedData] = useState<ContentFormData | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      niche: '',
      goal: '',
      format: defaultFormat,
      tone: '',
      product: '',
      audience: '',
      extraNotes: '',
    },
  })

  const onSubmit = async (values: FormValues) => {
    setIsGenerating(true)
    // Simulate a brief loading state for better UX
    await new Promise((resolve) => setTimeout(resolve, 600))
    const data = values as ContentFormData
    const content = generateContent(data)
    setGeneratedContent(content)
    setSubmittedData(data)
    setIsGenerating(false)
    // Scroll to results
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const handleReset = () => {
    setGeneratedContent(null)
    setSubmittedData(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-6 h-6 text-violet-600" />
              <h1 className="text-2xl font-bold text-gray-900">Criar Conteúdo</h1>
            </div>
            <p className="text-gray-500">
              Preencha os campos abaixo para gerar seu conteúdo personalizado
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Informações do conteúdo</CardTitle>
              <CardDescription>
                Quanto mais detalhado, mais personalizado será o resultado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Row 1: Niche + Format */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="niche"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nicho / Segmento</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione seu nicho" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="corretor-imoveis">Corretor de Imóveis</SelectItem>
                              <SelectItem value="imobiliaria">Imobiliária</SelectItem>
                              <SelectItem value="personal-trainer">Personal Trainer</SelectItem>
                              <SelectItem value="nutricionista">Nutricionista</SelectItem>
                              <SelectItem value="clinica-estetica">Clínica de Estética</SelectItem>
                              <SelectItem value="loja-roupas">Loja de Roupas</SelectItem>
                              <SelectItem value="social-media">Social Media</SelectItem>
                              <SelectItem value="mentor-infoprodutor">Mentor/Infoprodutor</SelectItem>
                              <SelectItem value="barbearia">Barbearia</SelectItem>
                              <SelectItem value="restaurante">Restaurante</SelectItem>
                              <SelectItem value="prestador-servico">Prestador de Serviço</SelectItem>
                              <SelectItem value="outro">Outro</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="format"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Formato do conteúdo</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione o formato" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="stories">Stories (5 slides)</SelectItem>
                              <SelectItem value="post">Post para Feed</SelectItem>
                              <SelectItem value="carrossel">Carrossel (6 slides)</SelectItem>
                              <SelectItem value="reels">Reels (roteiro)</SelectItem>
                              <SelectItem value="calendario-semanal">Calendário Semanal</SelectItem>
                              <SelectItem value="ideias-rapidas">Ideias Rápidas (15)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Row 2: Goal + Tone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="goal"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Objetivo do post</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="O que você quer alcançar?" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="vender">Vender</SelectItem>
                              <SelectItem value="divulgar">Divulgar serviço/produto</SelectItem>
                              <SelectItem value="engajar">Engajar seguidores</SelectItem>
                              <SelectItem value="motivar">Motivar público</SelectItem>
                              <SelectItem value="educar">Educar / Informar</SelectItem>
                              <SelectItem value="gerar-directs">Gerar directs</SelectItem>
                              <SelectItem value="quebrar-objecoes">Quebrar objeções</SelectItem>
                              <SelectItem value="atrair-seguidores">Atrair seguidores</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="tone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tom de voz</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Como quer se comunicar?" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="direto">Direto ao ponto</SelectItem>
                              <SelectItem value="motivacional">Motivacional</SelectItem>
                              <SelectItem value="profissional">Profissional</SelectItem>
                              <SelectItem value="descontraido">Descontraído</SelectItem>
                              <SelectItem value="vendedor">Vendedor</SelectItem>
                              <SelectItem value="educativo">Educativo</SelectItem>
                              <SelectItem value="provocativo">Provocativo</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Product */}
                  <FormField
                    control={form.control}
                    name="product"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Produto ou Serviço</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ex: Consultoria de emagrecimento, Apartamento na planta, Corte + barba..."
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>Descreva o que você está promovendo nesse post</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Audience */}
                  <FormField
                    control={form.control}
                    name="audience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Público-alvo</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ex: Mulheres 30-45 anos que querem emagrecer, Casais comprando primeiro imóvel..."
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>Para quem é esse conteúdo?</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Extra Notes */}
                  <FormField
                    control={form.control}
                    name="extraNotes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Observações extras (opcional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Ex: Temos promoção essa semana, Lançamento de produto novo, Mencionar garantia de 30 dias..."
                            className="min-h-20"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Informações adicionais que tornam o conteúdo ainda mais personalizado
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2"
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Gerando conteúdo...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        Gerar conteúdo
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Results */}
          {generatedContent && submittedData && (
            <div id="results" className="mt-8 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Resultado</h2>
                <Button variant="outline" size="sm" onClick={handleReset} className="gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5" />
                  Gerar novo
                </Button>
              </div>
              <GeneratedContentPreview content={generatedContent} formData={submittedData} />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default function GerarPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen bg-gray-50 items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-violet-600" />
      </div>
    }>
      <GerarForm />
    </Suspense>
  )
}
