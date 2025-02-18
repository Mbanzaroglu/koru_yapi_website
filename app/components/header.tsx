'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // Sayfa yüklendiğinde header yüksekliğini al ve state'e ata
    const header = document.getElementById("header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }

    // Scroll event'ini dinleyerek opaklığı güncelle
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(1 - scrollY / 250, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <nav
        id="header"
        className="fixed top-0 left-0 w-full z-50 shadow-md transition-opacity duration-300"
        style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Animated Logo */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Link href="/">
              <span className="text-2xl font-bold tracking-wide cursor-pointer text-white">
                Koru <span className="font-normal">Yapı</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link href="/projeler" className="hover:text-[#6d7257] transition">Projeler</Link>
            <Link href="/hizmetler" className="hover:text-[#6d7257] transition">Hizmetler</Link>
            <Link href="/hakkimizda" className="hover:text-[#6d7257] transition">Hakkında</Link>
            <Link href="/iletisim" className="hover:text-[#6d7257] transition">İletişim</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Header Yüksekliği Kadar Boşluk Bırak */}
      <div style={{ height: `${headerHeight}px` }}></div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col bg-black px-6 py-4 space-y-4 fixed top-[64px] left-0 w-full z-40"
        >
          <Link href="/projeler" className="hover:text-green-400 transition" onClick={() => setIsOpen(false)}>Projeler</Link>
          <Link href="/hizmetler" className="hover:text-green-400 transition" onClick={() => setIsOpen(false)}>Hizmetler</Link>
          <Link href="/hakkimizda" className="hover:text-green-400 transition" onClick={() => setIsOpen(false)}>Hakkında</Link>
          <Link href="/iletisim" className="hover:text-green-400 transition" onClick={() => setIsOpen(false)}>İletişim</Link>
        </motion.div>
      )}
    </>
  );
};

export default Header;
