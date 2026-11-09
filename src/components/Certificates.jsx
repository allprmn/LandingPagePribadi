import React, { useState } from 'react';
import ChromaGrid from './ui/ChromaGrid';
import { certificates } from '../data';
import BlurText from "./BlurText";

export default function Certificates() {
  // State untuk menyimpan sertifikat yang sedang diklik (untuk modal)
  const [selectedCert, setSelectedCert] = useState(null);

  // Daftar warna aksen untuk efek glow di setiap card
  const accentColors = ['#a78bfa', '#3fb8ff', '#4edea3', '#f472b6', '#fbbf24'];

  // Konversi data dari data.js ke format yang dibutuhkan ChromaGrid
  const gridItems = certificates.map((cert, index) => ({
    image: cert.image,
    title: cert.title,
    subtitle: cert.issuer, // Menggunakan nama penerbit sebagai subjudul
    accent: accentColors[index % accentColors.length], // Warna bergantian
    originalData: cert, // Simpan data asli untuk modal
  }));

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  // Handler saat card diklik
  const handleItemClick = (item) => {
    // Kita cek apakah ChromaGrid mengembalikan objek item atau index
    // Jika item memiliki originalData, kita gunakan itu.
    if (item && item.originalData) {
      setSelectedCert(item.originalData);
    }
  };

  return (
    <section id="certificates" className="w-full py-20 px-4 bg-black text-slate-200 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
         <div className="flex justify-center mb-4">
          <BlurText
            text="Licenses & Certifications"
            delay={200}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl md:text-5xl font-bold text-white text-center"
          />
        </div>

        <p className="text-center text-slate-400 mb-12">
          Klik pada kartu untuk melihat detail sertifikat
        </p>

        {/* ================= CHROMA GRID ================= */}
        <div className="w-full">
          <ChromaGrid 
            items={gridItems}
            onItemClick={handleItemClick} // <-- Pastikan ChromaGrid mendukung prop ini
            columns={3}
            minCardWidth={200}
            gap={16}
            radius={260} // Radius spotlight
            aspectRatio="4 / 3"
            cardRadius={20}
            showInfo={true}
            frame={false}
            softness={0.6}
            damping={0.45}
            fadeOut={0.6}
            grayscale={0.5} // Sedikit grayscale agar warna accent lebih menonjol
            dim={0.15}
            glow={0.6}
            borderGlow={1}
          />
        </div>

      </div>

      {/* ================= MODAL DETAIL SERTIFIKAT ================= */}
      {/* (Kode Modal ini tetap sama persis seperti sebelumnya) */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedCert(null)} 
        >
          <div 
            className="bg-slate-900 rounded-2xl max-w-3xl w-full p-6 md:p-8 relative shadow-2xl border border-slate-700 animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 hover:bg-red-500 rounded-full w-8 h-8 flex items-center justify-center transition-colors z-10"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  className="w-full h-auto rounded-xl object-contain bg-black border border-slate-800"
                />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedCert.title}</h3>
                <p className="text-purple-400 font-medium mb-1">{selectedCert.issuer}</p>
                <p className="text-slate-400 text-sm mb-4">{selectedCert.date}</p>
                <p className="text-slate-300 leading-relaxed mb-6">{selectedCert.detail}</p>
                
                <a 
                  href={selectedCert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Lihat Sertifikat Asli →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}