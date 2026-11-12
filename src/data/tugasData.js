export const daftarTugas = [
  {
    id: "1",
    judul: "Aplikasi mengelola daftar tugas kuliah",
    mataKuliah: "Git, npm, TypeScript, dan Vite",
    pertemuan: "Pertemuan 6",
    deskripsiSingkat: "Aplikasi full-stack untuk mengelola daftar tugas kuliah.",
    linkApp: "https://tugas.aldipramana.my.id",
    linkRepo: "https://github.com/allprmn/tugas-kuliah",
    screenshots: [
      {
        id: "ss-1",
        img: "https://yztwtpqzhupwemfyvnvn.supabase.co/storage/v1/object/public/screenshots/1.png",
        width: 936,
        height: 266,
        title: "Membuat Branch"
      },
      {
        id: "ss-2",
        img: "https://yztwtpqzhupwemfyvnvn.supabase.co/storage/v1/object/public/screenshots/Picture3.png",
        width: 936,
        height: 379,
        title: "Merge Brach"
      },
      {
        id: "ss-3",
        img: "https://yztwtpqzhupwemfyvnvn.supabase.co/storage/v1/object/public/screenshots/Picture4.png",
        width: 936,
        height: 702,
        title: "Merge Brach Konflik"
      },
      {
        id: "ss-4",
        img: "https://yztwtpqzhupwemfyvnvn.supabase.co/storage/v1/object/public/screenshots/Picture5.png",
        width: 933,
        height: 640,
        title: "Git Pull & Merge Branch"
      },
      {
        id: "ss-5",
        img: "https://yztwtpqzhupwemfyvnvn.supabase.co/storage/v1/object/public/screenshots/Picture6.png",
        width: 936,
        height: 846,
        title: "Commit & Push"
      },
      {
        id: "ss-6",
        img: "https://yztwtpqzhupwemfyvnvn.supabase.co/storage/v1/object/public/screenshots/Tugas1.png",
        width: 1917,
        height: 954,
        title: "Dahboard"
      },
      {
        id: "ss-7",
        img: "https://yztwtpqzhupwemfyvnvn.supabase.co/storage/v1/object/public/screenshots/Tugas2.png",
        width: 1893,
        height: 955,
        title: "MataKuliah"
      },
      {
        id: "ss-8",
        img: "https://yztwtpqzhupwemfyvnvn.supabase.co/storage/v1/object/public/screenshots/Tugas3.png",
        width: 1902,
        height: 967,
        title: "Kalender"
      },
    ],
    markdownContent: `
# Aplikasi Manajemen Tugas Kuliah

Aplikasi web full-stack untuk mengelola daftar tugas kuliah, jadwal, dan arsip. Dibangun menggunakan React, TypeScript, Vite, dan Supabase sebagai database.

## Penjelasan Teknis

Dokumen ini menjelaskan penggunaan teknologi utama dalam pengembangan aplikasi ini, mulai dari manajemen versi hingga proses *build*.

### 1. Git & GitHub
*   **Apa itu Git?** Git adalah sistem kontrol versi (*Version Control System*) terdistribusi yang digunakan untuk melacak setiap perubahan pada kode sumber.
*   **Implementasi:** Pada proyek ini, Git digunakan untuk mencatat riwayat (*commit*), membuat cabang (*branch*) untuk fitur baru (seperti \`fitur-integrasi-kalender\`), melakukan penggabungan (*merge*), dan menyelesaikan konflik (*merge conflict*).
*   **GitHub:** Digunakan sebagai repositori *remote* untuk mencadangkan kode secara online, berkolaborasi, serta mengelola *Pull Request*.

### 2. npm (Node Package Manager)
*   **Apa itu npm?** Manajer paket bawaan Node.js yang digunakan untuk mengelola *library* (dependensi) pihak ketiga.
*   **Implementasi:** 
    *   Menggunakan file \`package.json\` untuk mencatat semua dependensi proyek.
    *   **\`dependencies\`**: Library yang dibutuhkan saat aplikasi berjalan di *production* (contoh: \`react\`, \`@supabase/supabase-js\`, \`framer-motion\`).
    *   **\`devDependencies\`**: Library yang hanya dibutuhkan saat proses *development* (contoh: \`typescript\`, \`vite\`, \`tailwindcss\`).
    *   **Semantic Versioning (SemVer)**: Menggunakan format \`X.Y.Z\` (Major.Minor.Patch). Tanda \`^\` (caret) pada versi seperti \`^18.2.0\` memungkinkan npm untuk meng-*update* ke versi *minor* terbaru tanpa merusak kode.

### 3. TypeScript
*   **Apa itu TypeScript?** *Superset* dari JavaScript yang menambahkan sistem tipe statis (*static typing*). Ini membantu mendeteksi *error* saat proses *coding* sebelum aplikasi dijalankan.
*   **Implementasi (Syarat Tugas):**
    *   **Primitive Types**: Menggunakan \`string\` (judul tugas), \`number\` (SKS), dan \`boolean\` (status selesai) pada file \`src/types/index.ts\`.
    *   **Array**: Menggunakan tipe data array untuk menyimpan daftar tugas \`Task[]\` dan mata kuliah \`Course[]\`.
    *   **Interface**: Mendefinisikan struktur objek data yang ketat (contoh: \`interface Task\`).
    *   **Type Alias & Union Type**: Menggunakan \`type Priority = 'Tinggi' | 'Sedang' | 'Rendah'\` agar nilai hanya bisa diisi dengan 3 opsi tersebut.
    *   **Generics**: Diimplementasikan pada fungsi \`fetchDataDariSupabase<T>\` di file \`src/utils/apiHelpers.ts\` agar fungsi tersebut bisa menerima tipe data tabel apa pun secara dinamis.

### 4. Vite
*   **Apa itu Vite?** *Build tool* modern yang sangat cepat untuk proyek *frontend*.
*   **Implementasi:** Vite digunakan sebagai *development server* (dengan fitur Hot Module Replacement/HMR yang instan) dan sebagai *bundler* saat proses *build* (\`npm run build\`) untuk menghasilkan file statis siap *deploy* ke Vercel.

### 5. Environment Variables
*   **Apa itu?** Variabel konfigurasi yang disimpan di luar kode sumber (file \`.env\`) untuk menyimpan data sensitif atau konfigurasi dinamis.
*   **Implementasi:**
    *   **Kerahasiaan**: Kunci API Supabase (\`VITE_SUPABASE_URL\` dan \`VITE_SUPABASE_ANON_KEY\`) disimpan di \`.env\` dan **tidak** diunggah ke GitHub (dimasukkan ke \`.gitignore\`).
    *   **Non-Rahasia**: Nama aplikasi (\`VITE_APP_NAME\`) dan versi (\`VITE_APP_VERSION\`) ditampilkan secara publik di antarmuka web (Sidebar).
    *   File \`.env.example\` disediakan sebagai panduan format variabel yang dibutuhkan.

### 6. Peran Compiler, Transpiler, dan Bundler
Dalam ekosistem pengembangan web modern, ketiga hal ini bekerja sama:
*   **Compiler (TypeScript Compiler / \`tsc\`)**: Bertugas menerjemahkan kode TypeScript (\`.ts\` / \`.tsx\`) menjadi JavaScript murni (\`.js\`). Karena browser tidak mengerti TypeScript, proses ini wajib dilakukan.
*   **Transpiler (\`esbuild\` via Vite)**: Bertugas menerjemahkan sintaks JavaScript modern (ES6+) menjadi sintaks yang lebih lama agar kompatibel dengan browser versi lama.
*   **Bundler (\`Rollup\` via Vite)**: Bertugas menggabungkan puluhan file JavaScript, CSS, dan aset gambar menjadi satu atau beberapa file besar yang dioptimalkan (diminifikasi dan di-*compress*). Ini mengurangi jumlah *request* HTTP saat web dibuka, sehingga *loading* menjadi jauh lebih cepat.

---

## Cara Menjalankan Proyek Secara Lokal

1. Clone repositori ini: 
\`\`\`bash
git clone https://github.com/allprmn/tugas-kuliah.git
\`\`\`
    `
  },
{
    id: "2",
    judul: "Membuat Halaman Profil Diri dengan HTML5",
    mataKuliah: "Profil Diri",
    pertemuan: "Pertemuan 2",
    deskripsiSingkat: "Membuat halaman profil diri menggunakan HTML5, struktur semantik, dan metadata.",
    linkApp: "https://aldipramana.my.id/profil",
    linkRepo: "https://github.com/allprmn/LandingPagePribadi", 
    screenshots: [
      {
        id: "ss-p2-1",
        // GANTI DENGAN URL SUPABASE KAMU
        img: "https://yztwtpqzhupwemfyvnvn.supabase.co/storage/v1/object/public/screenshots/profil1.png", 
        width: 1891,
        height: 945,
        title: "Tampilan Halaman Profil"
      },
      {
        id: "ss-p2-2",
        // GANTI DENGAN URL SUPABASE KAMU
        img: "https://yztwtpqzhupwemfyvnvn.supabase.co/storage/v1/object/public/screenshots/Profil2.png", 
        width: 1881,
        height: 919,
        title: "Tampilan Halaman Profil"
      },
      {
        id: "ss-p2-3",
        // GANTI DENGAN URL SUPABASE KAMU
        img: "https://yztwtpqzhupwemfyvnvn.supabase.co/storage/v1/object/public/screenshots/profil3.png", 
        width: 1899,
        height: 943,
        title: "Tampilan Halaman Profil"
      }
    ],
    markdownContent: `
# Halaman Profil Diri dengan HTML5

Tugas ini berfokus pada pembuatan halaman profil diri yang dibangun menggunakan struktur **HTML5** yang benar dan ramah aksesibilitas. Halaman ini di-*render* menggunakan React, namun menghasilkan *output* HTML5 murni di browser.

## Ketentuan yang Dipenuhi

### 1. Struktur HTML5 yang Benar
Halaman menggunakan struktur dasar HTML5 yang mencakup:
*   \`<!DOCTYPE html>\`
*   \`<html>\`, \`<head>\`, dan \`<body>\`

### 2. Elemen Semantik
Kami menggunakan tag semantik agar struktur halaman mudah dibaca oleh *screen reader* dan mesin pencari (SEO):
*   **\`<header>\`**: Bagian atas halaman yang berisi navigasi utama (Navbar).
*   **\`<nav>\`**: Menu navigasi untuk berpindah antar halaman.
*   **\`<main>\`**: Pembungkus konten utama halaman.
*   **\`<section>\`**: Memisahkan bagian-bagian seperti *Hero*, *About*, dan *Projects*.
*   **\`<footer>\`**: Bagian bawah halaman yang berisi informasi hak cipta dan kontak.

### 3. Biodata & Foto Diri
*   Terdapat foto profil yang diimplementasikan dengan tag \`<img>\` dan dilengkapi dengan atribut **\`alt\`** untuk aksesibilitas (contoh: \`alt="Foto Aldi Pramana"\`).
*   Terdapat biodata singkat dan deskripsi pengalaman.

### 4. Heading (h1, h2, h3)
*   **\`<h1>\`**: Digunakan untuk nama utama di bagian *Hero*.
*   **\`<h2>\`**: Digunakan untuk judul section seperti "Tentang Saya" dan "Riwayat Pendidikan".
*   **\`<h3>\`**: Digunakan untuk sub-judul (misal: judul mata kuliah atau proyek).

### 5. Tabel Mata Kuliah
*   Terdapat tabel (\`<table>\`) jadwal mata kuliah semester ini yang mencakup kolom No, Matakuliah, Kelas, SKS, Ruang, Hari, Waktu, dan Dosen.

### 6. Link
*   Terdapat tautan ke media sosial (LinkedIn, Instagram) dan tautan navigasi di dalam halaman.

### 7. Metadata (SEO & Open Graph)
Pada file \`index.html\`, bagian \`<head>\` telah dilengkapi dengan metadata berikut:
*   \`<title>\` : Judul halaman portofolio.
*   \`<meta name="description">\` : Deskripsi singkat portofolio.
*   \`<meta property="og:title">\` : Judul untuk *preview* di media sosial.
*   \`<meta property="og:description">\` : Deskripsi untuk *preview*.
*   \`<meta property="og:image">\` : URL gambar untuk *preview*.
    `
  },



  // Kamu bisa menambah tugas baru di sini
];