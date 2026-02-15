"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
    const phoneNumber = "5562993243379";
    const message = "Olá! Gostaria de solicitar um orçamento com a Vidraçaria Criativa.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1
            }}
            aria-label="Contato via WhatsApp"
        >
            <div className={styles.pulseContainer}>
                <div className={styles.pulse}></div>
                <div className={styles.pulse}></div>
            </div>

            <div className={styles.iconWrapper}>
                <MessageCircle size={32} />
                <span className={styles.tooltip}>Falar com especialista</span>
            </div>
        </motion.a>
    );
}
