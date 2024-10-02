import FIcon from "../../Icons/FIcon";
import RightSide from "./components/RightSide";
import Title from "./components/Title";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <FIcon />
      <Title />
      <RightSide />
    </div>
  );
};

export default Header;
