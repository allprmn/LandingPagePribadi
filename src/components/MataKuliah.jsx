import React, { useRef, useState, useEffect } from 'react'
import SplitText from "./SplitText";

// Data jadwal mata kuliah kamu
const mataKuliah = [
  { no: 1, nama: "20100470501024 - Manajemen Basis Data - SMT 5", kelas: "A", sks: 3, ruang: "R.4.09", hari: "Senin", waktu: "09:30:00 s/d 12:00:00", dosen: "- Wildan Budiawan Zulfikar S.T., M.Kom." },
  { no: 2, nama: "20100470501026 - Jaringan Komputer - SMT 5", kelas: "A", sks: 3, ruang: "R.4.11", hari: "Rabu", waktu: "09:30:00 s/d 12:00:00", dosen: "- Cecep Nurul Alam M.T." },
  { no: 3, nama: "20100470501028 - Pengembangan Aplikasi Mobile - SMT 5", kelas: "A", sks: 3, ruang: "R.4.01", hari: "Kamis", waktu: "09:30:00 s/d 12:00:00", dosen: "- H. Aldy Rialdy Atmadja M.T" },
  { no: 4, nama: "20100470501030 - Pengembangan Aplikasi Web - SMT 5", kelas: "A", sks: 3, ruang: "R.4.01", hari: "Kamis", waktu: "15:30:00 s/d 18:00:00", dosen: "- Muhammad Deden Firdaus ST, M.Kom" },
  { no: 5, nama: "20100470501032 - Interaksi Manusia dan Komputer - SMT 5", kelas: "A", sks: 3, ruang: "R.4.01", hari: "Rabu", waktu: "07:00:00 s/d 09:30:00", dosen: "- Dr. Cepy Slamet S.T., M.Kom." },
  { no: 6, nama: "20100470501033 - Intelegensia Buatan - SMT 5", kelas: "A", sks: 3, ruang: "R.4.10", hari: "Selasa", waktu: "15:30:00 s/d 18:00:00", dosen: "- Jumadi ST., M.Cs." },
  { no: 7, nama: "20100470501034 - Manajemen Proyek Perangkat Lunak - SMT 5", kelas: "A", sks: 3, ruang: "R.4.01", hari: "Senin", waktu: "07:00:00 s/d 09:30:00", dosen: "- Agung Wahana S.E., M.T." },
  { no: 8, nama: "20100470503006 - Kewirausahaan & Etika Bisnis - SMT 7", kelas: "A", sks: 2, ruang: "R.4.11", hari: "Selasa", waktu: "10:20:00 s/d 12:00:00", dosen: "- Adam Farooqi ST., MT." },
]

export default function About() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Fungsi untuk cek posisi scroll dan update tombol panah
  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1)
  }

  useEffect(() => {
    checkScroll()
    const el = scrollRef.current
    if (el) {
      el.addEventListener('scroll', checkScroll)
      window.addEventListener('resize', checkScroll)
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  const scrollByAmount = (direction) => {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth * 0.7 // 70% dari lebar container
    el.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <section id="about" className="w-full py-20 px-4 md:px-10 bg-black text-slate-200">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <div>
            <div className="flex justify-center mb-8">
              <SplitText
                text="Jadwal Mata Kuliah Semester Ini"
                className="text-2xl font-semibold text-center"
                delay={50}
                duration={1.25}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
                showCallback
              />
            </div>
            <p className="text-xs text-slate-500 mt-1 md:hidden">
              Geser tabel atau klik tombol panah →
            </p>
          </div>

          {/* Tombol Panah (hanya tampil di mobile & tablet) */}
          <div className="flex gap-2 lg:hidden">
            <button
              onClick={() => scrollByAmount(-1)}
              disabled={!canScrollLeft}
              aria-label="Geser ke kiri"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${canScrollLeft
                ? 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600 cursor-pointer'
                : 'bg-slate-800/50 border-slate-800 text-slate-600 cursor-not-allowed'
                }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={() => scrollByAmount(1)}
              disabled={!canScrollRight}
              aria-label="Geser ke kanan"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${canScrollRight
                ? 'bg-indigo-600 border-indigo-500 text-white hover:bg-indigo-700 cursor-pointer'
                : 'bg-slate-800/50 border-slate-800 text-slate-600 cursor-not-allowed'
                }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Container Tabel dengan Scroll Horizontal */}
        <div className="relative">
          {/* Gradient Fade Kiri (hanya muncul saat bisa scroll kiri) */}
          {canScrollLeft && (
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-900 to-transparent z-10" />
          )}
          {/* Gradient Fade Kanan (hanya muncul saat bisa scroll kanan) */}
          {canScrollRight && (
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-900 to-transparent z-10" />
          )}

          <div
            ref={scrollRef}
            className="w-full overflow-x-auto rounded-xl border border-slate-700 bg-slate-800 custom-scrollbar"
          >
            <table className="min-w-[900px] text-left text-sm whitespace-nowrap">
              {/* Header Tabel */}
              <thead className="bg-slate-700 text-slate-300 uppercase text-xs font-semibold tracking-wider">
                <tr>
                  <th className="px-6 py-4">No</th>
                  <th className="px-6 py-4">Matakuliah</th>
                  <th className="px-6 py-4">Kelas</th>
                  <th className="px-6 py-4 text-center">SKS</th>
                  <th className="px-6 py-4">Ruang</th>
                  <th className="px-6 py-4">Hari</th>
                  <th className="px-6 py-4">Waktu</th>
                  <th className="px-6 py-4">Dosen</th>
                </tr>
              </thead>

              {/* Isi Tabel */}
              <tbody className="divide-y divide-slate-700">
                {mataKuliah.map((item, index) => (
                  <tr
                    key={item.no}
                    className={`transition-colors hover:bg-slate-700/50 ${index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-800/50'}`}
                  >
                    <td className="px-6 py-4 text-slate-300">{item.no}</td>
                    <td className="px-6 py-4 font-medium text-white">{item.nama}</td>
                    <td className="px-6 py-4 text-slate-300">{item.kelas}</td>
                    <td className="px-6 py-4 text-center text-slate-300">{item.sks}</td>
                    <td className="px-6 py-4 text-slate-300">{item.ruang}</td>
                    <td className="px-6 py-4 text-slate-300">{item.hari}</td>
                    <td className="px-6 py-4 text-slate-300">{item.waktu}</td>
                    <td className="px-6 py-4 text-slate-400">{item.dosen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* CSS Custom untuk Scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1e293b;
          border-radius: 0 0 12px 12px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #7C3AED;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6D28D9;
        }
        /* Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #7C3AED #1e293b;
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </section>
  )
}