import styles from "./Trip.module.css";
import { useTrips } from "../Contexts/TripsContext.jsx";

function Trip({ place }) {
  const { setPlace, setMedia, cities, setActivePlace, activePlace } =
    useTrips();

  function HandleClick() {
    setActivePlace(place);
  }

  return (
    <div
      className={`${styles.place} ${activePlace === place ? styles.active : ""}`}
      onClick={() => {
        HandleClick(), setPlace(place), setMedia(place.photos);
      }}
    >
      {place}
    </div>
  );
}

export default Trip;
