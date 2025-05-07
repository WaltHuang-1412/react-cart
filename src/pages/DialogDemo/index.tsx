import { useState } from 'react'
import { Dialog } from '@/components/Dialog'
import { withBackdrop } from '@/hoc/BackDrop'
import { withPortal } from '@/hoc/Portal'
import { Button } from '@/components/ui/Button'

// 使用兩層 HOC 包起來
const EnhancedDialog = withPortal(withBackdrop(Dialog))

export default function DialogDemoPage() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((prev) => !prev)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">🧪 Dialog 測試頁</h1>
      <Button onClick={toggle}>打開 Dialog</Button>

      <EnhancedDialog isOpen={open} onClose={toggle}>
        <Dialog.Header>這是標題</Dialog.Header>
        <Dialog.Content>這是內容，您可以客製化。</Dialog.Content>
        <Dialog.Footer>
          <Button variant="ghost" onClick={toggle}>
            取消
          </Button>
          <Button onClick={() => alert('送出成功')}>送出</Button>
        </Dialog.Footer>
      </EnhancedDialog>
    </div>
  )
}
