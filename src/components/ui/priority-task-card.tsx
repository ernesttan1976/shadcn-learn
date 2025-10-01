import React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AlertCircle, Info, RefreshCw, ChevronRight } from 'lucide-react'

export interface PriorityTaskCardProps {
  title: string
  description: string
  timeInfo: string
  variant: 'urgent' | 'info' | 'action'
  className?: string
}

const variantStyles = {
  urgent: {
    cardClass: 'border-l-6 border-l-[var(--color-merlin-red-500)] bg-[var(--color-merlin-white)] hover:bg-[var(--color-merlin-grey-50)]',
    iconClass: 'text-[var(--color-merlin-red-500)]',
    icon: AlertCircle,
    badgeClass: 'bg-[var(--color-merlin-white)] text-black hover:bg-[var(--color-merlin-grey-100)]'
  },
  info: {
    cardClass: 'border-l-6 border-l-[var(--color-merlin-blue-500)] bg-[var(--color-merlin-white)] hover:bg-[var(--color-merlin-grey-50)]',
    iconClass: 'text-[var(--color-merlin-blue-500)]',
    icon: Info,
    badgeClass: 'bg-[var(--color-merlin-white)] text-black hover:bg-[var(--color-merlin-grey-100)]'
  },
  action: {
    cardClass: 'border-l-6 border-l-[var(--color-merlin-green-500)] bg-[var(--color-merlin-white)] hover:bg-[var(--color-merlin-grey-50)]',
    iconClass: 'text-[var(--color-merlin-green-500)]',
    icon: RefreshCw,
    badgeClass: 'bg-[var(--color-merlin-white)] text-black hover:bg-[var(--color-merlin-grey-100)]'
  }
}

export function PriorityTaskCard({ 
  title, 
  description, 
  timeInfo, 
  variant, 
  className 
}: PriorityTaskCardProps) {
  const variantConfig = variantStyles[variant]
  const IconComponent = variantConfig.icon

  return (
    <Card className={cn(
      'w-80 overflow-hidden shadow-sm transition-shadow hover:shadow-md',
      variantConfig.cardClass,
      className
    )}>
      <CardHeader className="flex flex-row items-center space-y-0 space-x-4 p-2 pb-2">
        <IconComponent className={cn('h-5 w-5 mt-0.5 flex-shrink-0', variantConfig.iconClass)} />
        <section className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-[var(--color-text-primary)] leading-tight">
            {title}
          </h3>
        </section>
        <Button
          size="icon"
          variant="ghost"
          className="h-7 w-7 rounded-full hover:bg-white/50 flex-shrink-0"
          aria-label="View details"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      
      <CardContent className="pt-0 px-4 pb-4 pl-13 bg-transparent">
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
          {description}
        </p>
        <Badge variant="outline" className={cn("text-xs font-medium", variantConfig.badgeClass)}>
          {timeInfo}
        </Badge>
      </CardContent>
    </Card>
  )
}
