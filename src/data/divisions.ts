export interface Member {
  id: string;
  name: string;
  role: string;
  department: string;
  image?: string;
  instagram?: string;
  linkedin?: string;
}

export interface Division {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  members: Member[];
}

export const divisions: Division[] = [
  {
    id: 'leadership',
    name: 'Kepemimpinan',
    description: 'Tim Pemimpin Organisasi',
    icon: '👑',
    color: 'from-purple-500 to-pink-500',
    members: [
      {
        id: '1',
        name: 'Krisna Machmud Irfandi',
        role: 'Wakil Divisi',
        department: 'Teknik Informatika',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        id: '2',
        name: 'Khoirul Yarrdan',
        role: 'Wakil Ketua',
        department: 'Multimedia Broadcasting',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        id: '3',
        name: 'Nauril Putri',
        role: 'Sekretaris',
        department: 'Teknik Informatika',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
    ],
  },
  {
    id: 'finance',
    name: 'Keuangan',
    description: 'Manajemen Keuangan & Administrasi',
    icon: '💰',
    color: 'from-green-500 to-emerald-500',
    members: [
      {
        id: '4',
        name: 'Entitas',
        role: 'Bendahara',
        department: 'Multimedia Broadcasting',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        id: '5',
        name: 'Entitas',
        role: 'Asisten Bendahara',
        department: 'Teknik Informatika',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
    ],
  },
  {
    id: 'events',
    name: 'Acara & Program',
    description: 'Pengelola Event dan Program Organisasi',
    icon: '🎉',
    color: 'from-blue-500 to-cyan-500',
    members: [
      {
        id: '6',
        name: 'Entitas',
        role: 'Koordinator Acara',
        department: 'Teknik Informatika',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        id: '7',
        name: 'Entitas',
        role: 'Asisten Koordinator',
        department: 'Multimedia Broadcasting',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
    ],
  },
  {
    id: 'media',
    name: 'Media & Komunikasi',
    description: 'Pengelola Media Sosial dan Publikasi',
    icon: '📱',
    color: 'from-orange-500 to-red-500',
    members: [
      {
        id: '8',
        name: 'Entitas',
        role: 'Koordinator Media',
        department: 'Multimedia Broadcasting',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        id: '9',
        name: 'Entitas',
        role: 'Desainer Grafis',
        department: 'Multimedia Broadcasting',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
    ],
  },
  {
    id: 'it',
    name: 'IT & Teknologi',
    description: 'Infrastruktur dan Pengembangan Digital',
    icon: '💻',
    color: 'from-indigo-500 to-blue-500',
    members: [
      {
        id: '10',
        name: 'Entitas',
        role: 'Koordinator IT',
        department: 'Teknik Informatika',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        id: '11',
        name: 'Entitas',
        role: 'Developer Web',
        department: 'Teknik Informatika',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
    ],
  },
  {
    id: 'pr',
    name: 'Public Relations',
    description: 'Hubungan Publik dan Kemitraan',
    icon: '🤝',
    color: 'from-rose-500 to-pink-500',
    members: [
      {
        id: '12',
        name: 'Entitas',
        role: 'Koordinator Humas',
        department: 'Multimedia Broadcasting',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        id: '13',
        name: 'Entitas',
        role: 'Asisten Humas',
        department: 'Teknik Informatika',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
    ],
  },
];
