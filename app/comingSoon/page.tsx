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

      {/* Metin */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Web sitemiz güncelleniyor</h1>
        <p className="italic text-lg md:text-xl mb-6">En kısa zamanda sizlerle olacağız. Teşekkürler.</p>
        <p className="text-md md:text-lg">
          İletişim: <span className="font-semibold">Şafak Türemez</span> — <a href="tel:+905535422234" className="underline hover:text-gray-300">+90 553 542 22 34</a>
        </p>
      </div>
    </main>
  );
}
