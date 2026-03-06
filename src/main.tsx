import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import NotFoundPage from './Pages/404.tsx'
import PropsPage from './Pages/PropsPage.tsx'
import ConditionalPage from './Pages/ConditionalPage.tsx'
import StatePage from './Pages/StatePage.tsx'
import EffectPage from './Pages/EffectPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/props' element={<PropsPage />} />
        <Route path='/conditional' element={<ConditionalPage />} />
        <Route path='/state' element={<StatePage />} />
        <Route path='/effect' element={<EffectPage />} />
        {/* Default 404 */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
