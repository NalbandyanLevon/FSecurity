import { useTranslation } from "react-i18next";
import styles from './Description.module.css'

const Description = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.description}>
      {t("company.description")}
    </div>
  );
};

export default Description;
