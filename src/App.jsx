import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import PageLayout from './layouts/PageLayout/PageLayout'
import ClientActivationPage from '@/pages/ClientActivationPage/ClientActivationPage'
import InstallationRequestsPage from './pages/InstallationRequestsPage/InstallationRequestsPage'
import InstallationDetail from './pages/InstallationDetail/InstallationDetail'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} pageTitle={'home'} />
          <Route path="instalaciones" pageTitle={'Instalaciones'}>
            <Route index element={<InstallationRequestsPage />} />
            <Route
              path="formato-de-activacion"
              element={<ClientActivationPage />}
            />
            <Route path=":id" element={<InstallationDetail />} />
          </Route>
        </Route>

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
