import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const competencias = [
  { id: "pessoas", label: "Pessoas", path: "/pessoas", svg: "/PESSOAS.svg" },
  { id: "processos", label: "Processos", path: "/processos", svg: "/PROCESSOS.svg" },
  { id: "comercio", label: "Comércio", path: "/comercio", svg: "/COMÉRCIO.svg" },
  { id: "sistema", label: "Sistema de Gestão", path: "/sistema", svg: "/SISTEMA DE GESTÃO.svg" }
];

function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Circo de Auto-Avaliação Pecuária</h1>
      <div className="relative w-full max-w-3xl">
        <img src="/CIRCULAR.svg" alt="Infográfico Circular" className="w-full" />
        <div className="absolute inset-0 flex flex-wrap justify-center items-center pointer-events-none">
          {competencias.map((c) => (
            <div key={c.id} className="w-1/2 h-1/2 flex justify-center items-center">
              <div className="pointer-events-auto flex flex-col items-center">
                <label htmlFor={`nota-${c.id}`} className="text-sm mb-1">{c.label}</label>
                <select id={`nota-${c.id}`} name={c.id} className="border p-1 text-sm">
                  {[...Array(11).keys()].map(n => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
                <Link to={c.path} className="text-blue-600 underline text-sm mt-1">Ver mais</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CompetenciaPage({ svg, label }) {
  return (
    <div className="min-h-screen bg-white text-black p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">{label}</h2>
      <img src={svg} alt={label} className="max-w-4xl w-full" />
      <Link to="/" className="mt-6 text-blue-600 underline">Voltar</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {competencias.map(c => (
          <Route key={c.id} path={c.path} element={<CompetenciaPage svg={c.svg} label={c.label} />} />
        ))}
      </Routes>
    </Router>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);