import AppNav from "../Components/AppNav.jsx";
import Footer from "../Components/Footer.jsx";
import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <AppNav />
      <div className={styles.homepage}>
        <div className={styles.homepageContentContainer}>
          <h2 className={styles.slogan}>
            Your trip's album -<br /> save your most valuable memories
          </h2>
          <Link to="/login" className={styles.button}>
            Save memories now
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
