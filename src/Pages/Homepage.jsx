import AppNav from "../Components/AppNav.jsx";
import Footer from "../Components/Footer.jsx";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <>
      <AppNav />
      <div className={styles.homepage}>
        <div className={styles.homepageContentContainer}>
          <h2 className={styles.slogan}>
            Your trip`s album -<br /> save your most valuable memories
          </h2>
          <button className={styles.button}> Save memories now</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
