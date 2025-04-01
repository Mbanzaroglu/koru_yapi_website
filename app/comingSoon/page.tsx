"use client";

export default function ComingSoonPage() {
  return (
    <main className="relative w-full h-screen flex flex-col items-center justify-center bg-black text-white">
      {/* Arka Planda Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

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
          <span className="font-semibold">İletişim:</span>  +90 553 542 22 34
        </p>
      </div>
    </main>
  );
}
