import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Siap memulai perjalanan karate Anda? Hubungi kami sekarang!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-skk-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-skk-black mb-6"
            >
              Informasi Kontak
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto"
            >
              Hubungi kami melalui berbagai cara yang tersedia di bawah ini
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Email */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-skk-red rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-skk-black mb-4">Email</h3>
              <p className="text-gray-600 mb-4">sekolahkaratekunigan@gmail.com</p>
              <a
                href="mailto:sekolahkaratekunigan@gmail.com"
                className="inline-flex items-center text-skk-red hover:text-red-700 font-semibold"
              >
                Kirim Email
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-skk-red rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-skk-black mb-4">WhatsApp</h3>
              <p className="text-gray-600 mb-4">6287724111174</p>
              <a
                href="https://wa.me/6287724111174"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-skk-red hover:text-red-700 font-semibold"
              >
                Chat WhatsApp
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Address */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-skk-red rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-skk-black mb-4">Alamat</h3>
              <p className="text-gray-600 mb-4">
                Pandapa Paramarta, Kompleks Stadion Mashud Wisnu Saputra Kuningan, Jawa Barat
              </p>
              <a
                href="https://www.google.com/maps/place/Pandapa+Paramarta/@-6.9763773,108.4840877,19.2z/data=!4m6!3m5!1s0x2e6f16828238f3d3:0xe958b96e7b2b2758!8m2!3d-6.9762997!4d108.4845323!16s%2Fg%2F11b6362hxg?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-skk-red hover:text-red-700 font-semibold"
              >
                Lihat di Google Maps
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
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
              Jadwal Latihan
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto"
            >
              Bergabunglah dengan kami pada jadwal latihan berikut
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              <div className="bg-skk-white p-8 rounded-lg shadow-md">
                <div className="text-center">
                  <div className="w-16 h-16 bg-skk-red rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-skk-black mb-4">Senin & Kamis</h3>
                  <p className="text-2xl font-bold text-skk-red mb-2">16:00 WIB</p>
                  <p className="text-gray-600">Latihan reguler untuk semua level</p>
                </div>
              </div>

              <div className="bg-skk-white p-8 rounded-lg shadow-md">
                <div className="text-center">
                  <div className="w-16 h-16 bg-skk-red rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-skk-black mb-4">Minggu</h3>
                  <p className="text-2xl font-bold text-skk-red mb-2">08:00 WIB</p>
                  <p className="text-gray-600">Latihan khusus untuk pemula</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
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
              Lokasi Kami
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto"
            >
              Temukan kami di Pandapa Paramarta, Kompleks Stadion Mashud Wisnu Saputra Kuningan
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-gray-200 rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456789!2d108.4840877!3d-6.9763773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f16828238f3d3%3A0xe958b96e7b2b2758!2sPandapa%20Paramarta!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pandapa Paramarta Location"
                className="w-full h-96"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
