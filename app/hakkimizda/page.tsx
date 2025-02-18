"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const primaryColor = "#082e52"; // Şirketin ana rengi (mavi)

const founders = [
  {
    name: "Mustafa Banzaroğlu",
    title: "CEO & Co-Founder",
    image: "/mustafa.png",
    linkedin: "https://linkedin.com/in/mustafabanzaroglu",
    twitter: "https://twitter.com/mustafabanzaroglu",
  },
  {
    name: "Şafak Türemez",
    title: "CTO & Co-Founder",
    image: "/safak.png",
    linkedin: "https://linkedin.com/in/safakturemez",
    twitter: "https://twitter.com/safakturemez",
  },
];

const About = () => {
  return (
    <motion.section
      className="w-full min-h-screen bg-white flex flex-col items-center py-12 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
        Hakkımızda
      </h1>

      {/* Misyon & Vizyon */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6">
        <motion.div
          className="flex-1 bg-[#082e52] text-white p-6 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold">Misyonumuz</h2>
          <p className="mt-2 text-gray-200">
            Sürdürülebilir, yenilikçi ve estetik çözümler sunarak modern yaşam alanları tasarlamak.
          </p>
        </motion.div>
        <motion.div
          className="flex-1 bg-[#082e52] text-white p-6 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold">Vizyonumuz</h2>
          <p className="mt-2 text-gray-200">
            Geleceğin mimarisine yön veren, yenilikçi ve sürdürülebilir projeler geliştiren lider bir firma olmak.
          </p>
        </motion.div>
      </div>

      {/* Kurucu Ortaklar */}
      <h2 className="text-3xl font-bold text-black my-8">Kurucu Ortaklarımız</h2>
      <div className="flex justify-center gap-16 w-full max-w-5xl">
        {founders.map((founder, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-48 h-48 relative mb-4 overflow-hidden rounded-full border-4 border-[#082e52]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={founder.image}
                alt={founder.name}
                width={192}
                height={192}
                className="rounded-full object-cover w-full h-full"
                />

            </motion.div>
            <h3 className="text-2xl font-bold text-black">{founder.name}</h3>
            <p className="text-[18px]" style={{ color: primaryColor }}>
              {founder.title}
            </p>
            <div className="flex gap-4 mt-3">
              <motion.a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <FaLinkedin size={28} color="black" />
              </motion.a>
              <motion.a
                href={founder.twitter}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <FaTwitter size={28} color="black" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
