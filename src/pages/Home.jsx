import React from 'react';
import { Link } from 'react-router-dom';
import Plasma from '../components/Plasma';
import Magnet from '../components/ui/Magnet';

export default function Home() {
  return (
    
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col font-sans">
      
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Plasma 
          color="#B497CF"
          speed={1}
          direction="forward"
          scale={1}
          opacity={1}
          mouseInteractive={false}
          renderScale={0.55}
          maxDpr={1.5}
          targetFps={60}
          iterations={60}
        />
      </div>

      {/* ================= NAVBAR (Custom untuk halaman ini) ================= */}
      <header className="relative z-10 w-full flex justify-center pt-6 px-4">
        <nav className="flex items-center justify-between w-full max-w-5xl bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white font-semibold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
              <path d="M2 12h20"></path>
            </svg>
            Aldi Pramana
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#certificates" className="hover:text-white transition-colors">Certificates</a>
          </div>

          {/* Button */}
          <Link to="/profil" className="bg-white text-black text-sm font-semibold px-5 py-2 rounded-full hover:bg-gray-200 transition-colors">
            Profil
          </Link>
        </nav>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
        
        {/* Badge "NEW" */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full p-1 pr-4 mb-6">
          <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full">NEW</span>
          <span className="text-gray-300 text-sm">Creative Portfolio</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl leading-tight mb-6">
          Welcome To My <br className="hidden md:block" /> Landing Page
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <Magnet padding={80} magnetStrength={3}>
            <Link 
              to="/tugas" 
              className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-xl hover:bg-gray-200 transition-colors"
            >
              Lihat Tugas
            </Link>
          </Magnet>

          {/* Tombol Pelajari Lebih Lanjut */}
          <Magnet padding={80} magnetStrength={3}>
            <Link 
              to="#about" 
              className="inline-block bg-white/5 text-white font-semibold px-8 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              Pelajari Lebih Lanjut
            </Link>
          </Magnet>
        </div>
      </main>
    </div>

  );
}