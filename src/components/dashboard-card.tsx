import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { LucideIcon } from 'lucide-react'

interface DashboardCardProps {
  title: string
  description: string
  icon: LucideIcon
  format: string
  badge?: string
  color: string
}

export function DashboardCard({ title, description, icon: Icon, format, badge, color }: DashboardCardProps) {
  return (
    <Link href={`/gerar?format=${format}`}>
      <Card className="h-full hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer group">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
              <Icon className="w-5 h-5" />
            </div>
            {badge && (
              <Badge variant="secondary" className="text-xs">
                {badge}
              </Badge>
            )}
          </div>
          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-violet-700 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-500">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
