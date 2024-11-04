import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageLayout from './layouts/PageLayout/PageLayout'
import HomePage from './pages/HomePage/HomePage'
import ClientActivationPage from '@/pages/ClientActivationPage/ClientActivationPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="formato-de-activacion"
            element={<ClientActivationPage />}
          />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
