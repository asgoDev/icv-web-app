import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ClientActivationPage from '@/pages/ClientActivationPage/ClientActivationPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} pageTitle={'home'} />
        <Route
          path="formato-de-activacion"
          element={<ClientActivationPage />}
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
