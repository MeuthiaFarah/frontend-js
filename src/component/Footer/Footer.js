import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <h2 className={styles.footer__title}>Movie App</h2>
        <p classname={styles.footer__author}>Created by Meuthia Farah Hidayah</p>
      </footer>
    </div>
  )
}

export default Footer;