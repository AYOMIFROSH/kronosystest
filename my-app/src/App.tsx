// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KronosisLanding from "./pages/KronosisLanding";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KronosisLanding />} />


      </Routes>
    </BrowserRouter>
  );
}
