import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Folder from '../components/ui/Folder';
import Magnet from '../components/ui/Magnet';
import { daftarTugas } from '../data/tugasData';
import { motion } from 'framer-motion';

// 1. Definisikan varian animasi untuk Container dan Item
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15, // Jeda antar item (judul, folder, tombol)
      delayChildren: 0.1 
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 250, damping: 20 } 
  }
};

export default function TugasPage() {
  const navigate = useNavigate(); // Gunakan navigate untuk pindah halaman internal

  const handleItemClick = (item) => {
    if (!item || !item.data) return;

    const tugas = item.data;
    if (item.action === 'app') {
      window.open(tugas.linkApp, '_blank');
    } else if (item.action === 'repo') {
      window.open(tugas.linkRepo, '_blank');
    } else if (item.action === 'screenshot') {
      navigate(`/tugas/${tugas.id}/screenshot`); // Pindah ke halaman screenshot
    } else if (item.action === 'detail') {
      navigate(`/tugas/${tugas.id}/detail`); // Pindah ke halaman detail
    }
  };

  return (
    <div className="min-h-screen bg-black text-slate-200 font-sans p-6 md:p-12 relative overflow-hidden flex flex-col items-center">
      
      {/* 2. Terapkan containerVariants ke pembungkus utama */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl w-full mx-auto relative z-10 flex flex-col items-center mt-4"
      >

        {/* 3. Terapkan itemVariants ke Header */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Kumpulan Tugas</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">Silakan klik folder untuk membuka dan memilih aksi.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full justify-items-center">
           {daftarTugas.map((tugas) => (
            // 4. Hapus initial/animate manual di sini, ganti dengan itemVariants
            <motion.div 
              key={tugas.id}
              variants={itemVariants}
              className="flex flex-col items-center w-[280px] sm:w-[320px]"
            >
              {/* Folder Wrapper */}
              <div className="relative">
                {/* Efek Glow di belakang folder */}
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-2xl scale-125 -z-10"></div>
                <Folder
                  label={tugas.pertemuan}
                  items={[
                    { title: "Buka Web", action: "app", data: tugas },
                    { title: "Source Code", action: "repo", data: tugas },
                    { title: "Screenshot", action: "screenshot", data: tugas },
                    { title: "Detail Tugas", action: "detail", data: tugas },
                  ]}
                  onItemClick={handleItemClick}
                  mode="flap"
                  variant="solid"
                  layout="spread"
                  color="#7aa7ff"
                  paperColor="#ffffff"
                  openOn="click"
                  size={0.9}
                  theme="dark"
                  peek
                  zoomOnClick
                />
              </div>
              
              {/* Area Teks di bawah folder */}
              <div className="mt-8 text-center w-full px-2">
                <h3 className="font-bold text-white text-lg leading-snug line-clamp-1" title={tugas.mataKuliah}>
                  {tugas.mataKuliah}
                </h3>
                <p className="text-sm text-slate-400 mt-1 line-clamp-2" title={tugas.judul}>
                  {tugas.judul}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 5. Terapkan itemVariants ke area tombol */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center items-start gap-12 md:gap-20 w-full max-w-5xl mx-auto mt-16"
        >
          <Magnet padding={50} magnetStrength={3}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white text-black font-semibold px-5 py-2.5 text-sm rounded-xl hover:bg-gray-200 transition-colors shadow-xl"
            >
              Beranda
            </Link>
          </Magnet>
        </motion.div>
      </motion.div>
    </div>
  );
}