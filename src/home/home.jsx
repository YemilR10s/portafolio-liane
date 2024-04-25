import { useTranslation } from 'react-i18next'
import './home.css'


export const Home = () => {
    const {t} = useTranslation()
  return (
    <>
        <div className="homeContainer">
            <div className="textContainer">
                <h2>{t("heroH2")}</h2>
                <p>{t("heroP")}</p>
            </div>
            <div className="imgContainer">
                <div className="img"></div>
            </div>
        </div>
    </>
  )
}
