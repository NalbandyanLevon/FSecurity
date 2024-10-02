import gunImage from "../../../../photos/GunImage.png";
import receptionImage from "../../../../photos/receptionImage.png";
import styles from "./Photos.module.css";

const Photos = () => {
  return (
    <div className={styles.photoContainer}>
      <img src={gunImage} alt="gun" width="40%" />
      <img src={receptionImage} alt="rec" width="40%" />
    </div>
  );
};

export default Photos;
