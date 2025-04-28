import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Link, useNavigate } from 'react-router-dom'
import { CheckCircle } from 'lucide-react' // 成功圖示

export default function ThankYouPage() {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)

    if (countdown === 0) {
      navigate('/')
    }

    return () => clearInterval(timer)
  }, [countdown, navigate])

  // 模擬訂單編號（隨機產生）
  const orderId = Math.floor(Math.random() * 9000000) + 1000000

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6 p-4">
      <CheckCircle className="h-20 w-20 text-green-500" />
      <h1 className="text-3xl font-bold">感謝您的訂購！</h1>
      <p className="text-muted-foreground">
        我們已收到您的訂單（訂單編號：
        <span className="font-bold">{orderId}</span>）
      </p>
      <p className="text-muted-foreground">{countdown} 秒後將自動返回首頁</p>
      <Button asChild>
        <Link to="/">立即返回首頁</Link>
      </Button>
    </div>
  )
}
