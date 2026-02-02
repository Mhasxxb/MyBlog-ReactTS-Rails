import './App.css'
import type { JSX } from 'react'
import MainLayout from './Layout/MainLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppRoutes from './Session/AppRoutes'

function App(): JSX.Element {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/*" element={<AppRoutes />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
