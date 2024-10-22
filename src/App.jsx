import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageLayout from './layouts/PageLayout/PageLayout'
import ClientActivationPage from '@/pages/ClientActivationPage/ClientActivationPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<h1>Home</h1>} />
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
