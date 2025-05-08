// components/ui/Backdrop.tsx
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

type BackdropProps = {
  onClick: () => void
  children: React.ReactNode
  className?: string
}

const backdropWrapper = cva(
  'absolute w-full h-full flex justify-center items-center',
  {
    variants: {
      position: {
        center: 'items-center justify-center',
        top: 'items-start justify-center pt-10',
      },
    },
    defaultVariants: {
      position: 'center',
    },
  },
)

const backdrop = cva('absolute w-full h-full')

export function Backdrop({ onClick, children, className }: BackdropProps) {
  return (
    <div className={cn(backdropWrapper(), className)}>
      <div className={backdrop()} onClick={onClick} />
      {children}
    </div>
  )
}
