import styles from "./TripsList.module.css";
import Trip from "./Trip.jsx";
import { useTrips } from "../Contexts/TripsContext.jsx";

function TripsList() {
  const { cities } = useTrips();
  return (
    <div className={styles.tripsList}>
      {cities.map((city) => (
        <Trip place={city.country} key={city.id} />
      ))}
    </div>
  );
}

export default TripsList;
