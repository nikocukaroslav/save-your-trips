import styles from "./TripsPage.module.css";
import AppNav from "../Components/AppNav.jsx";
import TripsList from "../Components/TripsList.jsx";
import NewAlbumButton from "../Components/NewAlbumButton.jsx";
import TripAlbum from "../Components/TripAlbum.jsx";

function TripsPage() {
  return (
    <>
      <AppNav />
      <section className={styles.tripsPage}>
        <nav>
          <TripsList />
          <NewAlbumButton />
        </nav>
        <div className={styles.albumContainer}>
          <TripAlbum />
        </div>
      </section>
    </>
  );
}

export default TripsPage;
