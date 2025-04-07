'use client';

import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 mt-0">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Koru Yapı. All rights reserved.</p>
                <div className="flex space-x-4">
                    <Link href="/privacy" className="hover:text-green-400 transition">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-green-400 transition">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
