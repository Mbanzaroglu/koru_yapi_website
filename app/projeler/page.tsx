"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Building, Ruler, Layers, Thermometer, Car, TreePalm, ChevronLeft, ChevronRight } from "lucide-react";

const primaryColor = "#082e52"; // Mavi alanın rengi

const projects = [
    {
        id: 1,
        title: "Modern Villa",
        location: "İstanbul, Türkiye",
        description: "Modern mimariye sahip lüks bir villa projesi.",
        details: [
            {
                title: "Teknik Detaylar",
                content: [
                    { icon: <Ruler size={30} color={primaryColor} />, label: "Toplam Alan", value: "450 m²" },
                    { icon: <Layers size={30} color={primaryColor} />, label: "Kat Sayısı", value: "2 Kat + Çatı Terası" },
                    { icon: <Building size={30} color={primaryColor} />, label: "Yapı Malzemeleri", value: "Betonarme, Çelik, Cam Cephe" },
                    { icon: <Thermometer size={30} color={primaryColor} />, label: "Isıtma & Soğutma", value: "Merkezi VRF, Yerden Isıtma, Akıllı Ev" },
                    { icon: <TreePalm size={30} color={primaryColor} />, label: "Dış Mekan", value: "60 m² Özel Havuz, Bahçe, Barbekü" },
                    { icon: <Car size={30} color={primaryColor} />, label: "Otopark", value: "Kapalı Otopark (2 Araç)" },
                ],
            },
            {
                title: "Proje Açıklaması",
                text: "Bu proje, doğayla uyumlu, sürdürülebilir ve estetik açıdan çağdaş bir yaşam alanı sunmak için tasarlanmıştır. Geniş cam yüzeyler, yüksek tavanlar ve minimalist iç mekanlarla donatılmış olan villa, konfor ve lüksü bir arada sunmaktadır.",
                images: ["/project_image2.jpg", "/project_image3.jpg"],
            },
        ],
        images: ["/project_image1.jpg"],
    },
    {
        id: 2,
        title: "Şehir Manzaralı Penthouse",
        location: "Ankara, Türkiye",
        description: "Eşsiz şehir manzarasına sahip modern bir penthouse.",
        details: [
            {
                title: "Teknik Detaylar",
                content: [
                    { icon: <Ruler size={30} color={primaryColor} />, label: "Toplam Alan", value: "320 m²" },
                    { icon: <Layers size={30} color={primaryColor} />, label: "Kat Sayısı", value: "3 Kat + Teras" },
                    { icon: <Building size={30} color={primaryColor} />, label: "Yapı Malzemeleri", value: "Betonarme, Çelik, Cam Cephe" },
                    { icon: <Thermometer size={30} color={primaryColor} />, label: "Isıtma & Soğutma", value: "Merkezi Klima, Yerden Isıtma, Akıllı Ev" },
                    { icon: <TreePalm size={30} color={primaryColor} />, label: "Dış Mekan", value: "100 m² Teras, Barbekü Alanı" },
                    { icon: <Car size={30} color={primaryColor} />, label: "Otopark", value: "Özel Garaj (2 Araç)" },
                ],
            },
            {
                title: "Proje Açıklaması",
                text: "Şehrin merkezinde konfor ve lüksü bir araya getiren bu penthouse, geniş cam cepheleri ile benzersiz bir manzara sunmaktadır. Akıllı ev sistemleriyle donatılmış olup, modern yaşamın tüm gereksinimlerini karşılamaktadır.",
                images: ["/project_image3.jpg", "/project_image4.jpg"],
            },
        ],
        images: ["/project_image2.jpg"],
    },
    {
        id: 3,
        title: "Doğa İçinde Villa",
        location: "Bodrum, Türkiye",
        description: "Doğayla iç içe, sakin ve huzurlu bir villa projesi.",
        details: [
            {
                title: "Teknik Detaylar",
                content: [
                    { icon: <Ruler size={30} color={primaryColor} />, label: "Toplam Alan", value: "550 m²" },
                    { icon: <Layers size={30} color={primaryColor} />, label: "Kat Sayısı", value: "2 Kat" },
                    { icon: <Building size={30} color={primaryColor} />, label: "Yapı Malzemeleri", value: "Ahşap, Taş, Cam Cephe" },
                    { icon: <Thermometer size={30} color={primaryColor} />, label: "Isıtma & Soğutma", value: "Yerden Isıtma, Doğal Havalandırma" },
                    { icon: <TreePalm size={30} color={primaryColor} />, label: "Dış Mekan", value: "250 m² Bahçe, Özel Havuz" },
                    { icon: <Car size={30} color={primaryColor} />, label: "Otopark", value: "Kapalı Garaj (2 Araç)" },
                ],
            },
            {
                title: "Proje Açıklaması",
                text: "Doğayla iç içe huzurlu bir yaşam sunan bu villa, sürdürülebilir mimarisi ile dikkat çekmektedir. Geniş bahçesi, özel havuzu ve modern detaylarıyla benzersiz bir konfor sağlar.",
                images: ["/project_image4.jpg", "/project_image5.jpg"],
            },
        ],
        images: ["/project_image3.jpg"],
    },
];

