import { ReactNode } from 'react'
import {
  dialogWrapperStyles,
  dialogHeaderStyles,
  dialogContentStyles,
  dialogFooterStyles,
} from './DialogStyles'

export type DialogProps = {
  children: ReactNode
  className?: string
}

export function Dialog({ children, className }: DialogProps) {
  return <div className={dialogWrapperStyles({ className })}>{children}</div>
}

Dialog.Header = function Header({ children }: { children: ReactNode }) {
  return <div className={dialogHeaderStyles()}>{children}</div>
}

Dialog.Content = function Content({ children }: { children: ReactNode }) {
  return <div className={dialogContentStyles()}>{children}</div>
}

Dialog.Footer = function Footer({ children }: { children: ReactNode }) {
  return <div className={dialogFooterStyles()}>{children}</div>
}
