"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        projectStage: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Form başarıyla gönderildi!");
    };

    return (
        <section className="bg-white min-h-screen flex flex-col items-center py-12 px-6">
            {/* Başlık */}
            <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center"
            >
            İletişim
            </motion.h1>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-12 w-full max-w-6xl"
            >
            {/* İletişim Bilgileri */}
            <div className="rounded-lg p-6 w-full md:w-1/2 flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Bize Ulaşın</h2>
                
                <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-4 text-gray-700"
                >
                <MapPin size={24} className="text-blue-600" />
                <span>İstanbul, Türkiye</span>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex items-center gap-4 text-gray-700"
                >
                <Phone size={24} className="text-blue-600" />
                <span>+90 555 555 55 55</span>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center gap-4 text-gray-700"
                >
                <Mail size={24} className="text-blue-600" />
                <span>info@firma.com</span>
                </motion.div>
            </div>

            {/* İletişim Formu */}
            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-[#082e52] shadow-lg rounded-lg p-6 w-full md:w-1/2"
            >
                {/* Ad Soyad */}
                <div className="mb-4">
                <label className="block text-white font-bold mb-2">Ad Soyad</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

                {/* E-posta */}
                <div className="mb-4">
                <label className="block text-white font-bold mb-2">E-posta</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

                {/* Telefon */}
                <div className="mb-4">
                <label className="block text-white font-bold mb-2">Telefon</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

                {/* Proje Türü */}
                <div className="mb-4">
                <label className="block text-white font-bold mb-2">Proje Türü</label>
                <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Seçiniz...</option>
                    <option value="konut">Konut Projesi</option>
                    <option value="ticari">Ticari Proje</option>
                    <option value="restorasyon">Restorasyon</option>
                    <option value="altyapı">Altyapı İnşaatı</option>
                </select>
                </div>

                {/* Proje Aşaması */}
                <div className="mb-4">
                <label className="block text-white font-bold mb-2">Proje Aşaması</label>
                <div className="flex flex-wrap gap-4 text-white">
                    {["Arazi Seçimi", "Mimari Tasarım", "İnşaat Aşaması", "Tamamlandı"].map((stage) => (
                    <label key={stage} className="flex items-center gap-2">
                        <input type="radio" name="projectStage" value={stage} onChange={handleChange} required />
                        {stage}
                    </label>
                    ))}
                </div>
                </div>

                {/* Ek Notlar */}
                <div className="mb-4">
                <label className="block text-white font-bold mb-2">Ek Notlar</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                </div>

                {/* Gönder Butonu */}
                <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-all"
                >
                Gönder
                </motion.button>
            </motion.form>
            </motion.div>
        </section>
    );
};

export default ContactPage;
