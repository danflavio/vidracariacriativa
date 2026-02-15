import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.cleanContent}>
                    <div className={styles.brand}>
                        <div className={styles.logoWrapper}>
                            <Image
                                src="/logo-final.png"
                                alt="Vidraçaria Criativa - Logomarca Rodapé"
                                width={32}
                                height={32}
                                className={styles.footerLogo}
                            />
                            <h3 className={styles.title}>Vidraçaria Criativa</h3>
                        </div>
                        <p className={styles.brandDesc}>
                            Soluções em vidros, espelhos, boxes, sacadas <br />
                            e esquadrias com o melhor acabamento.
                        </p>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Vidraçaria Criativa. Todos os direitos reservados.
                    </div>
                    <div className={styles.credits}>
                        Feito por <a href="https://wa.me/5562992352578" target="_blank" rel="noopener noreferrer" className={styles.creditLink}>DF Pages</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
