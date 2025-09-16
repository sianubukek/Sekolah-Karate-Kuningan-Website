import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
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
    <div className="min-h-screen bg-skk-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-skk-black via-skk-black to-gray-900 text-skk-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Tentang Kami</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Mengenal lebih dekat Sekolah Karate Kuningan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
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
              className="text-3xl md:text-4xl font-bold text-skk-black mb-8"
            >
              Visi Kami
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-skk-red text-skk-white p-8 rounded-lg max-w-4xl mx-auto"
            >
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                "Menjadi dojo karate terdepan di Jawa Barat yang membina atlet berprestasi dan berkarakter."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
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
              className="text-3xl md:text-4xl font-bold text-skk-black mb-8"
            >
              Misi Kami
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="bg-skk-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-skk-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-skk-white font-bold text-2xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-skk-black mb-4">Disiplin & Dedikasi</h3>
                <p className="text-gray-600">
                  Melatih dengan disiplin dan dedikasi tinggi untuk mencapai prestasi terbaik.
                </p>
              </div>
              <div className="bg-skk-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-skk-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-skk-white font-bold text-2xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-skk-black mb-4">Pembentukan Karakter</h3>
                <p className="text-gray-600">
                  Membentuk karakter yang kuat, sportif, dan percaya diri pada setiap siswa.
                </p>
              </div>
              <div className="bg-skk-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-skk-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-skk-white font-bold text-2xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-skk-black mb-4">Prestasi Nasional</h3>
                <p className="text-gray-600">
                  Mengharumkan nama bangsa lewat prestasi karate di tingkat nasional.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-skk-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-skk-black mb-6">
                Sejarah Singkat
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Didirikan tahun 2001 oleh Sensei Heni Sulastri, SKK telah melatih lebih dari 500 siswa 
                  dan mencetak puluhan atlet berprestasi tingkat daerah dan nasional.
                </p>
                <p>
                  Selama lebih dari 20 tahun perjalanan, kami telah membuktikan komitmen dalam mengembangkan 
                  karate di Kuningan dan sekitarnya, dengan fokus pada pembentukan karakter dan 
                  prestasi olahraga.
                </p>
                <p>
                  Banyak alumni kami yang telah berhasil meraih prestasi di berbagai kompetisi 
                  karate, baik tingkat regional maupun nasional, membuktikan kualitas pelatihan 
                  yang kami berikan.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="bg-gray-100 p-8 rounded-lg"
            >
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-skk-red mb-2">500+</div>
                  <div className="text-gray-600">Siswa Terlatih</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-skk-red mb-2">20</div>
                  <div className="text-gray-600">Tahun Pengalaman</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-skk-red mb-2">50+</div>
                  <div className="text-gray-600">Atlet Berprestasi</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-skk-red mb-2">100+</div>
                  <div className="text-gray-600">Penghargaan</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Karate Oath Section */}
      <section className="py-16 bg-skk-red text-skk-white">
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
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              Sumpah Karate
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-100 mb-12 max-w-4xl mx-auto"
            >
              Sebagai bagian dari tradisi karate yang mulia, setiap siswa SKK memegang teguh nilai-nilai luhur yang tercermin dalam Sumpah Karate. 
              Sumpah ini bukan hanya kata-kata, melainkan komitmen hidup yang membentuk karakter dan kepribadian.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="bg-skk-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto"
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-skk-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-skk-white font-bold text-lg">1</span>
                  </div>
                  <p className="text-lg text-skk-white leading-relaxed">
                    <span className="font-semibold">Sanggup memelihara kepribadian</span> - Membangun karakter yang kuat, disiplin, dan berintegritas dalam setiap aspek kehidupan.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-skk-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-skk-white font-bold text-lg">2</span>
                  </div>
                  <p className="text-lg text-skk-white leading-relaxed">
                    <span className="font-semibold">Sanggup patuh pada kejujuran</span> - Menjunjung tinggi nilai kejujuran dalam setiap tindakan dan keputusan yang diambil.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-skk-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-skk-white font-bold text-lg">3</span>
                  </div>
                  <p className="text-lg text-skk-white leading-relaxed">
                    <span className="font-semibold">Sanggup mempertinggi prestasi</span> - Berkomitmen untuk terus belajar, berkembang, dan mencapai prestasi terbaik dalam karate dan kehidupan.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-skk-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-skk-white font-bold text-lg">4</span>
                  </div>
                  <p className="text-lg text-skk-white leading-relaxed">
                    <span className="font-semibold">Sanggup menjaga sopan santun</span> - Menghormati sesama, menghargai senior, dan menunjukkan rasa hormat dalam setiap interaksi.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-skk-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-skk-white font-bold text-lg">5</span>
                  </div>
                  <p className="text-lg text-skk-white leading-relaxed">
                    <span className="font-semibold">Sanggup menguasai diri</span> - Mengembangkan kontrol diri yang baik, kesabaran, dan kemampuan untuk mengendalikan emosi dalam situasi apapun.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-100 mt-8 max-w-3xl mx-auto italic"
            >
              "Sumpah ini adalah fondasi moral yang membimbing setiap langkah perjalanan karate kami, 
              menciptakan tidak hanya atlet yang handal, tetapi juga manusia yang berkarakter mulia."
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              Nilai-Nilai Kami
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-skk-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Disiplin</h3>
                <p className="text-gray-300">Membangun karakter disiplin dalam setiap latihan</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-skk-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sportivitas</h3>
                <p className="text-gray-300">Menjunjung tinggi nilai-nilai fair play</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-skk-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Semangat</h3>
                <p className="text-gray-300">Membangun motivasi dan semangat juang</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-skk-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Dedikasi</h3>
                <p className="text-gray-300">Komitmen penuh dalam setiap pencapaian</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
