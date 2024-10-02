import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome",
        company: {
          title: "Your Trusted Security Partner",
          description:
            "Welcome to FSecurity,  where your safety us our top priority. Our professional security guards are dedicated to providing you with peace of mind and protection against any potential threats.",
        },
        languages: {
          en: "Eng",
          ru: "Rus",
          am: "Arm",
        },
      },
    },
    am: {
      translation: {
        welcome: "Բարի գալուստ",
        company: {
          title: "Ձեր վստահելի անվտանգության գործընկերը",
          description:
            "Բարի գալուստ FSecurity, որտեղ ձեր անվտանգությունը մեր առաջնահերթությունն է: Մեր պրոֆեսիոնալ անվտանգության աշխատակիցները պարտավորվում են ապահովել ձեզ ցանկացած հնարավոր սպառնալիքներից:",
        },
        languages: {
          en: "Անգ",
          ru: "Ռուս",
          am: "Հայ",
        },
      },
    },
    ru: {
      translation: {
        welcome: "Добро пожаловать",
        company: {
          title: "Ваш надежный партнер по безопасности",
          description:
            "Добро пожаловать в FSecurity, где ваша безопасность - наш главный приоритет. Наши профессиональные охранники стремятся обеспечить вам душевное спокойствие и защиту от любых потенциальных угроз.",
        },
        languages: {
          en: "Анг",
          ru: "Рус",
          am: "Арм",
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
