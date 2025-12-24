# HIMAKALA - Website Himpunan Mahasiswa PSDKU Lamongan

Website resmi **HIMAKALA** (Himpunan Mahasiswa PSDKU Lamongan) - Himpunan mahasiswa Program Studi Teknik Informatika dan Multimedia Broadcasting di PENS (Politeknik Elektronika Negeri Surabaya).

## 📋 Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Persyaratan Sistem](#persyaratan-sistem)
- [Instalasi](#instalasi)
- [Menjalankan Proyek](#menjalankan-proyek)
- [Build untuk Production](#build-untuk-production)
- [Struktur Proyek](#struktur-proyek)
- [Fitur Utama](#fitur-utama)
- [Konfigurasi](#konfigurasi)
- [Contributing](#contributing)
- [Lisensi](#lisensi)

---

## 📖 Tentang Proyek

HIMAKALA website adalah platform digital yang membantu mahasiswa PSDKU Lamongan untuk:
- Mengetahui informasi tentang himpunan mahasiswa
- Melihat profil anggota dan struktur organisasi
- Mengakses informasi kegiatan dan acara
- Terhubung dengan komunitas

---

## 🛠️ Teknologi yang Digunakan

### Frontend
- **React 18** - Library JavaScript untuk membangun UI interaktif
- **TypeScript** - Superset JavaScript dengan type safety
- **Vite** - Build tool modern dan cepat
- **Tailwind CSS** - Framework CSS untuk styling
- **shadcn/ui** - Komponen UI yang dapat disesuaikan

### Library Tambahan
- **@react-three/fiber & @react-three/drei** - 3D graphics dengan Three.js
- **@tanstack/react-query** - State management untuk async data
- **react-hook-form** - Form management yang efisien
- **zod** - Schema validation
- **tsparticles** - Particle effects
- **sonner** - Toast notifications

### Build & Development
- **ESLint** - Code quality checker
- **PostCSS** - CSS processor
- **Tailwind CSS** - Utility-first CSS framework

---

## ⚙️ Persyaratan Sistem

Sebelum memulai, pastikan sistem Anda memiliki:
- **Node.js** v18.0.0 atau lebih tinggi
- **npm** v9.0.0 atau lebih tinggi (atau **yarn** v3.0.0+)
- **Git** untuk version control

Cek versi yang terinstal:
```bash
node --version
npm --version
git --version
```

---

## 📥 Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/krisnamachmud/himakala.git
cd himakala
```

### 2. Install Dependencies
Menggunakan npm:
```bash
npm install
```

Atau menggunakan yarn:
```bash
yarn install
```

---

## 🚀 Menjalankan Proyek

### Development Server
Jalankan server pengembangan dengan hot reload:
```bash
npm run dev
```

Server akan berjalan di:
- **URL**: `http://localhost:8080`
- **Host**: `::`
- **Port**: `8080`

Buka browser Anda dan navigasi ke `http://localhost:8080` untuk melihat website.

---

## 📦 Build untuk Production

### Build Project
Untuk membuat production build yang dioptimalkan:
```bash
npm run build
```

File hasil build akan tersimpan di folder `dist/`.

### Development Build
Untuk membuat development build:
```bash
npm run build:dev
```

### Preview Production Build
Untuk melihat preview dari production build secara lokal:
```bash
npm run preview
```

---

## 📁 Struktur Proyek

```
himakala/
├── public/                          # Static assets
│   └── robots.txt
├── src/
│   ├── App.css                     # Styling utama aplikasi
│   ├── App.tsx                     # Komponen root aplikasi
│   ├── index.css                   # Global styles
│   ├── main.tsx                    # Entry point aplikasi
│   ├── vite-env.d.ts              # Type definitions untuk Vite
│   ├── assets/                     # Assets statis (images, fonts, dll)
│   ├── components/                 # React components
│   │   ├── AboutSection.tsx        # Bagian tentang
│   │   ├── Footer.tsx              # Footer komponen
│   │   ├── HeroSection.tsx         # Hero/banner utama
│   │   ├── LinksSection.tsx        # Bagian links
│   │   ├── MembersSection.tsx      # Bagian anggota
│   │   ├── Navbar.tsx              # Navigation bar
│   │   ├── NavLink.tsx             # Navigation link item
│   │   ├── ParticleBackground.tsx  # Background dengan particle effects
│   │   ├── Scene3D.tsx             # Scene 3D dengan Three.js
│   │   └── ui/                     # shadcn/ui components
│   │       ├── accordion.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       └── ... (komponen UI lainnya)
│   ├── hooks/                      # Custom React hooks
│   │   ├── use-mobile.tsx          # Hook untuk deteksi mobile
│   │   ├── use-toast.ts            # Hook untuk toast notifications
│   │   └── useScrollReveal.ts      # Hook untuk scroll reveal effects
│   ├── lib/                        # Utility functions
│   │   └── utils.ts                # Helper functions
│   └── pages/                      # Page components
│       ├── Index.tsx               # Halaman utama
│       └── NotFound.tsx            # Halaman 404
├── eslint.config.js                # ESLint configuration
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── package.json                    # Project dependencies
├── components.json                 # shadcn/ui config
└── README.md                       # Dokumentasi ini
```

---

## ✨ Fitur Utama

- **Responsive Design** - Website responsif untuk semua ukuran layar (mobile, tablet, desktop)
- **Particle Effects** - Background dengan animasi particle yang menarik
- **3D Graphics** - Scene 3D interaktif menggunakan Three.js
- **Modern UI** - Interface modern dengan shadcn/ui components
- **Smooth Animations** - Animasi smooth untuk scroll reveal dan transisi
- **Form Handling** - Form management yang efisien dengan react-hook-form
- **Notifications** - Toast notifications untuk user feedback
- **SEO Optimized** - Meta tags dan open graph untuk SEO yang lebih baik

---

## ⚙️ Konfigurasi

### Vite Config (`vite.config.ts`)
```typescript
- Server host: `::`
- Server port: `8080`
- React plugin with SWC compiler
- Path alias: `@` -> `./src`
```

### Tailwind Config (`tailwind.config.ts`)
Kustomisasi tema warna, font, dan breakpoint sesuai kebutuhan.

### TypeScript Config (`tsconfig.json`)
- Target: ES2020
- Module system: ESNext
- JSX: React-JSX

---

## 🔧 Scripts yang Tersedia

| Script | Deskripsi |
|--------|-----------|
| `npm run dev` | Menjalankan development server dengan hot reload |
| `npm run build` | Build untuk production |
| `npm run build:dev` | Build untuk development |
| `npm run lint` | Menjalankan ESLint untuk code quality check |
| `npm run preview` | Preview production build secara lokal |

---

## 📝 Contributing

Jika Anda ingin berkontribusi pada proyek HIMAKALA:

1. Fork repository ini
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan Anda (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

---

## 📄 Lisensi

Proyek ini adalah properti dari **HIMAKALA PSDKU Lamongan**.

---

## 📞 Kontak & Info Lebih Lanjut

**HIMAKALA - Himpunan Mahasiswa PSDKU Lamongan**
- **Program Studi**: Teknik Informatika dan Multimedia Broadcasting
- **Institusi**: PENS (Politeknik Elektronika Negeri Surabaya)
- **Lokasi**: PSDKU Lamongan

---

## 🤝 Tim Pengembang

Dikembangkan oleh [krisnamachmud](https://github.com/krisnamachmud) dan kontributor lainnya.

---

**Last Updated**: December 24, 2025

Terima kasih telah menggunakan HIMAKALA website! 🎉
