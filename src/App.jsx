import './index.css'

import { Navbar } from './navbar/navbar'

import { initReactI18next } from 'react-i18next'
import i18n from "i18next"

import enNavbar from "./locales/navbarT/enNavbar.json"
import esNavbar from "./locales/navbarT/esNavbar.json"
import enHome from "./locales/homeT/enHome.json"
import esHome from "./locales/homeT/esHome.json"
import { Home } from './home/home'


  i18n
    .use(initReactI18next)
    .init({
      resources:{
        en:{
          translation:{
              ...enNavbar,
              ...enHome,
          }
        },
        es:{
          translation:{
              ...esNavbar,
              ...esHome,
          }
        }
      },
      lng: 'en',
      fallbackLng: 'en',
      interpolation:{
        escapeValue: false
      }
  
    
    })



function App() {
  

  return (
    <>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App
