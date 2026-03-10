import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  description?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  title,
  description,
  className,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', align === 'center' && 'text-center', className)}>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && <p className="text-muted-foreground mt-4 text-lg">{description}</p>}
    </div>
  )
}
