import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => changeLanguage("en")}>
        {t("languages.en")}
      </button>
      <button className={styles.button} onClick={() => changeLanguage("ru")}>
        {t("languages.ru")}
      </button>
      <button className={styles.button} onClick={() => changeLanguage("am")}>
        {t("languages.am")}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
