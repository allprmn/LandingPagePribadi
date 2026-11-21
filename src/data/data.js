import imgSD from '../assets/educations/sd.jpg';
import imgSMP from '../assets/educations/smp.jpg';
import imgMAN from '../assets/educations/man.jpg';
import imgUIN from '../assets/educations/uin.jpg';


// data riwayat pendidikan
export const education = [
  {
    id: 1,
    institution: "SDN 2 NEGLASARI",
    degree: "MURID",
    year: "2012 - 2018",
    image: imgSD,
    link: "https://data-sekolah.zekolah.id/sekolah/sdn-2-neglasari-255481"
  },
  {
    id: 2,
    institution: "SMPN 5 CIBEBER",
    degree: "MURID",
    year: "2018 - 2021",
    image: imgSMP,
    link: "https://smp.sch.id/sekolah/20607865"
  },
  {
    id: 3,
    institution: "MAN 2 LEBAK",
    degree: "MURID Ipa",
    year: "2021 - 2024",
    image: imgMAN,
    link: "https://man2lebak.sch.id/"
  },
  {
    id: 4,
    institution: "UIN SUNAN GUNUNG DJATI BANDUNG",
    degree: "Mahasiswa Teknik Informatika",
    year: "2024 - Sekarang",
    image: imgUIN,
    link: "https://uinsgd.ac.id/"
  }
];


// Certifikat
import cert1 from '../assets/certificates/cert-1.webp';
import cert2 from '../assets/certificates/cert-2.webp';
import cert3 from '../assets/certificates/cert-3.webp';

export const certificates = [
  {
    id: 1,
    title: "Higher Education - University Student",
    issuer: "Google For Education",
    date: "September 2026",
    image: cert1,
    alt: "Sertifikat Higher Education - University Student dari Google For Education",
    link: "hhttps://drive.google.com/file/d/1Jgp8TScpVdP6MnzeqMYnMP5RBAJ5dQlT/view",
    detail: "Sertifikat kelulusan kursus React Dasar dari Dicoding. Materi: state, props, hooks, dan routing."
  },
  {
    id: 2,
    title: "Belajar Membuat Aplikasi Web dengan React",
    issuer: "Dicodibg Camp",
    date: "Agust 2026",
    image: cert2,
    alt: "Sertifikat Belajar Membuat Aplikasi Web dengan React dari Dicoding Camp",
    link: "https://www.dicoding.com/certificates/98XW8R6R9PM3",
    detail: "Sertifikat penyelesaian kursus React Dasar dari Dicoding. Materi: Belajar tentang membangun UI di React seperti mengenal element dan component. Serta, belajar juga konsep component properti yang membuat UI aplikasi bersifat reusable"
  },
  {
    id: 3,
    title: "Siswa Tersertifikasi Gemini",
    issuer: "Google",
    date: "Agust 2026",
    image: cert3,
    alt: "Sertifikat Siswa Tersertifikasi Gemini dari Google",
    link: "https://edu.google.accredible.com/60a3e746-b668-44a7-936e-3b50649f78bb#acc.I7D9ihMV",
    detail: "Mahasiswa Gemini University yang tersertifikasi Google dapat mengartikulasikan dan menunjukkan pengetahuan dasar tentang konsep Ai generatif serta fitur dan kemampuan inti Gemini dalam konteks pendidikan. Individu yang telah meraih sertifikasi ini dapat menunjukkan Status mereka dengan sertifikat dan lencana yang dipersonalisasi. Sertifikasi ini berlaku selama 3 tahun."
  }
];

