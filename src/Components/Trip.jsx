import styles from "./Trip.module.css";
import { useTrips } from "../Contexts/TripsContext.jsx";

function Trip({ place }) {
  function HandleClick() {
    setActivePlace(place);
  }

  const { setActivePlace, activePlace } = useTrips();
  return (
    <div
      className={`${styles.place} ${activePlace === place ? styles.active : ""}`}
      onClick={HandleClick}
    >
      {place}
    </div>
  );
}

export default Trip;
