"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./Carousel.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    {
        src: "/images/projects/box-banheiro.jpg",
        alt: "Instalação de Box de Banheiro em Vidro Temperado 8mm Anápolis",
        title: "Box de Banheiro",
        desc: "Vidro temperado 8mm certificado com kits em inox ou alumínio. Segurança e acabamento premium para seu banheiro."
    },
    {
        src: "/images/projects/espelho.jpg",
        alt: "Espelhos Decorativos Lapidados e Bisotados em Anápolis GO",
        title: "Espelhos Decorativos",
        desc: "Instalação de espelhos sob medida para salas, quartos e banheiros. Opções lapidado, bisotado e com moldura."
    },
    {
        src: "/images/projects/sacada-predio.jpg",
        alt: "Fechamento de Sacada em Vidro para Prédios e Apartamentos Anápolis",
        title: "Sacadas e Varandas",
        desc: "Sistema de fechamento de sacada retrátil ou fixo. Conforto térmico, acústico e segurança para sua varanda."
    },
    {
        src: "/images/projects/pele-vidro.jpg",
        alt: "Fachada Pele de Vidro e Glazing para Edifícios Comerciais",
        title: "Fachada Pele de Vidro",
        desc: "Execução técnica de fachada pele de vidro e glazing. Modernidade e controle solar para fachadas comerciais."
    },
    {
        src: "/images/projects/guarda-corpo-flat.jpg",
        alt: "Guarda-Corpo em Vidro e Alumínio para Escadas e Sacadas",
        title: "Guarda-Corpo",
        desc: "Instalação de guarda-corpo de vidro com torre ou perfis de alumínio. Segurança garantida conforme normas técnicas."
    }
];

export default function Carousel() {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => setCurrent((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)),
            5000
        );

        return () => {
            resetTimeout();
        };
    }, [current]);

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    return (
        <section id="portfolio" className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.title}
                >
                    Serviços <span className={styles.highlight}>Oferecidos</span>
                </motion.h2>

                <div className={styles.carouselContainer}>
                    <div className={styles.carouselTrack} style={{ transform: `translateX(-${current * 100}%)` }}>
                        {images.map((img, index) => (
                            <div className={styles.slide} key={index}>
                                <div className={styles.imageWrapper}>
                                    <div className={styles.slideBadge}>{img.title}</div>
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 1000px"
                                        className={styles.image}
                                        priority={index === 0}
                                    />
                                    <div className={styles.overlay}>
                                        <h3 className={styles.slideTitle}>{img.title}</h3>
                                        <p className={styles.slideDesc}>{img.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className={`${styles.navBtn} ${styles.prev}`} onClick={prevSlide} aria-label="Anterior">
                        <ChevronLeft size={32} />
                    </button>
                    <button className={`${styles.navBtn} ${styles.next}`} onClick={nextSlide} aria-label="Próximo">
                        <ChevronRight size={32} />
                    </button>

                    <div className={styles.dots}>
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                className={`${styles.dot} ${idx === current ? styles.activeDot : ''}`}
                                onClick={() => setCurrent(idx)}
                                aria-label={`Slide ${idx + 1}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
