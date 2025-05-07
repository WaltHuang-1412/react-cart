import styles from './Backdrop.module.css'

type BackdropProps = {
  onClick: () => void
  children: React.ReactNode
}

export function Backdrop({ onClick, children }: BackdropProps) {
  return (
    <div className={styles.backdrop} onClick={onClick}>
      {children}
    </div>
  )
}
