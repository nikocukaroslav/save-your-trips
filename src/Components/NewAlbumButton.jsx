import styles from "./NewAlbumButton.module.css";
import { Link } from "react-router-dom";

function NewAlbumButton() {
  return (
    <Link to="addNewAlbum" className={styles.newAlbum}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        className="plus"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
        />
      </svg>
    </Link>
  );
}

export default NewAlbumButton;
