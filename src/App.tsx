import { useTheme } from "./containers/ThemeContext/ThemeContext";
import Header from "./containers/Header";
import DescriptionContainer from "./containers/DescriptionContainer";
import styles from "./App.module.css";

const App = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div className={`${styles.container} ${isDarkTheme ? styles.dark : ""}`}>
      <Header />
      <DescriptionContainer />
    </div>
  );
};

export default App;
