import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Layout />
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
