# Admin Panel - Dokumentasi

## 🎯 Fitur Admin Panel

Admin panel adalah sistem manajemen konten yang tersimpan di **localStorage** browser, sehingga data persisten tanpa memerlukan database backend.

## 🔑 Cara Akses Admin Panel

### Method 1: Keyboard Shortcut (REKOMENDASI)
Tekan kombinasi tombol: **`Ctrl + Shift + A`**

### Method 2: Hidden Button di Navbar
Ada button yang sangat kecil (invisible) di navbar sebelah "Links" yang bisa di-klik untuk membuka admin panel.

## 📋 Fitur-Fitur Admin Panel

### 1. **Tab: Tentang HIMAKALA** 
Edit dan tambah fitur/kartu pada halaman "Tentang HIMAKALA"

#### Apa yang bisa di-edit:
- **Judul**: Nama fitur (contoh: "Teknik Informatika")
- **Icon**: Pilih dari 12+ icon options (Code, Film, Users, Trophy, dll)
- **Deskripsi**: Penjelasan singkat tentang fitur
- **Warna Text**: Pilih warna teks icon
- **Warna Background**: Pilih warna background icon

#### Tombol Aksi:
- ➕ **Tambah**: Tambah fitur baru
- ✏️ **Edit**: Ubah fitur yang sudah ada
- 🗑️ **Hapus**: Hapus fitur

---

### 2. **Tab: Pengurus HIMAKALA**
Kelola data anggota tim di setiap divisi

#### Apa yang bisa di-edit:
- **Nama**: Nama lengkap anggota
- **Posisi/Role**: Jabatan (Ketua, Wakil, Sekretaris, dll)
- **Jurusan/Departemen**: Program studi (Teknik Informatika, Multimedia Broadcasting)

#### Divisi yang tersedia:
- Kepemimpinan 👑
- Pengembangan Produk & Desain
- Operasional & Event
- Tim IT & Infrastruktur
- dll

#### Tombol Aksi:
- ➕ **Anggota**: Tambah anggota baru ke divisi
- ✏️ **Edit**: Ubah data anggota
- 🗑️ **Hapus**: Hapus anggota dari divisi

---

### 3. **Tab: Quick Links**
Edit dan tambah link/tautan di halaman Quick Links

