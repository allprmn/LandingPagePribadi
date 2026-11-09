import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { daftarTugas } from '../data/tugasData';
import Masonry from '../components/ui/Masonry';
import { motion } from 'framer-motion';

export default function TugasScreenshotPage() {
  const { id } = useParams();
  const tugas = daftarTugas.find(t => t.id === id);

  if (!tugas) return <div className="text-white text-center mt-20">Tugas tidak ditemukan.</div>;

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-200 p-6 md:p-12 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="max-w-6xl w-full flex flex-col items-center"
      >
        <h1 className="text-3xl font-bold text-white mb-2 text-center">Screenshot: {tugas.judul}</h1>
        <p className="text-slate-400 text-center mb-10">Dokumentasi antarmuka aplikasi</p>
        
        {/* ================= KOMPONEN MASONRY ================= */}
        <div className="w-full">
          <Masonry
            items={tugas.screenshots}
            columnWidth={300}
            gap={16} 
            radius={16}      
            animateFrom="bottom" 
            hoverEffect="zoom"   
            lightbox           
            draggable        
            columns="auto"   
            stagger={0.1} 
            duration={0.6}
            bounce={0.15}
            blurToFocus
            focusOnHover={false}
            parallax={0}
            revealOnScroll
          />
        </div>

        <div className="text-center mt-12">
          <Link to="/tugas" className="px-6 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold transition-colors">
            Kembali ke Daftar Tugas
          </Link>
        </div>
      </motion.div>
    </div>
  );
}