import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function Container({ children, className, as: Comp = 'div' }: ContainerProps) {
  return (
    <Comp className={cn('mx-auto w-full max-w-[1200px] px-6 md:px-20', className)}>{children}</Comp>
  )
}
