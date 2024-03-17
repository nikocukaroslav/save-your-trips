import styles from "./TripAlbum.module.css";
import PhotoList from "./PhotoList.jsx";
import { useTrips } from "../Contexts/TripsContext.jsx";

function TripAlbum() {
  const { place } = useTrips();
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        {" "}
        You in {place ? place : "no place selected"}
      </header>
      <PhotoList />
    </section>
  );
}

export default TripAlbum;
