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
    const header = document.getElementById("header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(1 - scrollY / 250, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Geçici olarak linkleri devre dışı bırakmak için kullanılan fonksiyon
  const handleDisabledClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Tıklamayı engeller
  };

  return (
    <>
      <nav
        id="header"
        className="fixed top-0 left-0 w-full z-50 shadow-md transition-opacity duration-300"
        style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Link href="/" onClick={handleDisabledClick}> {/* Link geçici olarak devre dışı */}
                <span className="text-2xl font-extrabold tracking-wide cursor-pointer text-white">
                Koru <span className="font-normal">Yapı</span>
                </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 text-white">
            <Link href="/projeler" onClick={handleDisabledClick} className="hover:text-[#6d7257] transition cursor-not-allowed opacity-60">
              Projeler
            </Link>
            <Link href="/hizmetler" onClick={handleDisabledClick} className="hover:text-[#6d7257] transition cursor-not-allowed opacity-60">
              Hizmetler
            </Link>
            <Link href="/hakkimizda" onClick={handleDisabledClick} className="hover:text-[#6d7257] transition cursor-not-allowed opacity-60">
              Hakkında
            </Link>
            <Link href="/iletisim" onClick={handleDisabledClick} className="hover:text-[#6d7257] transition cursor-not-allowed opacity-60">
              İletişim
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div style={{ height: `${headerHeight}px` }}></div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col bg-black px-6 py-4 space-y-4 fixed top-[64px] left-0 w-full z-40 text-white"
        >
          <Link href="/projeler" onClick={(e) => { handleDisabledClick(e); setIsOpen(false); }} className="hover:text-green-400 transition cursor-not-allowed opacity-60">
            Projeler
          </Link>
          <Link href="/hizmetler" onClick={(e) => { handleDisabledClick(e); setIsOpen(false); }} className="hover:text-green-400 transition cursor-not-allowed opacity-60">
            Hizmetler
          </Link>
          <Link href="/hakkimizda" onClick={(e) => { handleDisabledClick(e); setIsOpen(false); }} className="hover:text-green-400 transition cursor-not-allowed opacity-60">
            Hakkında
          </Link>
          <Link href="/iletisim" onClick={(e) => { handleDisabledClick(e); setIsOpen(false); }} className="hover:text-green-400 transition cursor-not-allowed opacity-60">
            İletişim
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default Header;
