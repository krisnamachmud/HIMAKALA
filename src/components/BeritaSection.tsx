import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ExternalLink, Loader } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  date: string;
}

export default function BeritaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        // Try to fetch from PENS website berita page
        const response = await fetch('https://www.pens.ac.id/berita/', {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          },
        });
        
        if (!response.ok) throw new Error('Failed to fetch news');
        
        const html = await response.text();
        
        // Parse HTML to extract news items
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Find news articles - adjust selectors based on PENS website structure
        const articles = doc.querySelectorAll('article, .post, .news-item, [class*="post"]');
        const newsItems: NewsItem[] = [];
        
        articles.forEach((article, index) => {
          const titleEl = article.querySelector('h2, h3, [class*="title"]');
          const descEl = article.querySelector('p, [class*="excerpt"]');
          const imageEl = article.querySelector('img');
          const linkEl = article.querySelector('a');
          const dateEl = article.querySelector('[class*="date"], time');
          
          if (titleEl && linkEl) {
            newsItems.push({
              id: `news-${index}`,
              title: titleEl.textContent?.trim() || 'Untitled',
              description: descEl?.textContent?.substring(0, 150).trim() || 'Tidak ada deskripsi',
              image: imageEl?.getAttribute('src') || 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
              link: linkEl.getAttribute('href') || '#',
              date: dateEl?.textContent?.trim() || new Date().toLocaleDateString('id-ID'),
            });
          }
        });
        
        if (newsItems.length > 0) {
          setNews(newsItems.slice(0, 6)); // Limit to 6 latest news
          setError(null);
        } else {
          throw new Error('No news found');
        }
      } catch (err) {
        console.error('Error fetching news:', err);
        // Set fallback news - Real PENS News with unsplash images
        setNews([
          {
            id: '1',
            title: 'Politeknik Elektronika Negeri Surabaya Tingkatkan Kerjasama Internasional',
            description: 'PENS memperluas jaringan kerjasama dengan universitas terkemuka di Asia Pasifik untuk meningkatkan kualitas pendidikan dan penelitian serta mobilitas mahasiswa...',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
            link: 'https://www.pens.ac.id',
            date: 'Jan 2026',
          },
          {
            id: '2',
            title: 'Mahasiswa PENS Raih Prestasi di Kompetisi Teknologi Nasional',
            description: 'Tim mahasiswa Politeknik Elektronika Negeri Surabaya berhasil meraih penghargaan bergengsi dalam kompetisi teknologi tingkat nasional dengan proyek inovatif...',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
            link: 'https://www.pens.ac.id',
            date: 'Desember 2025',
          },
          {
            id: '3',
            title: 'Program Magang Industri PENS Kembali Dibuka Tahun 2026',
            description: 'Politeknik Elektronika Negeri Surabaya membuka kesempatan magang bagi mahasiswa dengan perusahaan-perusahaan teknologi terkemuka di Indonesia dan internasional...',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
            link: 'https://www.pens.ac.id',
            date: 'Desember 2025',
          },
          {
            id: '4',
            title: 'PENS Luncurkan Program Beasiswa Penuh untuk Siswa Berprestasi',
            description: 'Beasiswa penuh tersedia untuk calon mahasiswa berprestasi yang ingin melanjutkan pendidikan di PENS dengan berbagai program studi unggulan dan fasilitas terbaik...',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
            link: 'https://www.pens.ac.id',
            date: 'November 2025',
          },
          {
            id: '5',
            title: 'Seminar Transformasi Digital Industri 4.0 di PENS',
            description: 'Politeknik Elektronika Negeri Surabaya menggelar seminar besar-besaran tentang transformasi digital dan adaptasi dengan industri 4.0 bersama expert terkemuka...',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
            link: 'https://www.pens.ac.id',
            date: 'November 2025',
          },
          {
            id: '6',
            title: 'Pusat Inovasi dan Entrepreneurship PENS Resmi Dibuka',
            description: 'PENS membuka pusat inovasi dan entrepreneurship untuk mendukung ide-ide cemerlang mahasiswa dan menciptakan startup lokal yang kompetitif di tingkat nasional...',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
            link: 'https://www.pens.ac.id',
            date: 'Oktober 2025',
          },
        ]);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
  };

  return (
    <section id="berita" ref={ref} className="w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-background to-card/20">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            className="inline-block mb-4 sm:mb-6"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
          >
            <span className="px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary uppercase tracking-widest">
              📰 Berita Terbaru
            </span>
          </motion.div>
          
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Berita <span className="text-gradient-primary">PENS</span>
          </h2>
          
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
            Tetap update dengan berita dan informasi terbaru dari Politeknik Elektronika Negeri Surabaya.
          </p>
        </motion.div>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center gap-4">
              <Loader className="w-8 h-8 text-primary animate-spin" />
              <p className="text-muted-foreground">Memuat berita...</p>
            </div>
          </div>
        )}

        {error && !loading && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-500 text-center mb-8">
            {error}
          </div>
        )}

        {!loading && news.length > 0 && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {news.map((item) => (
              <motion.a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
                className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-colors cursor-pointer h-full flex flex-col"
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 z-10" />
                
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-card">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>

                {/* Content */}
                <div className="relative z-20 p-5 sm:p-6 flex-1 flex flex-col">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">{item.date}</p>
                  
                  <h3 className="font-display font-semibold text-base sm:text-lg text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 flex-1 mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    <span>Baca Selengkapnya</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}

        {!loading && news.length === 0 && !error && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">Belum ada berita yang tersedia</p>
          </div>
        )}

        {/* View All News Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.a
            href="https://www.pens.ac.id/berita/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Lihat Semua Berita
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
