import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KioskScreen from "./components/KioskScreen";
import Topup from "./pages/Topup";
import Register from "./pages/Register";
import Test from "./pages/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KioskScreen />} />
        <Route path="/topup" element={<Topup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;