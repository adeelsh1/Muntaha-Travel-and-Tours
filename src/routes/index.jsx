import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import Home from '../pages/Home'
import Destinations from '../pages/Destinations'

/**
 * AppRoutes Component
 * Centralized router configuration supporting Home and Destinations pages.
 */
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Default / Homepage Route */}
          <Route index element={<Home />} />

          {/* Destinations Catalog Page */}
          <Route path="destinations" element={<Destinations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
