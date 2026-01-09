import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Trash2, Edit2, Save, RotateCcw } from 'lucide-react';
import { useAdminData, type AboutFeature, type QuickLink } from '@/hooks/useAdminData';
import { useDivisionsData } from '@/hooks/useDivisionsData';
import { type Member } from '@/data/divisions';

const ICON_OPTIONS = ['Code', 'Film', 'Users', 'Trophy', 'GraduationCap', 'Building2', 'FileText', 'Calendar', 'Globe', 'Star', 'Zap', 'Heart'];

const COLOR_OPTIONS = ['text-primary', 'text-accent', 'text-primary-glow', 'text-yellow-500', 'text-cyan-400', 'text-orange-500', 'text-green-500', 'text-red-500'];

const BG_COLOR_OPTIONS = ['bg-primary/10', 'bg-accent/10', 'bg-primary-glow/10', 'bg-yellow-500/10', 'bg-cyan-400/10', 'bg-orange-500/10', 'bg-green-500/10', 'bg-red-500/10'];

const GRADIENT_OPTIONS = ['from-primary to-primary-glow', 'from-accent to-yellow-500', 'from-primary-glow to-cyan-400', 'from-accent to-orange-500', 'from-primary to-blue-400', 'from-green-500 to-emerald-500', 'from-pink-500 to-rose-500', 'from-purple-500 to-pink-500'];

interface EditingAboutFeature extends Omit<AboutFeature, 'id'> {
  id?: string;
}

interface EditingQuickLink extends Omit<QuickLink, 'id'> {
  id?: string;
}

