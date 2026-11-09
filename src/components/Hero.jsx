import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import profileImage from '../assets/profile.png'
import MagicBento from './ui/MagicBento'; 
import SpecularButton from './SpecularButton';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  const handleConfirmDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowModal(false);
  };

  const bentoItems = [
    // 1. HERO BLOCK (Foto Kiri, Teks Kanan, Tombol Bawah)
    {
      id: 'hero-block',
      colSpan: 2,
      rowSpan: 2,
      content: (
        <div className="flex flex-col h-full w-full justify-between p-2 sm:p-4">
          
          {/* Bagian Atas: Foto & Teks */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Foto Profil */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 border-2 border-slate-700 shadow-xl relative group">
              <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src={profileImage} 
                alt="Aldi Pramana" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Teks Singkat */}
            <div className="flex flex-col text-center sm:text-left flex-1">
              <span className="text-sm font-medium text-purple-400 mb-1">Hi, saya</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight tracking-tight">
                Aldi Pramana
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Pengembangan aplikasi dan web yang berfokus pada desain mobile, performance tinggi, dan kolaboratif teknologi terkini. Berpengalaman membangun aplikasi mobile, website interaktif, serta mengintegrasikan teknologi digital.
              </p>
            </div>
          </div>

          {/* Bagian Bawah: Tombol Aksi */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-6">
            <SpecularButton
              size="sm"
              radius={10}
              textColor="#ffffff"
              lineColor="#a78bfa"
              baseColor="#7C3AED"
              intensity={1}
              onClick={() => setShowModal(true)}
            >
              Download CV
            </SpecularButton>
            <SpecularButton
              size="sm"
              radius={10}
              textColor="#A78BFA"
              lineColor="#7C3AED"
              baseColor="#1e293b"
              intensity={1}
              onClick={() => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Lihat Sertifikat
            </SpecularButton>
          </div>
        </div>
      )
    },
    
       // 2. KEAHLIAN (SKILLS)
    {
      id: 'skills',
      colSpan: 1,
      rowSpan: 1,
      content: (
        <div className="flex flex-col h-full w-full">
          <div className="text-xs font-semibold text-slate-200 mb-2 uppercase tracking-wider">SKILLS</div>
          
          <div className="grid grid-cols-3 gap-2 mt-auto mb-auto">
            {/* React */}
            <div className="flex flex-col items-center gap-1 group" title="React">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center group-hover:bg-slate-700 group-hover:border-blue-500/50 transition-all">
                <img src="https://cdn.simpleicons.org/react/white" alt="React" className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            
            {/* Node.js */}
            <div className="flex flex-col items-center gap-1 group" title="Node.js">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center group-hover:bg-slate-700 group-hover:border-green-500/50 transition-all">
                <img src="https://cdn.simpleicons.org/nodedotjs/white" alt="Node.js" className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </div>
            </div>

            {/* Java (Menggunakan SVG Langsung) */}
            <div className="flex flex-col items-center gap-1 group" title="Java">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center group-hover:bg-slate-700 group-hover:border-red-500/50 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform">
                  <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.445-.699 14.977-1.82M9.292 13.249s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.585c-4.426 1.164-12.981.622-10.519-.568 2.082-1.006 3.773-.89 3.773-.89M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.087 2.984-.931 4.562 0-.001.071-.062.093-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.838-2.274-2.053-3.943-3.858-2.824-5.539C11.055 4.794 15.203 3.717 14.401 0M9.734 23.924c4.322.277 10.959-.153 11.116-2.194 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.635"/>
                </svg>
              </div>
            </div>

            {/* SQL */}
            <div className="flex flex-col items-center gap-1 group" title="SQL">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center group-hover:bg-slate-700 group-hover:border-orange-500/50 transition-all">
                <img src="https://cdn.simpleicons.org/mysql/white" alt="SQL" className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </div>
            </div>

            {/* Tailwind */}
            <div className="flex flex-col items-center gap-1 group" title="Tailwind CSS">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center group-hover:bg-slate-700 group-hover:border-cyan-500/50 transition-all">
                <img src="https://cdn.simpleicons.org/tailwindcss/white" alt="Tailwind" className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </div>
            </div>

            {/* Supabase */}
            <div className="flex flex-col items-center gap-1 group" title="Supabase">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center group-hover:bg-slate-700 group-hover:border-green-500/50 transition-all">
                <img src="https://cdn.simpleicons.org/supabase/white" alt="Supabase" className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 3. ALAT (TOOLS)
    {
      id: 'tools',
      colSpan: 1,
      rowSpan: 1,
      content: (
        <div className="flex flex-col h-full w-full">
          <div className="text-xs font-semibold text-slate-200 mb-2 uppercase tracking-wider">TOOLS</div>
          
          <div className="grid grid-cols-3 gap-2 mt-auto mb-auto">
            {/* Figma */}
            <div className="flex flex-col items-center gap-1 group" title="Figma">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center group-hover:bg-slate-700 group-hover:border-pink-500/50 transition-all">
                <img src="https://cdn.simpleicons.org/figma/white" alt="Figma" className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </div>
            </div>

            {/* VS Code (Menggunakan SVG Langsung) */}
            <div className="flex flex-col items-center gap-1 group" title="VS Code">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center group-hover:bg-slate-700 group-hover:border-blue-500/50 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform">
                  <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
                </svg>
              </div>
            </div>

            {/* Docker */}
            <div className="flex flex-col items-center gap-1 group" title="Docker">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center group-hover:bg-slate-700 group-hover:border-blue-400/50 transition-all">
                <img src="https://cdn.simpleicons.org/docker/white" alt="Docker" className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </div>
            </div>

            {/* Git */}
            <div className="flex flex-col items-center gap-1 group" title="Git">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center group-hover:bg-slate-700 group-hover:border-orange-500/50 transition-all">
                <img src="https://cdn.simpleicons.org/git/white" alt="Git" className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </div>
            </div>

            {/* Postman */}
            <div className="flex flex-col items-center gap-1 group" title="Postman">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center group-hover:bg-slate-700 group-hover:border-orange-400/50 transition-all">
                <img src="https://cdn.simpleicons.org/postman/white" alt="Postman" className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </div>
            </div>

            {/* XAMPP */}
            <div className="flex flex-col items-center gap-1 group" title="XAMPP">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center group-hover:bg-slate-700 group-hover:border-orange-500/50 transition-all">
                <img src="https://cdn.simpleicons.org/xampp/white" alt="XAMPP" className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      )
    },

    // 4. ABOUT ME 
    {
      id: 'about-me',
      colSpan: 2,
      rowSpan: 2,
      content: (
        <div className="flex flex-col h-full w-full">
          <div className="text-sm font-semibold text-slate-200 mb-3 uppercase tracking-wider">About Me</div>
          <div className="flex-1 overflow-y-auto pr-2 text-[13px] text-slate-400 leading-relaxed space-y-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <p>
              Saya Aldi Pramana, Mahasiswa Teknik Informatika yang berfokus pada perancangan dan pengembangan produk digital. Memiliki kombinasi keahlian di bidang UI/UX & Desain Grafis, Web Development (Java & PHP), serta Digital Content Creation (Image & Video Editing).
            </p>
            <p>
              Terbiasa mentransformasikan ide visual menjadi antarmuka aplikasi yang intuitif serta membangun sistem back-end yang andal. Selalu antusias untuk mempelajari teknologi baru dan berkolaborasi dalam menciptakan solusi digital yang berdampak.
            </p>
          </div>
        </div>
      )
    },

    // 5. PLACEHOLDER: AUTOMATION
     {
      id: 'social-links',
      colSpan: 2,
      rowSpan: 1,
      content: (
        <div className="flex flex-col h-full w-full justify-between">
          <div className="text-sm font-semibold text-slate-200 mb-3 uppercase tracking-wider">Connect with me</div>
          
          <div className="grid grid-cols-2 gap-3 mt-auto">
            {/* GitHub */}
            <a 
              href="https://github.com/allprmn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/40 hover:bg-slate-700/60 border border-slate-700/50 hover:border-slate-600 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-slate-300 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-200 group-hover:text-white">GitHub</span>
                <span className="text-[10px] text-slate-500">@allprmn</span>
              </div>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/aldi-pramana-732828430/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/40 hover:bg-slate-700/60 border border-slate-700/50 hover:border-blue-500/50 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-slate-300 group-hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-200 group-hover:text-white">LinkedIn</span>
                <span className="text-[10px] text-slate-500">Aldi Pramana</span>
              </div>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/all_prmn14/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/40 hover:bg-slate-700/60 border border-slate-700/50 hover:border-pink-500/50 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-slate-300 group-hover:text-pink-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-200 group-hover:text-white">Instagram</span>
                <span className="text-[10px] text-slate-500">@all_prmn14</span>
              </div>
            </a>

            {/* Email */}
            <a 
              href="mailto:aldipramanaaldi9@gmail.com" 
              className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/40 hover:bg-slate-700/60 border border-slate-700/50 hover:border-purple-500/50 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-slate-300 group-hover:text-purple-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-200 group-hover:text-white">Email</span>
                <span className="text-[10px] text-slate-500">Hubungi Saya</span>
              </div>
            </a>
          </div>
        </div>
      )
    },
    // 6. PROYEK 1 (Menggantikan GitHub Stats)
    {
      id: 'project-1',
      colSpan: 1,
      rowSpan: 1,
      content: (
        <a 
          href="https://tugas.aldipramana.my.id" // Ganti dengan link proyek 1
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full h-full flex flex-col justify-between group cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold px-2 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/20">
              React & Supabase
            </span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-slate-500 group-hover:text-white transition-colors"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-sm leading-tight group-hover:text-purple-400 transition-colors">
              TugasKuliah
            </h4>
            <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
              Manajemen Tugas Mahasiswa
            </p>
          </div>
        </a>
      )
    },

    // 7. PROYEK 2 (Menggantikan Contact)
    {
      id: 'project-2',
      colSpan: 1,
      rowSpan: 1,
      content: (
        <a 
          href="https://www.pediapainbuddy.web.id/"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full h-full flex flex-col justify-between group cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold px-2 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/20">
              React & Node.js
            </span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-slate-500 group-hover:text-white transition-colors"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-sm leading-tight group-hover:text-blue-400 transition-colors">
              Pedia Painbuddy
            </h4>
            <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
              Edukasi Nyeri & Manajemen Nyeri
            </p>
          </div>
        </a>
      )
    },
  ];

  return (
    <header 
      id="home" 
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black pt-24 pb-12 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
        </motion.div>

        <MagicBento
          items={bentoItems}
          columns={4}
          rowHeight={200}
          gap={12}
          radius={20}
          enableBorderGlow
          enableSpotlight
          spotlightRadius={300}
          clickEffect
          enableStars={false}
          particleCount={24}
          enableTilt={false}
          enableMagnetism={false}
          textAutoHide={false}
          intro
          className="w-full"
        />
      </div>

      {/* MODAL KONFIRMASI DOWNLOAD CV */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-slate-900 border border-slate-800 rounded-2xl max-w-sm w-full p-6 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 10 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-bold text-white text-center mb-2">
                Unduh CV?
              </h3>
              <p className="text-slate-400 text-center text-sm mb-6">
                Kamu akan mengunduh file CV dalam format PDF.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-colors"
                >
                  Batal
                </button>
                <button
                  onClick={handleConfirmDownload}
                  className="flex-1 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium transition-colors"
                >
                  Ya, Unduh
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  )
}