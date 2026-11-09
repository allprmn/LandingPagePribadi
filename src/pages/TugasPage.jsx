import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Folder from '../components/ui/Folder';
import { daftarTugas } from '../data/tugasData';
import { motion } from 'framer-motion';

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
    <div className="min-h-screen bg-[#0F172A] text-slate-200 font-sans p-6 md:p-12 relative overflow-hidden flex flex-col items-center">
      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col items-center">

        <div className="mb-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Kumpulan Tugas</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">Silakan klik folder untuk membuka dan memilih aksi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full justify-items-center">
          {daftarTugas.map((tugas, index) => (
            <motion.div
              key={tugas.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="flex flex-col items-center"
            >
              <Folder
                label={tugas.pertemuan}
                // 4 KERTAS DENGAN AKSI BERBEDA
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

              <div className="mt-4 text-center">
                <h3 className="font-semibold text-white text-lg leading-tight mb-1">{tugas.mataKuliah}</h3>
                <p className="text-sm text-slate-400">{tugas.judul}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/" className="px-6 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold transition-colors">
            Kembali ke Halamana Utama
          </Link>
        </div>
      </div>
    </div>
  );
}