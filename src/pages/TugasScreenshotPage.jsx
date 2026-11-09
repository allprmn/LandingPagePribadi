import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { daftarTugas } from '../data/tugasData';
import Masonry from '../components/ui/Masonry';
import Magnet from '../components/ui/Magnet';
import { motion } from 'framer-motion';

export default function TugasScreenshotPage() {
    const { id } = useParams();
    const tugas = daftarTugas.find(t => t.id === id);

    if (!tugas) return <div className="text-white text-center mt-20">Tugas tidak ditemukan.</div>;

    return (
        <div className="min-h-screen bg-black text-slate-200 p-6 md:p-12 flex flex-col items-center">
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

                <div className="flex flex-wrap justify-center items-start gap-12 md:gap-20 w-full max-w-5xl mx-auto mt-8">
                    <Magnet padding={50} magnetStrength={3}>
                        <Link
                            to="/tugas"
                            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-5 py-2.5 text-sm rounded-xl hover:bg-gray-200 transition-colors shadow-xl"
                        >
                            Kembali ke Tugas
                        </Link>
                    </Magnet>
                </div>
            </motion.div>
        </div>
    );
}