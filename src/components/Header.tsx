"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className={`${styles.header} glass`}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Link href="/" className="flex items-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Image
                                src="/logo-final.png"
                                alt="Vidraçaria Criativa Logo"
                                width={100}
                                height={100}
                                className={styles.logoImage}
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                            <span className="gradient-text">Vidraçaria Criativa</span>
                        </Link>
                    </div>

                    <nav className={styles.desktopNav}>
                        <Link href="#home" className={styles.navLink}>Início</Link>
                        <Link href="#services" className={styles.navLink}>Especialidades</Link>
                        <Link href="#portfolio" className={styles.navLink}>Serviços</Link>
                        <Link href="#contact" className="btn btn-primary">
                            Pedir Orçamento
                        </Link>
                    </nav>

                    <button
                        className={styles.mobileMenuBtn}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg pt-24 px-6 md:hidden flex flex-col gap-6"
                    >
                        <Link href="#home" onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-slate-800">Início</Link>
                        <Link href="#services" onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-slate-800">Especialidades</Link>
                        <Link href="#portfolio" onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-slate-800">Serviços</Link>
                        <Link href="#contact" onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-blue-600">Contato</Link>

                        <a href="#contact" onClick={() => setIsOpen(false)} className="btn btn-primary w-full text-center mt-4">
                            Pedir Orçamento Agora
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