const Projects = () => {
    const [expandedProject, setExpandedProject] = useState<number | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animationKey, setAnimationKey] = useState(0);

    // Slide değiştikçe animasyonu yeniden tetiklemek için:
    const handleSlideChange = (newSlide: number) => {
        setCurrentSlide(newSlide);
        setAnimationKey((prevKey) => prevKey + 1); // Her slide değişiminde key değişir
    };

    return (
        <section className="w-full min-h-screen bg-white flex flex-col items-center py-12 px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
                Projelerimiz
            </h1>

            <div className="w-full max-w-5xl flex flex-col gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, y: 50 }} // Başlangıçta aşağıda ve opaklığı sıfır
                        animate={{ opacity: 1, y: 0 }} // Görünür hale gelip yukarı kayıyor
                        transition={{ duration: 0.6, delay: index * 0.2 }} // Her projeye gecikmeli animasyon
                        className={`relative bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-500 flex flex-col md:flex-row ${
                            expandedProject === project.id ? "md:flex-row" : "md:flex-col"
                        }`}
                    >
                        {/* Clickable Card */}
                        <div
                            className={`cursor-pointer ${
                                expandedProject === project.id ? "md:w-1/2 w-full" : "w-full"
                            } transition-all duration-500`}
                            onClick={() => {
                                setExpandedProject(expandedProject === project.id ? null : project.id);
                                setCurrentSlide(0); // Reset slide on open
                            }}
                        >
                            {/* Image Section */}
                            <div className="relative w-full h-64 md:h-80">
                                <Image
                                    src={project.images[0]}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-all duration-500"
                                />
                                {/* Location Badge */}
                                <div className="absolute bottom-3 left-3 bg-gray-800 bg-opacity-50 text-gray-200 text-sm px-3 py-1 rounded-md">
                                    {project.location}
                                </div>
                            </div>

                            {/* Title & Description */}
                            <div className="p-6" style={{ backgroundColor: primaryColor, color: "white" }}>
                                <h2 className="text-2xl font-semibold">{project.title}</h2>
                                <p className="text-gray-300 mt-2">{project.description}</p>
                            </div>
                        </div>

                        {/* Expanded Content */}
                        {expandedProject === project.id && (
                            <motion.div
                                className="p-6 bg-white w-full md:w-1/2 flex flex-col gap-6 transition-all duration-500 overflow-hidden"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Horizontal Scroll Controls */}
                                <div className="flex justify-between items-center">
                                    {/* Sol ok - Önceki slayta geçiş */}
                                    <button
                                        onClick={() =>
                                            handleSlideChange(currentSlide > 0 ? currentSlide - 1 : project.details.length - 1)
                                        }
                                        className="p-2 bg-gray-200 rounded-full"
                                    >
                                        <ChevronLeft size={24} color={primaryColor} />
                                    </button>

                                    <h3 className="text-xl font-bold" style={{ color: primaryColor }}>
                                        {project.details[currentSlide].title}
                                    </h3>

                                    {/* Sağ ok - Sonraki slayta geçiş */}
                                    <button
                                        onClick={() =>
                                            handleSlideChange(currentSlide < project.details.length - 1 ? currentSlide + 1 : 0)
                                        }
                                        className="p-2 bg-gray-200 rounded-full"
                                    >
                                        <ChevronRight size={24} color={primaryColor} />
                                    </button>
                                </div>

                                {/* Dynamic Content */}
                                <div className="flex flex-col items-center">
                                    {project.details[currentSlide].content ? (
                                        <div className="grid grid-cols-2 gap-8 w-full text-gray-700">
                                            {project.details[currentSlide].content.map((spec, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -30 }} // Başlangıçta sol tarafta ve görünmez
                                                    animate={{ opacity: 1, x: 0 }} // Görünür hale gelip sağa kayıyor
                                                    transition={{ duration: 0.4, delay: index * 0.2 }} // Sıralı şekilde animasyon
                                                    className="flex items-center gap-2"
                                                >
                                                    {spec.icon}
                                                    <span className="text-sm">
                                                        <strong>{spec.label}</strong>: {spec.value}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    ) : (
                                        <>
                                            {/* Images for Each Slide */}
                                            <div className="flex gap-4 overflow-x-auto">
                                                {expandedProject === project.id &&
                                                    project.details[currentSlide].images.map((img, index) => (
                                                        <motion.div
                                                            key={`${animationKey}-${index}`} // Her değişimde farklı key kullanılır
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ duration: 0.4, delay: index * 0.2 }}
                                                            className="min-w-[120px] h-32 md:min-w-[200px] md:h-40 relative"
                                                        >
                                                            <Image
                                                                src={img}
                                                                alt={`${project.title} extra ${index}`}
                                                                layout="fill"
                                                                objectFit="cover"
                                                                className="rounded-lg"
                                                            />
                                                        </motion.div>
                                                    ))}
                                            </div>

                                            {/* Text for Each Slide */}
                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }} // Başlangıçta aşağıda ve görünmez
                                                animate={{ opacity: 1, y: 0 }} // Yavaşça yukarı çıkar
                                                transition={{ duration: 0.5, delay: 0.5 }} // 0.5 saniye sonra belirir
                                                className="text-gray-700 mt-4"
                                            >
                                                {project.details[currentSlide].text}
                                            </motion.p>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
