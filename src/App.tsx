import './App.css'
import type { JSX } from 'react'
import MainLayout from './layouts/MainLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppRoutes from './layouts/AppRoutes'

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/*" element={<AppRoutes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
