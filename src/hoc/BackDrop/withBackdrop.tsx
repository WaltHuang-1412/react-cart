import { ComponentType } from 'react'
import { Backdrop } from './Backdrop'

export function withBackdrop<P extends object>(
  WrappedComponent: ComponentType<P>,
) {
  return function ComponentWithBackdrop(
    props: P & { isOpen: boolean; onClose: () => void },
  ) {
    const { isOpen, onClose, ...restProps } = props

    if (!isOpen) return null

    return (
      <Backdrop onClick={onClose}>
        <WrappedComponent onClose={onClose} {...(restProps as P)} />
      </Backdrop>
    )
  }
}
