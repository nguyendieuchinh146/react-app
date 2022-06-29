import { useTranslation, Trans } from "react-i18next";
const LanguageSelector = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };
    return (
        <div>
            <li><button onClick={() => changeLanguage("en")}>en</button></li>
            <li><button onClick={() => changeLanguage("jp")}>jp</button></li>
        </div>
    )
}

export default LanguageSelector
