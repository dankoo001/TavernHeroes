"use client"

import { useState, useRef } from "react"
import { Upload, FileText, Download, X, Loader2, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroPdfViewerProps {
  heroId: string
  heroName: string
  initialPdfUrl?: string
}

export function HeroPdfViewer({ heroId, heroName, initialPdfUrl }: HeroPdfViewerProps) {
  const [pdfUrl, setPdfUrl] = useState<string | null>(initialPdfUrl || null)
  const [isUploading, setIsUploading] = useState(false)
  const [showViewer, setShowViewer] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleUpload = async (file: File) => {
    if (!file.type.includes('pdf')) {
      alert('Можно загружать только PDF файлы')
      return
    }

    setIsUploading(true)
    
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('heroId', heroId)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Upload failed')
      }

      const data = await response.json()
      setPdfUrl(data.url)
    } catch (error) {
      console.error('Upload error:', error)
      alert('Ошибка при загрузке файла')
    } finally {
      setIsUploading(false)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleUpload(file)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files?.[0]
    if (file) {
      handleUpload(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = () => {
    setDragOver(false)
  }

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      {!pdfUrl && (
        <div
          className={`
            relative border-2 border-dashed rounded-lg p-8 text-center
            transition-all duration-300 cursor-pointer
            ${dragOver 
              ? 'border-primary bg-primary/10' 
              : 'border-border/50 hover:border-primary/50 hover:bg-card/50'
            }
          `}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileSelect}
            className="hidden"
          />
          
          {isUploading ? (
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="w-12 h-12 text-primary animate-spin" />
              <p className="text-muted-foreground">Загружаем лист персонажа...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <Upload className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-medium">Загрузить лист персонажа</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Перетащите PDF файл сюда или нажмите для выбора
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* PDF Preview */}
      {pdfUrl && !showViewer && (
        <div className="bg-card/50 border border-border/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <p className="font-medium text-foreground">Лист персонажа</p>
                <p className="text-sm text-muted-foreground">{heroName}.pdf</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowViewer(true)}
                className="border-primary/30 hover:bg-primary/10"
              >
                <Eye className="w-4 h-4 mr-2" />
                Просмотр
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-primary/30 hover:bg-primary/10"
              >
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer" download>
                  <Download className="w-4 h-4 mr-2" />
                  Скачать
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setPdfUrl(null)}
                className="text-muted-foreground hover:text-destructive"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Full PDF Viewer */}
      {pdfUrl && showViewer && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Лист персонажа
            </h3>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-primary/30 hover:bg-primary/10"
              >
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer" download>
                  <Download className="w-4 h-4 mr-2" />
                  Скачать
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowViewer(false)}
                className="text-muted-foreground"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="relative bg-black/50 rounded-lg overflow-hidden border border-border/30">
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0`}
              className="w-full h-[600px] md:h-[800px]"
              title={`Лист персонажа ${heroName}`}
            />
          </div>
        </div>
      )}
    </div>
  )
}
