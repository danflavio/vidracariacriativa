"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.content}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className={styles.badge}
                    >
                        📍 Atendendo Anápolis/GO e Região
                    </motion.div>

                    <h1 className={styles.title}>
                        <span className="gradient-text">Estilo e Qualidade</span> em vidros e esquadrias
                    </h1>

                    <p className={styles.subtitle}>
                        Formada por profissionais com décadas de experiência, a <strong>Vidraçaria Criativa</strong> une a segurança de uma instalação bem feita com a beleza de um acabamento moderno.
                        Oferecemos soluções completas em vidros temperados, esquadrias, boxes, sacadas e guarda-corpos,
                        garantindo alta qualidade e durabilidade para o seu projeto.
                    </p>

                    <div className={styles.tagCloud}>
                        <span className={styles.tag}>Vidros Temperados</span>
                        <span className={styles.tag}>Espelhos</span>
                        <span className={styles.tag}>Boxes</span>
                        <span className={styles.tag}>Sacadas</span>
                        <span className={styles.tag}>Esquadrias</span>
                        <span className={styles.tag}>Guarda-corpo</span>
                        <span className={styles.tag}>Inox</span>
                    </div>

                    <div className={styles.ctaGroup}>
                        <Link href="#contact" className="btn btn-primary">
                            Solicitar Orçamento Grátis
                        </Link>
                        <Link href="#services" className="btn btn-outline" style={{ backdropFilter: 'blur(10px)' }}>
                            Ver Serviços
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className={styles.visual}
                >
                    <div className={styles.glassComposition}>
                        <div className={`${styles.glassCard} ${styles.card1}`}></div>
                        <div className={`${styles.glassCard} ${styles.card2}`}></div>
                        <div className={`${styles.glassCard} ${styles.card3}`}></div>
                        <div className={styles.circle}></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
