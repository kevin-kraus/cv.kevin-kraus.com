import de from "./locales/de/translation.json";
import en from "./locales/en/translation.json";
import {initReactI18next} from "react-i18next";
import i18n from "i18next";
import i18next from "i18next";

i18n
    .use(initReactI18next)
    .init(
        {
            lng: 'de',
            debug: true,
            returnObjects: true,
            resources: {}
        },
        () => {
            i18next.addResources('de', 'translation', de.translation);
            i18next.addResources('en', 'translation', en.translation);
        }
    );
