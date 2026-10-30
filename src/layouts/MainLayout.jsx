import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import HospitalTopBar from '../components/HospitalTopBar.jsx'
import Navbar from '../components/Navbar.jsx'

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <HospitalTopBar />
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      <ScrollRestoration />
    </div>
  )
}

export default MainLayout