import { useTranslation } from "react-i18next";
import styles from "./Title.module.css";

const Title = () => {
  const { t } = useTranslation();
  return <div className={styles.title}>{t("company.title")}</div>;
};

export default Title;
