import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const faqs = [
    {
      question: "Bagaimana cara mendaftar?",
      answer: "Anda dapat menghubungi kami via WhatsApp di +62 812-3456-7890 atau langsung datang ke dojo setiap hari Senin–Jumat pukul 16.00–20.00. Kami akan memberikan formulir pendaftaran dan informasi lengkap tentang program yang tersedia."
    },
    {
      question: "Berapa biaya latihan?",
      answer: "Biaya latihan mulai dari Rp150.000 per bulan untuk program reguler, dengan diskon khusus untuk siswa sekolah sebesar 20%. Kami juga menawarkan paket 3 bulan dengan potongan 10% dan paket 6 bulan dengan potongan 15%. Biaya sudah termasuk seragam latihan untuk pemula."
    },
    {
      question: "Apakah menerima anak-anak?",
      answer: "Ya, kami menerima murid mulai usia 6 tahun ke atas. Kami memiliki program khusus untuk anak-anak dengan pendekatan yang lebih menyenangkan dan aman. Instruktur kami berpengalaman dalam mengajar anak-anak dan memahami kebutuhan khusus mereka."
    },
    {
      question: "Apakah ada program untuk kompetisi?",
      answer: "Tersedia kelas khusus bagi siswa yang ingin fokus ke kompetisi. Program ini meliputi latihan intensif 4 kali seminggu, pelatihan mental, dan persiapan fisik khusus. Kami juga memiliki tim kompetisi yang telah meraih berbagai prestasi di tingkat regional dan nasional."
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk mencapai sabuk hitam?",
      answer: "Waktu yang dibutuhkan bervariasi tergantung pada dedikasi dan kemampuan individu. Rata-rata, dibutuhkan waktu 4-6 tahun latihan konsisten untuk mencapai sabuk hitam (Dan 1). Kami mengikuti standar internasional dengan ujian berkala setiap 3-6 bulan sekali."
    },
    {
      question: "Apakah ada kelas untuk pemula?",
      answer: "Tentu saja! Kami memiliki kelas khusus untuk pemula yang diajarkan dari dasar. Instruktur akan memberikan perhatian khusus untuk memastikan teknik dasar dipelajari dengan benar. Kelas pemula biasanya diadakan 2 kali seminggu dengan durasi 1 jam per sesi."
    },
    {
      question: "Apa yang harus dibawa saat latihan pertama?",
      answer: "Untuk latihan pertama, cukup bawa pakaian olahraga yang nyaman (celana training dan kaos). Kami akan menyediakan seragam karate (gi) untuk pemula. Pastikan juga membawa air minum dan handuk kecil. Jangan lupa untuk datang 15 menit lebih awal untuk pendaftaran."
    },
    {
      question: "Apakah ada kelas khusus untuk wanita?",
      answer: "Ya, kami menyediakan kelas khusus untuk wanita yang fokus pada teknik pertahanan diri dan kebugaran. Kelas ini diadakan pada hari Sabtu pagi dan dipimpin oleh instruktur wanita berpengalaman. Kami memahami kebutuhan khusus wanita dalam belajar karate."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
              Pertanyaan yang Sering Diajukan
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Temukan jawaban untuk pertanyaan umum tentang Sekolah Karate Kuningan
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-skk-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-skk-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-skk-red focus:ring-inset"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-skk-black pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <svg className="w-5 h-5 text-skk-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-skk-black mb-6">
              Masih Ada Pertanyaan?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Jika Anda masih memiliki pertanyaan yang belum terjawab, jangan ragu untuk menghubungi kami. 
              Tim kami siap membantu Anda dengan senang hati.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-skk-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="mailto:info@sekolahkaratekuningan.com"
                className="bg-skk-red hover:bg-red-700 text-skk-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email
              </a>
              <a
                href="tel:+6281234567890"
                className="border-2 border-skk-red text-skk-red hover:bg-skk-red hover:text-skk-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Telepon
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
