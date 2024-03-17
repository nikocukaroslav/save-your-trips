import styles from "./PhotoList.module.css";
import Photo from "./Photo.jsx";

const photos = [1, 1, 1, 1, 1, 1, 1];

function PhotoList() {
  return (
    <div className={styles.gallery}>
      {photos.map(() => (
        <Photo />
      ))}
    </div>
  );
}

export default PhotoList;
