import React from 'react';
import AccordionGallery from './AccordionGallery'; // Sesuaikan path jika ada di folder 'ui'
import { education } from '../data';
import BlurText from "./BlurText";

export default function Education() {
  // Konversi data dari data.js ke format AccordionGallery
  const galleryItems = education.map((item) => ({
    image: item.image,
    label: `${item.institution} (${item.year})`, // Label yang muncul di accordion
    link: item.link,
  }));

   const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

  return (
    <section id="education" className="w-full py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-center items-center mb-8">
          <BlurText
            text="Educational Background"
            delay={200}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl md:text-4xl font-bold text-white text-center"
          />
        </div>

        <p className="text-center text-slate-400 mb-12">
          Perjalanan pendidikan yang membentuk saya
        </p>

        {/* ================= ACCORDION GALLERY ================= */}
        <div className="w-full">
          <AccordionGallery
            items={galleryItems}
            defaultIndex={3} // Membuka kartu terakhir (UIN) secara default
            expandRatio={0.52}
            trigger="hover"
            accentColor="#a78bfa" // Ungu, sesuai tema portofoliomu
            overlayColor="#060010"
            textColor="#ffffff"
            grayscale
            showLabels
            duration={0.6}
            ease="power3.out"
            parallax={0.5}
            tilt={8}
            stagger={0.06}
            height={460}
            gap={10}
            radius={16}
            orientation="horizontal"
          />
        </div>
      </div>
    </section>
  );
}