interface EditingDivision {
  id?: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export default function AdminPanel() {
  const { data, isLoading, addAboutFeature, updateAboutFeature, deleteAboutFeature, addQuickLink, updateQuickLink, deleteQuickLink, resetToDefault: resetAdminData } = useAdminData();

  const { data: divisionsData, isLoading: divisionsLoading, addMember, updateMember, deleteMember, addDivision, updateDivision, deleteDivision, resetToDefault: resetDivisionsData } = useDivisionsData();

  const [tab, setTab] = useState<'about' | 'links' | 'divisions' | 'members'>('about');
  const [editingAbout, setEditingAbout] = useState<EditingAboutFeature | null>(null);
  const [editingLink, setEditingLink] = useState<EditingQuickLink | null>(null);
  const [editingDivision, setEditingDivision] = useState<EditingDivision | null>(null);
  const [editingMember, setEditingMember] = useState<(Member & { divisionId: string }) | null>(null);
  const [selectedDivision, setSelectedDivision] = useState<string>(divisionsData[0]?.id || '');

  useEffect(() => {
    const handleClose = () => onClose();
    window.addEventListener('closeAdminPanel', handleClose);
    return () => window.removeEventListener('closeAdminPanel', handleClose);
  }, []);

  const handleSaveAbout = () => {
    if (!editingAbout?.title) return;
    if (editingAbout.id) updateAboutFeature(editingAbout.id, editingAbout);
    else addAboutFeature(editingAbout);
    setEditingAbout(null);
  };

  const handleSaveLink = () => {
    if (!editingLink?.title) return;
    if (editingLink.id) updateQuickLink(editingLink.id, editingLink);
    else addQuickLink(editingLink);
    setEditingLink(null);
  };

  const handleSaveDivision = () => {
    if (!editingDivision?.name) return;
    if (editingDivision.id) {
      updateDivision(editingDivision.id, editingDivision);
    } else {
      addDivision({
        name: editingDivision.name,
        description: editingDivision.description,
        icon: editingDivision.icon,
        color: editingDivision.color,
        members: [],
      });
    }
    setEditingDivision(null);
  };

  const handleSaveMember = () => {
    if (!editingMember?.name || !editingMember?.role) return;
    if (editingMember.id && !editingMember.id.startsWith('member-')) {
      updateMember(selectedDivision, editingMember.id, editingMember);
    } else {
      addMember(selectedDivision, editingMember);
    }
    setEditingMember(null);
  };

  const onClose = () => {
    window.dispatchEvent(new CustomEvent('closeAdminPanel'));
  };

  if (isLoading || divisionsLoading) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
        <div className="animate-spin w-10 h-10 border-3 border-primary border-t-transparent rounded-full" />
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
        <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} transition={{ type: 'spring', duration: 0.3 }} className="bg-gradient-to-br from-card to-card/80 border border-primary/30 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <div className="bg-gradient-to-r from-primary/20 via-accent/10 to-primary-glow/10 border-b border-primary/20 px-8 py-6 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Admin Panel</h2>
              <p className="text-sm text-muted-foreground mt-1">Manage your HIMAKALA content</p>
            </div>
            <motion.button whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.95 }} onClick={onClose} className="p-2 rounded-lg hover:bg-primary/20 text-muted-foreground hover:text-foreground transition-all">
              <X size={24} />
            </motion.button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-primary/20 bg-background/40 px-4 py-2 gap-2 overflow-x-auto">
            {(['about', 'divisions', 'members', 'links'] as const).map((t) => (
              <motion.button key={t} onClick={() => setTab(t)} whileHover={{ y: -2 }} whileTap={{ y: 0 }} className={`relative px-6 py-3 font-semibold text-sm rounded-lg transition-all whitespace-nowrap ${tab === t ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'}`}>
                {t === 'about' && 'Tentang'}
                {t === 'divisions' && 'Divisi'}
                {t === 'members' && 'Pengurus'}
                {t === 'links' && 'Quick Links'}
                {tab === t && <motion.div layoutId="admin-tab-indicator" className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full" transition={{ type: 'spring', stiffness: 300, damping: 30 }} />}
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto bg-gradient-to-b from-background/20 to-transparent p-8 space-y-6">
            {tab === 'about' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">Tentang HIMAKALA Features</h3>
                    <p className="text-sm text-muted-foreground mt-1">Kelola fitur-fitur di halaman Tentang</p>
                  </div>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setEditingAbout({ icon: 'Code', title: '', description: '', color: 'text-primary', bgColor: 'bg-primary/10' })} className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg text-white hover:bg-primary/90 transition font-medium">
                    <Plus size={18} /> Tambah
                  </motion.button>
                </div>

                {editingAbout && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-card p-5 rounded-lg border border-primary/20 space-y-4">
                    <h4 className="font-semibold text-foreground">{editingAbout.id ? 'Edit Fitur' : 'Fitur Baru'}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Judul</label>
                        <input type="text" value={editingAbout.title} onChange={(e) => setEditingAbout({ ...editingAbout, title: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Judul fitur" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Icon</label>
                        <select value={editingAbout.icon} onChange={(e) => setEditingAbout({ ...editingAbout, icon: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                          {ICON_OPTIONS.map((icon) => (
                            <option key={icon} value={icon}>
                              {icon}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Deskripsi</label>
                      <textarea value={editingAbout.description} onChange={(e) => setEditingAbout({ ...editingAbout, description: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm" rows={3} placeholder="Deskripsi fitur" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Warna Text</label>
                        <select value={editingAbout.color} onChange={(e) => setEditingAbout({ ...editingAbout, color: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                          {COLOR_OPTIONS.map((color) => (
                            <option key={color} value={color}>
                              {color}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Warna Background</label>
                        <select value={editingAbout.bgColor} onChange={(e) => setEditingAbout({ ...editingAbout, bgColor: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                          {BG_COLOR_OPTIONS.map((color) => (
                            <option key={color} value={color}>
                              {color}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex gap-2 justify-end pt-2">
                      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setEditingAbout(null)} className="px-4 py-2 rounded-lg border border-border hover:bg-white/5 transition text-sm font-medium">
                        Batal
                      </motion.button>
                      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleSaveAbout} className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg text-white hover:bg-primary/90 transition text-sm font-medium">
                        <Save size={16} /> Simpan
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                <div className="grid gap-3">
                  {data.aboutFeatures.map((feature) => (
                    <motion.div key={feature.id} layout className="bg-card p-4 rounded-lg border border-border flex items-center justify-between group hover:border-primary/50 transition">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground truncate">{feature.description}</p>
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setEditingAbout(feature)} className="p-2 hover:bg-primary/20 rounded-lg transition">
                          <Edit2 size={16} className="text-primary" />
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => deleteAboutFeature(feature.id)} className="p-2 hover:bg-red-500/20 text-red-500 rounded-lg transition">
                          <Trash2 size={16} />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {tab === 'divisions' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">Divisi</h3>
                    <p className="text-sm text-muted-foreground mt-1">Kelola divisi-divisi HIMAKALA</p>
                  </div>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setEditingDivision({ name: '', description: '', icon: '👥', color: 'from-primary to-primary-glow' })} className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg text-white hover:bg-primary/90 transition font-medium">
                    <Plus size={18} /> Divisi Baru
                  </motion.button>
                </div>

                {editingDivision && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-card p-5 rounded-lg border border-primary/20 space-y-4">
                    <h4 className="font-semibold text-foreground">{editingDivision.id ? 'Edit Divisi' : 'Divisi Baru'}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Nama Divisi</label>
                        <input type="text" value={editingDivision.name} onChange={(e) => setEditingDivision({ ...editingDivision, name: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Contoh: Backend Development" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Icon (Emoji)</label>
                        <input type="text" value={editingDivision.icon} onChange={(e) => setEditingDivision({ ...editingDivision, icon: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="👥" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Deskripsi</label>
                      <textarea value={editingDivision.description} onChange={(e) => setEditingDivision({ ...editingDivision, description: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm" rows={2} placeholder="Deskripsi divisi..." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Warna Gradient</label>
                      <select value={editingDivision.color} onChange={(e) => setEditingDivision({ ...editingDivision, color: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                        {GRADIENT_OPTIONS.map((color) => (
                          <option key={color} value={color}>
                            {color}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex gap-2 justify-end pt-2">
                      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setEditingDivision(null)} className="px-4 py-2 rounded-lg border border-border hover:bg-white/5 transition text-sm font-medium">
                        Batal
                      </motion.button>
                      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleSaveDivision} className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg text-white hover:bg-primary/90 transition text-sm font-medium">
                        <Save size={16} /> Simpan
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                <div className="grid gap-3">
                  {divisionsData.map((division) => (
                    <motion.div key={division.id} layout className="bg-card p-4 rounded-lg border border-border flex items-center justify-between group hover:border-primary/50 transition">
                      <div className="flex items-center gap-3 flex-1">
                        <span className="text-2xl">{division.icon}</span>
                        <div>
                          <h4 className="font-medium text-foreground">{division.name}</h4>
                          <p className="text-sm text-muted-foreground">{division.members.length} anggota</p>
                        </div>
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setEditingDivision(division)} className="p-2 hover:bg-primary/20 rounded-lg transition">
                          <Edit2 size={16} className="text-primary" />
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => deleteDivision(division.id)} className="p-2 hover:bg-red-500/20 text-red-500 rounded-lg transition">
                          <Trash2 size={16} />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {tab === 'members' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">Pengurus HIMAKALA</h3>
                    <p className="text-sm text-muted-foreground mt-1">Kelola anggota setiap divisi</p>
                  </div>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setEditingMember({ id: `member-${Date.now()}`, name: '', role: '', department: '', divisionId: selectedDivision })} className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg text-white hover:bg-primary/90 transition font-medium">
                    <Plus size={18} /> Anggota Baru
                  </motion.button>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Pilih Divisi</label>
                  <select value={selectedDivision} onChange={(e) => { setSelectedDivision(e.target.value); setEditingMember(null); }} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                    {divisionsData.map((division) => (
                      <option key={division.id} value={division.id}>
                        {division.name}
                      </option>
                    ))}
                  </select>
                </div>

                {editingMember && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-card p-5 rounded-lg border border-primary/20 space-y-4">
                    <h4 className="font-semibold text-foreground">{editingMember.id?.startsWith('member-') ? 'Anggota Baru' : 'Edit Anggota'}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Nama</label>
                        <input type="text" value={editingMember.name} onChange={(e) => setEditingMember({ ...editingMember, name: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Nama lengkap" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Role</label>
                        <input type="text" value={editingMember.role} onChange={(e) => setEditingMember({ ...editingMember, role: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Contoh: Ketua" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-2">Department</label>
                        <input type="text" value={editingMember.department} onChange={(e) => setEditingMember({ ...editingMember, department: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Contoh: Teknik Informatika" />
                      </div>
                    </div>

                    <div className="flex gap-2 justify-end pt-2">
                      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setEditingMember(null)} className="px-4 py-2 rounded-lg border border-border hover:bg-white/5 transition text-sm font-medium">
                        Batal
                      </motion.button>
                      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleSaveMember} className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg text-white hover:bg-primary/90 transition text-sm font-medium">
                        <Save size={16} /> Simpan
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                <div className="grid gap-3">
                  {divisionsData.find((d) => d.id === selectedDivision)?.members.map((member) => (
                    <motion.div key={member.id} layout className="bg-card p-4 rounded-lg border border-border flex items-center justify-between group hover:border-primary/50 transition">
                      <div>
                        <h4 className="font-medium text-foreground">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                        <p className="text-xs text-muted-foreground/70">{member.department}</p>
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setEditingMember({ ...member, divisionId: selectedDivision })} className="p-2 hover:bg-primary/20 rounded-lg transition">
                          <Edit2 size={16} className="text-primary" />
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => deleteMember(selectedDivision, member.id)} className="p-2 hover:bg-red-500/20 text-red-500 rounded-lg transition">
                          <Trash2 size={16} />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {tab === 'links' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">Quick Links</h3>
                    <p className="text-sm text-muted-foreground mt-1">Kelola link-link penting</p>
                  </div>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setEditingLink({ title: '', url: '', description: '', icon: 'Code', color: 'from-primary to-primary-glow' })} className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg text-white hover:bg-primary/90 transition font-medium">
                    <Plus size={18} /> Link Baru
                  </motion.button>
                </div>

                {editingLink && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-card p-5 rounded-lg border border-primary/20 space-y-4">
                    <h4 className="font-semibold text-foreground">{editingLink.id ? 'Edit Link' : 'Link Baru'}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Judul</label>
                        <input type="text" value={editingLink.title} onChange={(e) => setEditingLink({ ...editingLink, title: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Judul link" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">URL</label>
                        <input type="url" value={editingLink.url} onChange={(e) => setEditingLink({ ...editingLink, url: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="https://example.com" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Deskripsi</label>
                      <textarea value={editingLink.description} onChange={(e) => setEditingLink({ ...editingLink, description: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm" rows={2} placeholder="Deskripsi link" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Icon</label>
                        <select value={editingLink.icon} onChange={(e) => setEditingLink({ ...editingLink, icon: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                          {ICON_OPTIONS.map((icon) => (
                            <option key={icon} value={icon}>
                              {icon}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Gradient Color</label>
                        <select value={editingLink.color} onChange={(e) => setEditingLink({ ...editingLink, color: e.target.value })} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                          {GRADIENT_OPTIONS.map((color) => (
                            <option key={color} value={color}>
                              {color}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex gap-2 justify-end pt-2">
                      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setEditingLink(null)} className="px-4 py-2 rounded-lg border border-border hover:bg-white/5 transition text-sm font-medium">
                        Batal
                      </motion.button>
                      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleSaveLink} className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg text-white hover:bg-primary/90 transition text-sm font-medium">
                        <Save size={16} /> Simpan
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                <div className="grid gap-3">
                  {data.quickLinks.map((link) => (
                    <motion.div key={link.id} layout className="bg-card p-4 rounded-lg border border-border flex items-center justify-between group hover:border-primary/50 transition">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{link.title}</h4>
                        <p className="text-sm text-muted-foreground truncate">{link.url}</p>
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setEditingLink(link)} className="p-2 hover:bg-primary/20 rounded-lg transition">
                          <Edit2 size={16} className="text-primary" />
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => deleteQuickLink(link.id)} className="p-2 hover:bg-red-500/20 text-red-500 rounded-lg transition">
                          <Trash2 size={16} />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-primary/20 bg-gradient-to-r from-background/40 to-background/20 px-8 py-4 flex gap-3 justify-between">
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => { if (window.confirm('Reset semua data ke default? Tindakan ini tidak bisa dibatalkan.')) { resetAdminData(); resetDivisionsData(); } }} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-destructive/15 text-destructive hover:bg-destructive/25 transition-colors font-medium text-sm">
              <RotateCcw size={16} />
              Reset Semua
            </motion.button>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onClose} className="px-8 py-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground transition-all font-semibold shadow-lg">
              Tutup
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
