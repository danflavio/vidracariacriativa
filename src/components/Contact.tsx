"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { Phone, Mail, MapPin, MessageSquare, Clock } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.title}
                >
                    Solicite seu <span className={styles.subtitle}>Orçamento</span>
                </motion.h2>

                <div className={styles.grid}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={styles.infoCard}
                    >
                        <h3 className={styles.title} style={{ fontSize: '1.75rem', textAlign: 'left', marginBottom: '1.5rem' }}>Informações de Contato</h3>
                        <p className={styles.infoText} style={{ marginBottom: '2rem' }}>
                            Entre em contato conosco e transforme seu projeto em realidade.
                        </p>

                        <div className={styles.infoItem}>
                            <MapPin className={styles.infoIcon} size={28} />
                            <div>
                                <h4 className={styles.infoTitle}>Endereço</h4>
                                <p className={styles.infoText}>R. Maria de Fátima Santos Ribeiro, 21 - St. Sul 3A Etapa, Anápolis - GO, 75106-725</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <Phone className={styles.infoIcon} size={28} />
                            <div>
                                <h4 className={styles.infoTitle}>Telefone/WhatsApp</h4>
                                <a href="https://wa.me/5562993243379" target="_blank" rel="noopener noreferrer" className={styles.infoText} style={{ color: 'var(--primary)', fontWeight: '600' }}>
                                    (62) 99324-3379
                                </a>
                            </div>
                        </div>

                        {/* <div className={styles.infoItem}>
                            <Mail className={styles.infoIcon} size={28} />
                            <div>
                                <h4 className={styles.infoTitle}>E-mail</h4>
                                <a href="mailto:contato@vidracariacriativa.com.br" className={styles.infoText}>
                                    contato@vidracariacriativa.com.br
                                </a>
                            </div>
                        </div> */}

                        <div className={styles.infoItem}>
                            <Clock className={styles.infoIcon} size={28} />
                            <div>
                                <h4 className={styles.infoTitle}>Horário de Atendimento</h4>
                                <p className={styles.infoText}>Segunda a Sexta: 09h às 17h</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={styles.formCard}
                    >
                        <form>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>Nome Completo</label>
                                <input type="text" id="name" name="name" className={styles.input} placeholder="Seu nome" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="phone" className={styles.label}>WhatsApp / Telefone</label>
                                <input type="tel" id="phone" name="phone" className={styles.input} placeholder="(62) 99999-9999" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>E-mail (Opcional)</label>
                                <input type="email" id="email" name="email" className={styles.input} placeholder="seu@email.com" />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>Mensagem / Detalhes do Projeto</label>
                                <textarea id="message" name="message" className={styles.textarea} placeholder="Descreva o que você precisa..." required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-100" style={{ width: '100%' }}>Enviar Mensagem</button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
