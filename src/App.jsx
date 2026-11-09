// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profil from './pages/Profil'
import PengingatTugas from './pages/TugasPage';
import TugasPage from './pages/TugasPage';
import TugasDetailPage from './pages/TugasDetailPage';
import TugasScreenshotPage from './pages/TugasScreenshotPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/pengingat-tugas" element={<PengingatTugas />} />
        <Route path="/tugas" element={<TugasPage />} />
        <Route path="/tugas/:id/detail" element={<TugasDetailPage />} />
        <Route path="/tugas/:id/screenshot" element={<TugasScreenshotPage />} />
      </Routes>
    </Router>
  )
}