import { cva, type VariantProps } from 'class-variance-authority'

// ✅ 白底，50% 尺寸，置中，子層100%
export const dialogWrapperStyles = cva(
  'bg-white w-1/2 h-1/2 rounded-lg shadow-lg transition-all relative',
  {
    variants: {
      align: {
        center: 'mx-auto my-auto',
        left: 'ml-0 mr-auto',
        right: 'ml-auto mr-0',
      },
    },
    defaultVariants: {
      align: 'center',
    },
  },
)

export type DialogWrapperVariants = VariantProps<typeof dialogWrapperStyles>

// ✅ 子層樣式：寬度撐滿 wrapper
export const dialogHeaderStyles = cva(
  'w-full h-1/5 px-4 py-3 border-b text-lg font-semibold text-gray-900',
)

export const dialogContentStyles = cva('w-full h-3/5 px-4 py-4 text-sm text-gray-700')

export const dialogFooterStyles = cva(
  'w-full h-1/5 px-4 py-3 border-t flex justify-end gap-2',
)
