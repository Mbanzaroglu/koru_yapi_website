"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  "Polat Derya",
  "Aqua Park",
  "Skyline Towers",
  "Green Valley",
  "Nova Residence",
  "Elite Homes",
  "Blue Horizon",
  "Urban Vista",
  "Grand Park",
  "Sunset Villas",
  "Ocean Pearl",
  "Majestic Heights",
  "Harmony Suites",
  "Golden Gate",
  "Infinity Tower",
];

const Hero = ({ setAnimationDone }: { setAnimationDone: (done: boolean) => void }) => {
  const [currentProject, setCurrentProject] = useState("");
  const [isFinal, setIsFinal] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < projects.length) {
        setCurrentProject(projects[index]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinal(true);
          setAnimationDone(true);
        }, 500);
      }
    }, 100); // Daha hızlı geçiş

    return () => clearInterval(interval);
  }, [setAnimationDone]);

  return (
    <motion.section
      className="fixed top-0 left-0 w-full h-screen flex items-center justify-center text-center bg-black z-50"
      initial={{ opacity: 1 }}
      animate={isFinal ? { opacity: 0, transitionEnd: { display: "none" } } : { opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Video */}
      <video autoPlay loop muted className="absolute w-full h-full object-cover opacity-30">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Animated Text */}
    <div className="relative flex items-center gap-1 text-5xl md:text-7xl font-bold text-white">
      {/* "KORU" yazısı animasyonlu giriş */}
      <motion.span
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="font-bold"
      >
        KORU
      </motion.span>

      {/* Slot makinesi efekti */}
      {!isFinal ? (
        <motion.span
        key={currentProject}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.1 }}
        className="text-gray-300 font-normal"
        >
        | {currentProject}
        </motion.span>
      ) : (
        <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        >
        |
        </motion.span>
      )}

      {/* "YAPI" yazısı animasyonlu giriş */}
      {isFinal && (
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        YAPI
        </motion.span>
      )}
    </div>
    </motion.section>
  );
};

const Page = () => {
  const [animationDone, setAnimationDone] = useState(false);

  return (
    <>
      {/* Hero Animation (Sayfa açılışında ekranı kaplar) */}
      {!animationDone && <Hero setAnimationDone={setAnimationDone} />}

      {/* Normal Sayfa İçeriği (Animasyon bitince görünür) */}
      <div className={`relative transition-opacity duration-500 ${animationDone ? "opacity-100" : "opacity-0"}`}>
        {/* Background Video (Sabit Kalacak) */}
        <video autoPlay loop muted className="absolute w-full h-full object-cover opacity-30">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Navbar ve Footer Animasyon Bittikten Sonra Görünecek */}
        <div className="relative z-10">
          {/* KORU YAPI Son Halde Sabit Kalıyor */}
          <div className="h-screen flex items-center justify-center">
            <h1 className="text-6xl md:text-8xl text-white">
              <span className="font-bold">KORU</span> YAPI
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
