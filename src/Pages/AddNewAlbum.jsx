import styles from "./AddNewAlbum.module.css";
import AppNav from "../Components/AppNav.jsx";

function AddNewAlbum() {
  return (
    <>
      <AppNav />
      <div className={styles.container}>
        <form className={styles.form}>
          <label>
            <span>Place where you have been</span>
            <input type="text" required="true" />
          </label>
          <label>
            <span>Your impressions</span>
            <textarea />
          </label>
          <label>
            <span>Download some photos</span>
            <span className={styles.uploadPhotoNew}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                fill="currentColor"
                className="bi bi-plus-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            </span>
            <input type="file" className={styles.uploadPhoto} />
          </label>
          <div className={styles.buttons}>
            <button className={`${styles.submit} ${styles.cancel}`}>
              Cancel
            </button>
            <button type="submit" className={styles.submit}>
              Add album
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddNewAlbum;
