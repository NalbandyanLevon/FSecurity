import { useTheme } from "../../../../ThemeContext/ThemeContext";
import LightIcon from "../../../../../Icons/LightIcon";
import DarkIcon from "../../../../../Icons/DarkIcon";
import styles from "./ThemeToggleButton.module.css";

const ThemeToggleButton = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <button className={styles.button} onClick={toggleTheme}>
      {isDarkTheme ? <LightIcon /> : <DarkIcon />}
    </button>
  );
};

export default ThemeToggleButton;
