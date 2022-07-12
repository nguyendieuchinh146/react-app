import { useTranslation, Trans } from "react-i18next";
import languageStyles from './language.module.css';
const LanguageSelector = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };
    return (
        <>
            <span className={languageStyles.fl_display}>
                <li className="nav-item"><a className="nav-link" onClick={() => changeLanguage("en")}>en</a></li>
                <li className="nav-item"><a className="nav-link" onClick={() => changeLanguage("jp")}>jp</a></li>
            </span>
        </>
    )
}

export default LanguageSelector
