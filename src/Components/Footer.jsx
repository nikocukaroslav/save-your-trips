import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      &copy; 2024 - Your trip`s album - <a href="#">Privacy</a>
    </div>
  );
}

export default Footer;
