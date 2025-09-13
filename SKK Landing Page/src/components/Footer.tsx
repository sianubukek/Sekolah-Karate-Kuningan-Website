import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-skk-black text-skk-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div>
              <span className="text-xl font-bold">Sekolah Karate Kuningan</span>
            </div>
            <p className="text-gray-300 text-sm">
              One Step Ahead!
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Kontak Kami</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-skk-red" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@sekolahkaratekuningan.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-skk-red" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-start">
                <svg className="w-4 h-4 mr-2 text-skk-red mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Jl. Merdeka No. 123, Kuningan, Jawa Barat</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Tautan Cepat</h3>
            <div className="space-y-2 text-sm">
              <a href="/" className="block text-gray-300 hover:text-skk-red transition-colors">Beranda</a>
              <a href="/tentang" className="block text-gray-300 hover:text-skk-red transition-colors">Tentang Kami</a>
              <a href="/instruktur" className="block text-gray-300 hover:text-skk-red transition-colors">Instruktur</a>
              <a href="/faq" className="block text-gray-300 hover:text-skk-red transition-colors">FAQ</a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400"
        >
          <p>&copy; 2025 Sekolah Karate Kuningan. Semua hak dilindungi.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
