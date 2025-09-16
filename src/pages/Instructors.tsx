import React from 'react';
import { motion } from 'framer-motion';

const Instructors: React.FC = () => {
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

  const instructors = [
    {
      name: "Heni E. Sulastri",
      rank: "Sabuk Hitam Dan V",
      experience: "30 tahun pengalaman",
      specialty: "Pendiri SKK",
      description: "Pemegang sabuk hitam Dan V dengan pengalaman mengajar lebih dari 30 tahun. Spesialis dalam teknik kumite dan kihon dasar.",
      achievements: ["Juara 1 Asia Pacific 1991", "BINPRES FORKI", "BINPRES BUDOKAI", "Sport Science KONI"],
      image: "/Heni.jpeg"
    }
  ];

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Instruktur Kami</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Tim instruktur berpengalaman dan berdedikasi untuk membimbing perjalanan karate Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-16 bg-skk-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.name}
                variants={fadeInUp}
                className="bg-skk-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  {/* Instructor Header */}
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-skk-red rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                      {instructor.image ? (
                        <img 
                          src={instructor.image} 
                          alt={instructor.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <span className="text-skk-white font-bold text-2xl">
                          {instructor.name.split(' ')[1].charAt(0)}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-skk-black mb-2">{instructor.name}</h3>
                    <p className="text-skk-red font-semibold text-lg mb-1">{instructor.rank}</p>
                    <p className="text-gray-600">{instructor.experience}</p>
                  </div>

                  {/* Specialty */}
                  <div className="mb-4">
                    <span className="inline-block bg-skk-red text-skk-white px-3 py-1 rounded-full text-sm font-medium">
                      {instructor.specialty}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {instructor.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-skk-black mb-3">Prestasi & Sertifikasi:</h4>
                    <ul className="space-y-2">
                      {instructor.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-skk-red mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-skk-black mb-6">
              Siap Bergabung dengan Kami?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Tim instruktur kami siap membimbing Anda dalam perjalanan karate. 
              Hubungi kami untuk informasi lebih lanjut.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+6281234567890"
                className="border-2 border-skk-red text-skk-red hover:bg-skk-red hover:text-skk-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Hubungi Kami
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Instructors;
