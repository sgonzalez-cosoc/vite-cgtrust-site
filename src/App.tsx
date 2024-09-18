import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <>
      <Layout />
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
