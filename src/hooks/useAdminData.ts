import { useState, useEffect, useCallback } from 'react';

export interface AboutFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

export interface QuickLink {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
  color: string;
  logo?: string;
}

export interface AdminData {
  aboutFeatures: AboutFeature[];
  quickLinks: QuickLink[];
}

const DEFAULT_DATA: AdminData = {
  aboutFeatures: [
    {
      id: '1',
      icon: 'Code',
      title: 'Teknik Informatika',
      description: 'Mengembangkan keahlian programming, software development, dan teknologi informasi terkini.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      id: '2',
      icon: 'Film',
      title: 'Multimedia Broadcasting',
      description: 'Mempelajari produksi konten multimedia, broadcasting, dan teknologi media digital.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      id: '3',
      icon: 'Users',
      title: 'Komunitas Solid',
      description: 'Wadah berkumpul dan berkolaborasi untuk mahasiswa PSDKU Lamongan.',
      color: 'text-primary-glow',
      bgColor: 'bg-primary-glow/10',
    },
    {
      id: '4',
      icon: 'Trophy',
      title: 'Prestasi Gemilang',
      description: 'Menghasilkan prestasi di berbagai kompetisi tingkat regional dan nasional.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
  ],
  quickLinks: [
    {
      id: '1',
      title: 'PENS',
      description: 'Politeknik Elektronika Negeri Surabaya',
      url: 'https://www.pens.ac.id',
      icon: 'GraduationCap',
      color: 'from-primary to-primary-glow',
    },
    {
      id: '2',
      title: 'PSDKU Lamongan',
      description: 'Program Studi Diluar Kampus Utama',
      url: '#',
      icon: 'Building2',
      color: 'from-accent to-yellow-500',
    },
    {
      id: '3',
      title: 'Sistem Akademik',
      description: 'Portal informasi akademik mahasiswa',
      url: '#',
      icon: 'FileText',
      color: 'from-primary-glow to-cyan-400',
    },
    {
      id: '4',
      title: 'Kalender Akademik',
      description: 'Jadwal kegiatan akademik',
      url: '#',
      icon: 'Calendar',
      color: 'from-accent to-orange-500',
    },
    {
      id: '5',
      title: 'E-Learning',
      description: 'Platform pembelajaran daring',
      url: '#',
      icon: 'Globe',
      color: 'from-primary to-blue-400',
    },
  ],
};

const STORAGE_KEY = 'himakala_admin_data';

export const useAdminData = () => {
  const [data, setData] = useState<AdminData>(DEFAULT_DATA);
  const [isLoading, setIsLoading] = useState(true);

  // Load data from localStorage on mount
  useEffect(() => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      try {
        setData(JSON.parse(storedData));
      } catch (error) {
        console.error('Error loading admin data:', error);
        setData(DEFAULT_DATA);
      }
    } else {
      setData(DEFAULT_DATA);
    }
    setIsLoading(false);
  }, []);

  // Save data to localStorage
  const saveData = useCallback((newData: AdminData) => {
    setData(newData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
  }, []);

  // About Features
  const addAboutFeature = useCallback((feature: Omit<AboutFeature, 'id'>) => {
    const newData = {
      ...data,
      aboutFeatures: [
        ...data.aboutFeatures,
        { ...feature, id: Date.now().toString() },
      ],
    };
    saveData(newData);
  }, [data, saveData]);

  const updateAboutFeature = useCallback((id: string, feature: Omit<AboutFeature, 'id'>) => {
    const newData = {
      ...data,
      aboutFeatures: data.aboutFeatures.map((f) =>
        f.id === id ? { ...feature, id } : f
      ),
    };
    saveData(newData);
  }, [data, saveData]);

  const deleteAboutFeature = useCallback((id: string) => {
    const newData = {
      ...data,
      aboutFeatures: data.aboutFeatures.filter((f) => f.id !== id),
    };
    saveData(newData);
  }, [data, saveData]);

  // Quick Links
  const addQuickLink = useCallback((link: Omit<QuickLink, 'id'>) => {
    const newData = {
      ...data,
      quickLinks: [
        ...data.quickLinks,
        { ...link, id: Date.now().toString() },
      ],
    };
    saveData(newData);
  }, [data, saveData]);

  const updateQuickLink = useCallback((id: string, link: Omit<QuickLink, 'id'>) => {
    const newData = {
      ...data,
      quickLinks: data.quickLinks.map((l) =>
        l.id === id ? { ...link, id } : l
      ),
    };
    saveData(newData);
  }, [data, saveData]);

  const deleteQuickLink = useCallback((id: string) => {
    const newData = {
      ...data,
      quickLinks: data.quickLinks.filter((l) => l.id !== id),
    };
    saveData(newData);
  }, [data, saveData]);

  const resetToDefault = useCallback(() => {
    setData(DEFAULT_DATA);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    data,
    isLoading,
    // About Features
    addAboutFeature,
    updateAboutFeature,
    deleteAboutFeature,
    // Quick Links
    addQuickLink,
    updateQuickLink,
    deleteQuickLink,
    // Utilities
    resetToDefault,
  };
};
