// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KronosisLanding from "./pages/KronosisLanding";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KronosisLanding />} />

        {/* add more routes here as needed, e.g.
            <Route path="/products" element={<ProductsPage />} />
        */}
      </Routes>
    </BrowserRouter>
  );
}
