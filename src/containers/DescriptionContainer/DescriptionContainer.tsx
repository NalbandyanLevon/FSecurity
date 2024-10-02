import Description from "./components/Description";
import Photos from "./components/Photos";
import Title from "./components/Title";
import styles from "./DescriptionContainer.module.css";

const DescriptionContainer = () => {
  return (
    <div className={styles.container}>
      <Title />
      <Description />
      <Photos />
    </div>
  );
};

export default DescriptionContainer;
