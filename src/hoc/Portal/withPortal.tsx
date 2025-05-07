// src/components/hoc/withPortal.tsx
import { ComponentType } from 'react'
import { createPortal } from 'react-dom'

type WithPortalProps = {
  containerId?: string // 可選的目標容器 ID，預設為 #portal-root
}

export function withPortal<P extends object>(
  WrappedComponent: ComponentType<P>,
): ComponentType<P & WithPortalProps> {
  // 👈 加上這行：強化型別回傳

  const PortalHOC = ({
    containerId = 'portal-root',
    ...props
  }: P & WithPortalProps) => {
    const container = document.getElementById(containerId)
    if (!container) {
      console.warn(`[withPortal] 容器節點 #${containerId} 不存在，元件將不顯示`)
      return null
    }

    return createPortal(<WrappedComponent {...(props as P)} />, container)
  }

  PortalHOC.displayName = `WithPortal(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`

  return PortalHOC
}
