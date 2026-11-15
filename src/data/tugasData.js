export const daftarTugas = [
{
    id: "1",
    judul: "Membuat Halaman Profil Diri dengan HTML5",
    mataKuliah: "Profil Diri",
    pertemuan: "Pertemuan 2",
    deskripsiSingkat: "Membuat halaman profil diri menggunakan HTML5, struktur semantik, dan metadata.",
    linkApp: "https://aldipramana.my.id/profil",
    linkRepo: "https://github.com/allprmn/LandingPagePribadi",
    screenshots: [
      {
        id: "ss-p2-1",
        img: "https://yztwtpqzhupwemfyvnvn.supabase.co/storage/v1/object/public/screenshots/profil1.png",
        width: 1891,
        height: 945,
        title: "Tampilan Halaman Profil"
      },
      {
        id: "ss-p2-2",
        img: "https://yztwtpqzhupwemfyvnvn.supabase.co/storage/v1/object/public/screenshots/Profil2.png",
        width: 1881,
        height: 919,
        title: "Tampilan Halaman Profil"
      },
      {
        id: "ss-p2-3",
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

  {
    id: "2",
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
    id: "3",
    judul: "Aplikasi Daftar Kegiatan",
    mataKuliah: "Component-Based UI Development with React",
    pertemuan: "Pertemuan 7",
    deskripsiSingkat: "Aplikasi web sederhana menggunakan React dengan menerapkan konsep Component-Based UI Development.",
    linkApp: "https://jadwalku.aldipramana.my.id",
    linkRepo: "https://github.com/allprmn/jadwalku",


    screenshots: [
      {
        id: "jd-1",
        img: "https://yztwtpqzhupwemfyvnvn.supabase.co/storage/v1/object/public/screenshots/Pert6-1.png",
        width: 1914,
        height: 963,
        title: "Dashboard"
      },
      {
        id: "jd-2",
        img: "https://yztwtpqzhupwemfyvnvn.supabase.co/storage/v1/object/public/screenshots/Pert6-2.png",
        width: 1918,
        height: 954,
        title: "Calender"
      },
      {
        id: "jd-3",
        img: "https://yztwtpqzhupwemfyvnvn.supabase.co/storage/v1/object/public/screenshots/Pert6-3.png",
        width: 1918,
        height: 918,
        title: "Sidebar & Caleneder"
      },
    ],


    markdownContent: `# JadwalKu — Aplikasi Manajemen Jadwal & Kegiatan
**Nama:** Aldi Pramana

**NIM:** 1247050031

**Mata Kuliah:** Pengembangan Aplikasi Web

**Tugas:** Component-Based UI Development with React

## Deskripsi Proyek
**JadwalKu** adalah aplikasi web *full-stack* berbasis React yang dirancang untuk membantu mahasiswa mengelola jadwal kegiatan sehari-hari dan memantau *deadline* tugas kuliah dalam satu *dashboard* terpusat. Aplikasi ini mengusung tema *dark mode* (hitam pekat) dengan antarmuka yang modern, bersih, dan responsif.

Aplikasi ini terintegrasi dengan **Supabase (PostgreSQL)** sebagai *backend*, sehingga data tidak hanya tersimpan di *local storage*, melainkan tersinkronisasi secara *real-time* di database.

## Teknologi yang Digunakan
- **React.js (Vite):** *Library* utama untuk membangun antarmuka.
- **Tailwind CSS v3:** *Framework* CSS untuk *styling* yang responsif dan konsisten.
- **React Router DOM v7:** Untuk navigasi antar halaman (*Single Page Application*).
- **Supabase:** *Backend as a Service* (Database PostgreSQL) untuk menyimpan data kegiatan.
- **Framer Motion & Lucide React:** Untuk animasi interaktif dan ikon antarmuka.
- **date-fns:** Untuk manipulasi dan format tanggal.

---

## Penerapan Konsep React (Sesuai Ketentuan Tugas)

### 1. Components (Komponen)
Aplikasi ini dipecah menjadi banyak komponen kecil yang terpisah ke dalam file masing-masing, mencakup lebih dari 15 komponen. 
- **Layout Components:** \`Sidebar.jsx\`, \`Header.jsx\`, \`Layout.jsx\`
- **UI Reusable Components:** \`Button.jsx\`, \`Modal.jsx\`, \`Badge.jsx\`, \`EmptyState.jsx\`, \`PageHeader.jsx\`, \`SwipeRow.jsx\`
- **Feature Components:** \`ActivityCard.jsx\`, \`ActivityGrid.jsx\`, \`ActivityForm.jsx\`, \`FilterBar.jsx\`, \`StatCards.jsx\`, \`CalendarGrid.jsx\`, \`DayDetail.jsx\`.

### 2. Props (Properti)
Props digunakan untuk mengirim data dari komponen *Parent* (induk) ke komponen *Child* (anak).
- **Contoh:** Komponen \`ActivityGrid\` menerima *props* \`activities\` (array data), \`onEdit\`, \`onDelete\`, dan \`onToggle\` dari halaman \`Dashboard.jsx\`. Data tersebut kemudian dilempar lagi ke \`ActivityCard\` untuk dirender.
- **Contoh Reusable:** Komponen \`Button\` menerima *props* \`variant\` (primary, ghost, danger) dan \`size\` untuk mengubah tampilannya secara dinamis di berbagai halaman.

### 3. State (useState & Context)
State digunakan untuk mengelola data yang dapat berubah selama aplikasi berjalan.
- **Local State (\`useState\`):** Digunakan di \`ActivityForm.jsx\` untuk menyimpan ketikan user pada form (judul, tanggal, jam). Digunakan juga di \`Header.jsx\` untuk melacak status buka/tutup menu *mobile*.
- **Global State (\`useContext\`):** Dibuat file \`ActivitiesContext.jsx\` untuk menyimpan data kegiatan dari Supabase. Ini memungkinkan halaman Dashboard, Kalender, dan Statistik mengakses data yang sama tanpa harus *passing props* secara berlebihan (*prop drilling*).

### 4. Event Handling
Event handling menangani interaksi pengguna seperti klik, input, dan submit.
- **Contoh:** Fungsi \`handleSubmit\` pada \`ActivityForm\` yang dipicu saat user menekan tombol "Tambah Kegiatan". Fungsi \`onChange\` pada input form untuk memperbarui state secara *real-time* saat user mengetik.

### 5. Conditional Rendering
Menampilkan konten berdasarkan kondisi tertentu.
- **Contoh:** Jika data kegiatan kosong (\`activities.length === 0\`), maka komponen \`<EmptyState />\` yang akan dirender, bukan list kegiatan.
- **Contoh:** Tombol "Edit" dan "Hapus" disembunyikan dan diganti dengan ikon Gembok 🔒 jika data tersebut berasal dari tabel \`tasks\` (data eksternal), sehingga mencegah *error* pengeditan.

### 6. List Rendering
Menampilkan data array menggunakan method \`.map()\` dan memberikan \`key\` unik pada setiap elemen.
- **Contoh:** Merender daftar kegiatan di Dashboard, daftar tanggal di Kalender (\`CalendarGrid\`), dan daftar notifikasi di halaman Notifikasi.

---

## Fitur-Fitur Interaktif (Sesuai Ketentuan Tugas)

Aplikasi ini memiliki lebih dari 3 fitur interaktif yang berjalan penuh:

1. **Dashboard Terintegrasi (CRUD Penuh)**
   - **Menambahkan data:** Form interaktif dengan *popup modal* untuk membuat jadwal baru.
   - **Mengedit data:** Mengubah judul, tanggal, jam, atau deskripsi kegiatan yang sudah ada.
   - **Menghapus data:** Menghapus kegiatan dengan konfirmasi *pop-up*.
   - **Mengubah status:** Tombol *Toggle* untuk menandai kegiatan "Selesai" atau "Belum Selesai".
2. **Pencarian & Filter Real-time**
   - **Search Bar di Header:** Mencari kegiatan berdasarkan judul secara instan. Pencarian ini tersinkronisasi di seluruh halaman (Dashboard & Daftar Kegiatan).
   - **Filter:** Menyaring daftar berdasarkan Kategori (Kuliah, Tugas, Organisasi, Pribadi) dan Status (Selesai/Belum).
3. **Kalender Interaktif (Sinkronisasi Data)**
   - Menampilkan kalender bulanan. Tanggal yang memiliki kegiatan akan ditandai dengan **titik putih (dot)**.
   - Jika tanggal diklik, panel di sebelah kanan akan menampilkan detail kegiatan pada hari tersebut.
   - Terintegrasi dengan data *deadline* tugas dari aplikasi eksternal (Pertemuan 6).
4. **Notifikasi & Swipe-to-Delete**
   - Mendeteksi tugas yang *deadline*-nya hari ini.
   - Menggunakan komponen \`SwipeRow\` (berbasis *Framer Motion*) yang memungkinkan pengguna menggeser kartu ke kiri untuk menghapus notifikasi (khusus di tampilan, data asli tetap aman).
   - Mendukung **Web Notification API** (notifikasi *pop-up* langsung ke layar laptop/HP jika diizinkan).
5. **Statistik Visual**
   - Menampilkan grafik batang (*progress bar*) persentase tugas yang sudah diselesaikan.
   - Rekap jumlah tugas per kategori (Kuliah, Tugas, Organisasi, Pribadi).

---

## Cara Menjalankan Proyek (Local Development)

1. *Clone repository* ini: 
   \`\`\`bash
   git clone https://github.com/allprmn/jadwalku.git
   \`\`\`
2. Masuk ke folder: 
   \`\`\`bash
   cd jadwalku
   \`\`\`
3. Install *dependency*: 
   \`\`\`bash
   npm install
   \`\`\`
4. Buat file \`.env\` di *root folder* dan tambahkan kredensial Supabase:
   \`\`\`env
   VITE_SUPABASE_URL=url_supabase_kamu
   VITE_SUPABASE_ANON_KEY=anon_key_kamu
   \`\`\`
5. Jalankan *development server*:
   \`\`\`bash
   npm run dev
   \`\`\`
6. Buka \`http://localhost:5173\` di browser.
    `
  },

 {
    id: "4",
    judul: "Aplikasi web interaktif menggunakan React yang mengambil dan menampilkan data dari API.",
    mataKuliah: "React Routing, State Management, Data Fetching, dan Application Architecture",
    pertemuan: "Pertemuan 8",
    deskripsiSingkat: "Deskripsi singkat tugas...",
    linkApp: "https:/my.aldipramana.my.id",
    linkRepo: "https://github.com/username/repo-baru",
    screenshots: [
      // Gambar screenshot dari Supabase atau URL
    ],
    markdownContent: `
# Penjelasan Tugas Pertemuan 8
    `
  }


  // Kamu bisa menambah tugas baru di sini
];