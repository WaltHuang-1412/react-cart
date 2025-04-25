import { ReactNode } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-full w-full">
      <Header />
      <main className="overflow-y-scroll scroll-hidden">{children}</main>
      <Footer />
    </div>
  )
}
