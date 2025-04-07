"use client";

export default function ComingSoonPage() {
  return (
    <main className="relative w-full h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Arka Plan Görselleri */}
      <picture className="absolute inset-0 w-full h-full z-0">
        <source srcSet="/mobile-comingSoon.jpg" media="(max-width: 768px)" />
        <img
          src="/pc-comingSoon.jpg"
          alt="Web sitemiz hazırlanıyor"
          className="w-full h-full object-cover"
        />
      </picture>

      {/* Overlay (karartma katmanı) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* İçerik */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center space-y-4">
        <h1
          className="text-4xl md:text-6xl font-bold tracking-tight"
          style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
        >
          Web sitemiz güncelleniyor...
        </h1>

        <p className="text-lg md:text-3xl mt-6">En kısa zamanda sizlerle olacağız.</p>
        <p className="text-lg md:text-2xl font-semibold">Teşekkürler.</p>

        <p className="text-base md:text-lg mt-4">
          <span className="font-semibold">İletişim:</span> +90 553 542 22 34
        </p>

        <p className="text-base md:text-lg mt-1">
          <span className="font-semibold">Adres:</span> Esentepe Mah. Büyükdere Cd. Ferko Signature No: 175 / 6 ŞİŞLİ / İSTANBUL
        </p>
      </div>
    </main>
  );
}
