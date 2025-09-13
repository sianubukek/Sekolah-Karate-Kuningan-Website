import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-skk-black via-skk-black to-gray-900 text-skk-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Sekolah Karate Kuningan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              One Step Ahead!
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-skk-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-skk-black mb-6"
            >
              Tentang Kami
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto"
            >
              Sekolah Karate Kuningan berdiri sejak tahun 2001 di Kuningan, Jawa Barat. 
              Kami berkomitmen melatih siswa dengan disiplin, semangat, dan sportivitas.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                to="/tentang"
                className="inline-flex items-center text-skk-red hover:text-red-700 font-semibold"
              >
                Baca Selengkapnya
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Instructors Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-skk-black mb-6"
            >
              Instruktur Kami
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
            >
              <div className="bg-skk-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-skk-black mb-2">Sensei Budi</h3>
                <p className="text-skk-red font-medium mb-2">Sabuk Hitam Dan 3</p>
                <p className="text-gray-600">15 tahun pengalaman</p>
              </div>
              <div className="bg-skk-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-skk-black mb-2">Sensei Ratna</h3>
                <p className="text-skk-red font-medium mb-2">Sabuk Hitam Dan 2</p>
                <p className="text-gray-600">Juara Nasional Karate 2018</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link
                to="/instruktur"
                className="inline-flex items-center text-skk-red hover:text-red-700 font-semibold"
              >
                Lihat Semua Instruktur
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-16 bg-skk-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-skk-black mb-6"
            >
              Pertanyaan yang Sering Diajukan
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="space-y-4 mb-8 max-w-3xl mx-auto"
            >
              <div className="text-left bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-skk-black mb-2">Bagaimana cara mendaftar?</h3>
              </div>
              <div className="text-left bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-skk-black mb-2">Apakah menerima anak-anak?</h3>
              </div>
              <div className="text-left bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-skk-black mb-2">Berapa biaya latihan?</h3>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link
                to="/faq"
                className="inline-flex items-center text-skk-red hover:text-red-700 font-semibold"
              >
                Lihat Semua FAQ
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-skk-black text-skk-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Siap Memulai Perjalanan Karate Anda?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-8"
            >
              Bergabunglah dengan kami dan rasakan manfaat karate yang sesungguhnya
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                to="/kontak"
                className="inline-flex items-center bg-skk-red hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Hubungi Kami Sekarang
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
