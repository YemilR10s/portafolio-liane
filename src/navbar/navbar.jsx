import { useTranslation } from "react-i18next"
import {motion} from "framer-motion"
import "./navbar.css"
import { useState } from "react"

export const Navbar = () => {
    const [bars, setBars] = useState(true)

    const {i18n , t} = useTranslation()
    const changeLanguage = (language)=>{
        i18n.changeLanguage(language)
    }

  return (
    <>
    
    <div className="navContainer">
        <motion.span 
            initial={{opacity:0, y:-100}}
            animate={{opacity:1, y:0}}
            transition={{duration:2}}
            className="logo">
            Tu logo
        </motion.span>

        <motion.ul 
        className={bars ? "ul": "ul active"}
        initial={{opacity:0, y:-100}}
        animate={{opacity:1, y:0}}
        transition={{duration:2}}
        >
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

        </motion.ul>
        <motion.div 
                initial={{opacity:0, y:-100}}
                animate={{opacity:1, y:0}}
                transition={{duration:2}}
                className="idiomas">

                <button
                    onClick={()=>changeLanguage('en')}>
                    en
                </button>

                <button
                    onClick={()=>changeLanguage('es')}>
                    es
                </button>
        </motion.div>

        <motion.i 
            initial={{opacity:0, y:-100}}
            animate={{opacity:1, y:0}}
            transition={{duration:2}}
            onClick={()=>{setBars(!bars)}}
            className={
                bars 
                ? 
                "fa-solid fa-bars" 
                :
                 "fa-solid fa-xmark"}
        ></motion.i>
    </div>
    
    </>
  )
}