#### Apa yang bisa di-edit:
- **Judul**: Nama link (contoh: "PENS", "E-Learning")
- **URL**: Alamat link lengkap (https://...)
- **Deskripsi**: Penjelasan singkat tentang link
- **Icon**: Pilih icon untuk link
- **Gradient Color**: Pilih warna gradient untuk card

#### Tombol Aksi:
- ➕ **Tambah**: Tambah link baru
- ✏️ **Edit**: Ubah link yang sudah ada
- 🗑️ **Hapus**: Hapus link

---

## 💾 Penyimpanan Data

### LocalStorage
- Semua data tersimpan di **browser localStorage** secara otomatis
- Data **persisten** - tidak hilang meskipun browser ditutup
- Setiap user di device yang berbeda memiliki data tersendiri
- Kapasitas: ~5-10MB per domain

### Struktur Penyimpanan
```
LocalStorage Keys:
- himakala_admin_data        // Tentang HIMAKALA + Quick Links
- himakala_divisions_data    // Pengurus HIMAKALA
```

---

## 🔄 Sinkronisasi Data

### Cara Kerja:
1. User edit data di Admin Panel
2. Data disimpan ke localStorage secara real-time
3. Halaman main (public) membaca data dari localStorage
4. User melihat perubahan langsung (tanpa perlu refresh)

### Real-time Updates:
- ✅ AboutSection - update instant
- ✅ MembersSection - update instant
- ✅ LinksSection - update instant

---

## ⚠️ Reset Data

### Tombol Reset
Ada tombol **"Reset"** di footer AdminPanel (warna merah)

### Fungsi:
- Menghapus semua perubahan yang dibuat
- Kembali ke data default awal
- ⚠️ **Tidak bisa di-undo** - minta konfirmasi terlebih dahulu

---

## 🛠️ Technical Implementation

### Files Terlibat:
```
src/
├── hooks/
│   ├── useAdminData.ts          // Hook untuk About & Links
│   └── useDivisionsData.ts      // Hook untuk Members
├── components/
│   ├── AdminPanel.tsx           // Main admin interface
│   ├── Navbar.tsx               // Navigation + hidden button
│   ├── AboutSection.tsx         // Display About (gunakan data)
│   ├── LinksSection.tsx         // Display Links (gunakan data)
│   └── MembersSection.tsx       // Display Members (gunakan data)
└── data/
    └── divisions.ts             // Default data divisi
```

### Technology Stack:
- **React Hooks**: useState, useEffect, useCallback
- **Framer Motion**: Animasi & transitions
- **TailwindCSS**: Styling
- **lucide-react**: Icons
- **Browser API**: localStorage

---

## 📝 Contoh Workflow

### Menambah Fitur Baru di "Tentang HIMAKALA":
1. Buka Admin Panel (`Ctrl + Shift + A`)
2. Klik tab "Tentang HIMAKALA"
3. Klik tombol "Tambah"
4. Isi form:
   - Judul: "Inovasi Teknologi"
   - Icon: "Zap"
   - Deskripsi: "Menciptakan solusi teknologi terdepan"
   - Warna Text: "text-primary"
   - Warna Background: "bg-primary/10"
5. Klik "Simpan"
6. Tutup admin panel - fitur langsung muncul di halaman!

### Menambah Anggota Baru:
1. Buka Admin Panel (`Ctrl + Shift + A`)
2. Klik tab "Pengurus HIMAKALA"
3. Pilih divisi (misal: "Kepemimpinan")
4. Klik tombol "Anggota"
5. Isi form:
   - Nama: "Budi Santoso"
   - Posisi/Role: "Ketua"
   - Jurusan: "Teknik Informatika"
6. Klik "Simpan"
7. Anggota langsung muncul di halaman!

---

## ⚙️ Opsi Tampilan

### Keyboard Shortcut Help
Saat di dalam App, tekan `h` lalu Enter untuk melihat help (Vite feature)

### Dark/Light Mode
Admin Panel mengikuti theme aplikasi (menggunakan CSS variables dari Tailwind)

---

## 🔐 Keamanan

### ⚠️ Penting:
- Admin Panel bersifat **client-side** - tidak ada proteksi password
- Siapa pun dengan akses ke browser bisa edit
- **Untuk production**: Pertimbangkan tambah authentication backend

### Rekomendasi:
- Gunakan di environment terpercaya saja
- Untuk public site: Tambah password protection di backend
- Monitor localStorage untuk audit trail

---

## 🐛 Troubleshooting

### Data tidak tersimpan?
- Cek apakah localStorage aktif di browser
- Cek kapasitas storage (tidak penuh)
- Buka DevTools → Application → LocalStorage

### Perubahan tidak muncul?
- Refresh halaman (F5)
- Clear cache browser
- Cek console untuk error

### Keyboard shortcut tidak bekerja?
- Pastikan focus bukan di input field
- Try shortcut di halaman utama

---

## 📊 Data Structure

### AboutFeature
```typescript
{
  id: string;
  icon: string;              // Nama icon (Code, Film, dll)
  title: string;             // Judul fitur
  description: string;       // Deskripsi panjang
  color: string;             // Tailwind color class (text-primary)
  bgColor: string;           // Tailwind bg color (bg-primary/10)
}
```

### QuickLink
```typescript
{
  id: string;
  title: string;             // Nama link
  description: string;       // Deskripsi singkat
  url: string;               // URL target
  icon: string;              // Icon name
  color: string;             // Gradient color (from-primary to-blue)
  logo?: string;             // Optional logo path
}
```

### Member
```typescript
{
  id: string;
  name: string;              // Nama anggota
  role: string;              // Posisi (Ketua, Wakil, dll)
  department: string;        // Jurusan/Divisi
  image?: string;            // Optional profile image
  instagram?: string;        // Optional social media
  linkedin?: string;         // Optional social media
}
```

---

## 🚀 Future Enhancements

Ide untuk pengembangan selanjutnya:
- [ ] Export/Import data (JSON backup)
- [ ] Password protection untuk admin panel
- [ ] Image upload untuk member profiles
- [ ] Backend sync untuk multi-device
- [ ] Revision history / undo
- [ ] Admin user management
- [ ] Analytics & activity logs

---

## 📞 Support

Jika ada pertanyaan atau bug:
1. Cek console browser (F12 → Console)
2. Cek localStorage (F12 → Application → LocalStorage)
3. Lihat error messages di admin panel
4. Report bug dengan screenshot

---

**Version**: 1.0.0  
**Last Updated**: January 2025  
**Status**: ✅ Production Ready
