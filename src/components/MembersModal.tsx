import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, Linkedin, Mail } from 'lucide-react';
import { Member } from '@/data/divisions';

interface MembersModalProps {
  isOpen: boolean;
  onClose: () => void;
  divisionName: string;
  divisionIcon: string;
  divisionColor: string;
  members: Member[];
}

export function MembersModal({
  isOpen,
  onClose,
  divisionName,
  divisionIcon,
  divisionColor,
  members,
}: MembersModalProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
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
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-lg z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', stiffness: 250, damping: 25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 pointer-events-none"
          >
            <div className="bg-background border border-border rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] sm:max-h-[85vh] overflow-hidden flex flex-col pointer-events-auto">
              {/* Header */}
              <div className={`bg-gradient-to-r ${divisionColor} px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 relative overflow-hidden`}>
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl -translate-y-20 translate-x-20" />
                </div>

                <div className="relative z-10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
                    <motion.span
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="text-3xl sm:text-4xl md:text-5xl shrink-0"
                    >
                      {divisionIcon}
                    </motion.span>
                    <div className="min-w-0">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 line-clamp-1">{divisionName}</h2>
                      <p className="text-white/70 text-xs sm:text-sm font-medium">
                        {members.length} Anggota
                      </p>
                    </div>
                  </div>

                  <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 hover:bg-white/20 rounded-xl transition-colors backdrop-blur-sm shrink-0"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
                {members.length === 0 ? (
                  <div className="flex items-center justify-center h-64">
                    <p className="text-muted-foreground text-base sm:text-lg">Belum ada anggota di divisi ini</p>
                  </div>
                ) : (
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {members.map((member) => (
                      <motion.div
                        key={member.id}
                        variants={itemVariants}
                        className="group relative"
                      >
                        {/* Card Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur -z-10" />

                        {/* Card */}
                        <div className="relative h-full bg-gradient-to-br from-white/5 to-white/0 border border-border/50 group-hover:border-primary/50 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                          {/* Avatar */}
                          <div className="flex justify-center mb-4 sm:mb-6">
                            <motion.div
                              whileHover={{ scale: 1.15, y: -5 }}
                              whileTap={{ scale: 0.95 }}
                              className="relative"
                            >
                              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow">
                                <span className="text-3xl sm:text-4xl">👤</span>
                              </div>
                              {/* Badge */}
                              <div className="absolute -top-2 -right-2 px-2 sm:px-3 py-1 bg-primary/20 border border-primary/50 rounded-full backdrop-blur-sm">
                                <p className="text-xs font-semibold text-primary">{member.role}</p>
                              </div>
                            </motion.div>
                          </div>

                          {/* Info */}
                          <div className="text-center mb-4 sm:mb-5">
                            <h3 className="font-bold text-foreground text-base sm:text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                              {member.name}
                            </h3>
                            <div className="flex items-center justify-center gap-1 mb-2">
                              <div className="h-1 w-1 rounded-full bg-primary" />
                              <p className="text-muted-foreground text-xs sm:text-sm">
                                {member.department}
                              </p>
                              <div className="h-1 w-1 rounded-full bg-primary" />
                            </div>
                          </div>

                          {/* Divider */}
                          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4 sm:mb-5" />

                          {/* Social Links */}
                          <div className="flex justify-center gap-2 sm:gap-3">
                            {member.instagram && (
                              <motion.a
                                href={member.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                className="relative p-2 sm:p-2.5 rounded-lg bg-gradient-to-br from-pink-400 to-pink-600 text-white shadow-lg hover:shadow-xl transition-all group/social"
                              >
                                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover/social:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                                  Instagram
                                </div>
                              </motion.a>
                            )}
                            {member.linkedin && (
                              <motion.a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                className="relative p-2 sm:p-2.5 rounded-lg bg-gradient-to-br from-blue-400 to-blue-700 text-white shadow-lg hover:shadow-xl transition-all group/social"
                              >
                                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover/social:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                                  LinkedIn
                                </div>
                              </motion.a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-border px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-card/30 flex justify-end">
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 sm:px-6 py-2 rounded-lg bg-primary text-white font-medium text-sm sm:text-base hover:bg-primary/90 transition-colors"
                >
                  Tutup
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
