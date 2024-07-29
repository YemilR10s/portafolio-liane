import './index.css'

import { Navbar } from './components/navbar'
import { Home } from './components/home'
import { initReactI18next } from 'react-i18next'
import i18n from "i18next"

import enNavbar from "./locales/navbarT/enNavbar.json"
import esNavbar from "./locales/navbarT/esNavbar.json"
import enHome from "./locales/homeT/enHome.json"
import esHome from "./locales/homeT/esHome.json"  
import enDatos from "./locales/experience/datosEn.json"
import esDato from "./locales/experience/datosEs.json"
import esSkills from "./locales/skillsDatos/SkillsDatosEs.json"
import enSkills from "./locales/skillsDatos/SkillsDatosEn.json"

import { Experience } from './components/experience'
import { Skills } from './components/skills'



i18n
.use(initReactI18next)
.init({
  resources:{
    en:{
      translation:{
        ...enNavbar,
        ...enHome,
        ...enDatos,
        ...enSkills
      }
    },
    es:{
      translation:{
        ...esNavbar,
        ...esHome,
        ...esDato,
        ...esSkills
      }
    }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation:{
    escapeValue: false
  },
  returnObjects: true 
})



function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Skills/>
      <Experience/>
      
      
    </>
  )
}

export default App
