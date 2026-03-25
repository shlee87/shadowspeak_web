import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="page-shell">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
