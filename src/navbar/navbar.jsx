import { useTranslation } from "react-i18next"
import "./navbar.css"

export const Navbar = () => {

    const {i18n , t} = useTranslation()
    const changeLanguage = (language)=>{
        i18n.changeLanguage(language)
    }

  return (
    <>
    
    <div className="navContainer">
        <span className="logo">Tu logo</span>
        <ul>
            <li>
                <a href="/">{t("Home")}</a>
            </li>
            <li>
                <a href="/">{t("skills")}</a>
            </li>
            <li>
                <a href="/">{t("Experience")}</a>
            </li>
            <li>
                <a href="/">{t("Contact")}</a>
            </li>
            <div className="idiomas">

                <button
                    onClick={()=>changeLanguage('en')}>
                    en
                </button>

                <button
                    onClick={()=>changeLanguage('es')}>
                    es
                </button>
            </div>
        </ul>
    </div>
    
    </>
  )
}
