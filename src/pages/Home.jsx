import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

import image from '../assets/logo.webp';
import imgPerson from '../assets/img-person.webp';
import mountain from '../assets/mountain.webp';
import mountainRemovebg from '../assets/mountain-removebg.webp';
import line1 from '../assets/line-1.svg';
import line2 from '../assets/line-2.svg';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const shortcuts = [
    {
      label: "GitHub",
      href: "https://github.com/allprmn",
      icon: (
        <svg className="w-[18px] h-[18px] text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://instagram.com/all_prmn14",
      icon: (
        <svg className="w-[18px] h-[18px] text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aldi-pramana-732828430/",
      icon: (
        <svg className="w-[18px] h-[18px] text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
          <rect width="4" height="12" x="2" y="9" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // --- ANIMASI SCROLL ---
  const scaleMountain = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scalePerson = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const yPerson = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Konfigurasi Animasi Masuk (Smooth & Ringan)
  const entranceTransition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

  return (
    <div className="relative w-full bg-black font-sans overflow-hidden">

      <section
        ref={heroRef}
        className="relative w-full h-[100dvh] bg-black flex items-center justify-center p-2 md:p-4 z-10"
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">

          {/* 1. GUNUNG (Dari Bawah) */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ ...entranceTransition, delay: 0 }}
            className="absolute inset-0 z-0 will-change-transform"
          >
            <img
              className="absolute top-0 left-0 w-full h-full object-cover origin-center"
              src={mountain}
            />
            <motion.img
              style={{ scale: scaleMountain }}
              className="absolute top-0 left-0 w-full h-full object-cover origin-center"
              src={mountainRemovebg}
            />
          </motion.div>

          {/* 2. TEKS (Dari Bawah - Menyusul) */}
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...entranceTransition, delay: 0.2 }}
            className="absolute top-[35%] left-0 w-full z-10 will-change-transform"
          >
            <motion.h1
              style={{ y: yText, opacity: opacityText, scale: scaleText }}
              className="text-center font-black text-white text-[14vw] tracking-tighter origin-center"
            >
              Aldi Pramana
            </motion.h1>
          </motion.div>

          {/* 3. ORANG (Dari Bawah - Menyusul) */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ ...entranceTransition, delay: 0.4 }}
            className="absolute inset-0 z-20 pointer-events-none will-change-transform"
          >
            <motion.img
              style={{ y: yPerson, scale: scalePerson }}
              className="absolute top-0 left-0 w-full h-full object-cover origin-bottom"
              src={imgPerson}
            />
          </motion.div>

          {/* 4. NAVBAR (Dari Bawah - Menyusul Terakhir) */}
          <motion.header
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...entranceTransition, delay: 0.6 }}
            className="absolute top-6 left-0 w-full z-50 px-6 md:px-12 flex justify-between items-center will-change-transform"
          >
            <div className="relative z-10 flex items-center gap-2.5">
              <button
                type="button"
                aria-expanded={menuOpen}
                className={`w-[43px] h-[43px] shrink-0 flex flex-col gap-[6px] bg-white rounded-full items-center justify-center hover:bg-gray-200 transition-all duration-300 cursor-pointer ${menuOpen ? "rotate-90" : "rotate-0"
                  }`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <img className="w-[18px] h-px" src={line1} alt="" />
                <img className="w-[18px] h-px" src={line2} alt="" />
              </button>

              <div
                className={`flex items-center gap-2 py-1 transition-all duration-300 ${menuOpen ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0 overflow-hidden pointer-events-none"
                  }`}
              >
                {shortcuts.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.label}
                    style={{ transitionDelay: menuOpen ? `${index * 60}ms` : "0ms" }}
                    className={`w-[43px] h-[43px] shrink-0 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-200 hover:scale-105 transition-all duration-300 ${menuOpen ? "translate-x-0 scale-100 opacity-100" : "-translate-x-4 scale-75 opacity-0"
                      }`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 h-[51px] w-[68px]">
              <img className="w-full h-full object-contain" alt="Logo" src={image} />
            </div>

            <a
              className="px-6 py-2.5 bg-white text-black font-medium text-sm rounded-full hover:bg-gray-200 transition-colors"
              href="/Profil"
            >
              Profil
            </a>
          </motion.header>
        </div>
      </section>

      {/* ================= SECTION 2: READY TO BEGIN (FOOTER) ================= */}
      <section className="relative z-30 bg-black w-full min-h-screen flex flex-col justify-between overflow-hidden border-t border-white/10">

        {/* Konten Utama */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-20">

          {/* Teks Raksasa di Belakang */}
          <div className="absolute bottom-0 left-0 w-full flex justify-center overflow-hidden pointer-events-none">
            <h1 className="text-[20vw] font-black text-white/5 leading-none tracking-tighter translate-y-[30%] select-none">
              ALDI PRAMANA
            </h1>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-12 text-center relative z-20"
          >
            Kumpulan Semua Tugas
          </motion.h2>

          {/* Tombol Navigasi ke Tugas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 mb-8 relative z-20"
          >
            <Link to="/tugas" className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all hover:scale-105">
              Lihat Semua Tugas
            </Link>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <div className="relative z-20 w-full px-8 py-3 flex flex-col md:flex-row items-center justify-center border-t border-white/10 text-xs font-medium text-gray-500">
          <p className="text-center">© 2026 ALDI PRAMANA. ALL RIGHTS RESERVED.</p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-3 md:mt-0 md:absolute md:right-8 w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
          </button>
        </div>
      </section>

    </div>
  );
}