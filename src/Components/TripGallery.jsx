import styles from "./TripGallery.module.css";
import { useTrips } from "../Contexts/TripsContext.jsx";

function TripGallery() {
  const { media } = useTrips();

  return (
    <div className={styles.gallery}>
      {media.map((src, index) => (
        <img src={src} key={index} className={styles.photo} />
      ))}
    </div>
  );
}

export default TripGallery;
