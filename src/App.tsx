import "./App.css";
import type { JSX } from "react";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoutes from "./layouts/AppRoutes";
import ToastListener from "./helpers/ToastListener";
import { AuthProvider } from "./context/AuthenticateContext";

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ToastListener />
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/*" element={<AppRoutes />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
