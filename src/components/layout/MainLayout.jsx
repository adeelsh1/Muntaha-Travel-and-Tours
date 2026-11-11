import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import FloatingWhatsApp from '../common/FloatingWhatsApp'

/**
 * MainLayout Component
 * Master layout wrapper supporting single-page and multi-page routing.
 */
export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-warm-white text-charcoal">
      <Header />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

