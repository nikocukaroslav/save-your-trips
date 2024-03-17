import styles from "./TripAlbum.module.css";
import TripGallery from "./TripGallery.jsx";
import { useTrips } from "../Contexts/TripsContext.jsx";

function TripAlbum() {
  const { place } = useTrips();
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        You in {place ? place : "no place selected"}
      </header>
      <TripGallery />
    </section>
  );
}

export default TripAlbum;
