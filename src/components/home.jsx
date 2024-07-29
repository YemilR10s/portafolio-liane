import { useTranslation } from 'react-i18next'
import {motion} from "framer-motion"
import '../styles/home.css'


export const Home = () => {
    const {t} = useTranslation()
  return (
    <>
        <div className="homeContainer">
            <div className="textContainer">
                <motion.h2
                initial ={{opacity: 0, x:-100}}
                animate = {{opacity: 1, x:0}}
                transition={{duration: 2}}
                >{t("heroH2")}</motion.h2>


                <motion.p
                initial={{opacity: 0, x: -100}}
                animate={{opacity:1 , x:0}}
                transition={{duration:2}}
                >{t("heroP")}</motion.p>
            </div>

            <div className="imgContainer">
                <motion.div 
                    initial={{opacity:0 , x:100}}
                    animate={{opacity:1, x:0}}
                    transition={{duration: 2}}
                    className="img">
                </motion.div>
            </div>
        </div>
    </>
  )
}
