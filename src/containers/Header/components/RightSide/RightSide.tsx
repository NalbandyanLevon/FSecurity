import ThemeToggleButton from "./ThemeToggleButton";
import Translations from "./LanguageSwitcher";
import styles from './RightSide.module.css'

const RightSide = () => {
  return (
    <div className={styles.container}>
      <Translations />
      <ThemeToggleButton />
    </div>
  );
};

export default RightSide;
