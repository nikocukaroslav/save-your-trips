import styles from "./TripsList.module.css";
import Trip from "./Trip.jsx";
import { useTrips } from "../Contexts/TripsContext.jsx";

const cities = [
  {
    country: "ukraine",
    id: 132132,
  },
  {
    country: "berlin",
    id: 11313,
  },
  {
    country: "ber",
    id: 3123,
  },
];

function TripsList() {
  const { place, setPlace } = useTrips();

  return (
    <div className={styles.tripsList}>
      {cities.map((city) => (
        <Trip
          place={city.country}
          key={city.id}
          onClick={() => setPlace(city.country)}
        />
      ))}
    </div>
  );
}

export default TripsList;
