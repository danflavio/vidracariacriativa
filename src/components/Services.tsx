"use client";

import { motion } from "framer-motion";
import styles from "./Services.module.css";
import { Maximize2, ShieldCheck, Box, Minimize2, Grid, Award } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Instalação de Vidros Temperados",
            description: "Montagem técnica e precisa de portas, janelas e divisórias. Focamos na segurança e no acabamento impecável da estrutura.",
            icon: <ShieldCheck size={32} color="var(--primary)" />
        },
        {
            title: "Montagem de Box e Divisórias",
            description: "Instalação especializada de boxes de banheiro e divisórias de vidro, garantindo vedação perfeita e durabilidade.",
            icon: <Box size={32} color="var(--secondary)" />
        },
        {
            title: "Instalação de Espelhos",
            description: "Fixação segura de espelhos de grandes formatos, lapidados ou bisotados, com alinhamento milimétrico.",
            icon: <Maximize2 size={32} color="var(--accent)" />
        },
        {
            title: "Manutenção Preventiva e Corretiva",
            description: "Manutenção de roldanas, ajustes de portas, troca de vedações e revisão geral de estruturas de vidro e alumínio.",
            icon: <Award size={32} color="var(--primary)" />
        },
        {
            title: "Expansão de Estruturas",
            description: "Ampliação de fechamentos de sacadas e renovação de esquadrias antigas para novos projetos e necessidades.",
            icon: <Minimize2 size={32} color="var(--text-muted)" />
        },
        {
            title: "Instalação de Guarda-corpo",
            description: "Montagem de sistemas de segurança em vidro, inox e alumínio para escadas e varandas.",
            icon: <Grid size={32} color="var(--secondary)" />
        }
    ];

    return (
        <section id="services" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.title}
                    >
                        Especialistas em <span className={styles.highlight}>Instalação e Manutenção</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={styles.subtitle}
                    >
                        Não focamos apenas no material, mas na excelência da execução. Realizamos instalações técnicas, manutenções e ampliações de estruturas de vidro e alumínio.
                    </motion.p>
                </div>
                {/* ... rest of the code for grid mapping ... */}

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={styles.card}
                        >
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
