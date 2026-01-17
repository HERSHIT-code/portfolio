import { useState, type FC } from "react"
import { Link, NavLink } from "react-router-dom"
import { burger, hashTag, logoDefault, logoLight, menu } from "../../helpers/reExport"
import "./Header.scss"
import Burger from "../Burger/Burger"
import { useTranslation } from "react-i18next"


const Header:FC = () => {
    const [logo, setLogo] = useState(false)
    const logoInfo = logo ? logoDefault   : logoLight
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [theme, setTheme] = useState("light")

    const { t, i18n } = useTranslation()
    const changeLang = () => {
    const newLang = i18n.language == 'ru' ? 'en' : 'ru'
    i18n.changeLanguage(newLang)
    console.log(i18n.language)
  }
  return (
    <>
    <header className="header">

    
    <div className="container">
        <nav className="header__nav">
            <div className="header__left">
                <Link to='/' className="header__left-logo">
                    <img className="header__left-logo-img" src={logoInfo} alt="Logo" />
                    <h2 className="header__left-logo-title">Alios</h2>
                </Link>
            </div>
            <div className="header__right">
                <NavLink to='/' className="header__right-links">
                <img src={hashTag} alt="" />
                <p className="header__right-link">{t("headerHome")}</p>
                </NavLink>
                <NavLink to='/projects' className="header__right-links">
                <img src={hashTag} alt="" />
                <p className="header__right-link">{t("headerProjects")}</p>
                </NavLink>
                <NavLink to='/about' className="header__right-links">
                <img src={hashTag} alt="" />
                <p className="header__right-link">{t("headerAbout")}</p>
                </NavLink>
                <NavLink to='/contacts' className="header__right-links">
                <img src={hashTag} alt="" />
                <p className="header__right-link">{t("headerContacts")}</p>
                </NavLink>
                <p className="header__right-lang" style={{ cursor: 'pointer' }} onClick={() => changeLang()} >{i18n.language == 'ru' ? 'RU' : 'EN'}</p>
                
            </div>
            
            <img src={logoInfo} onClick={() => {
                setLogo(!logo)
                theme === "light" ? setTheme("dark") : setTheme("light")
                if (theme === "light") {
                    document.documentElement.style.setProperty("--gray", "#282c33");
                    document.documentElement.style.setProperty("--background", "#abb2bf");
                    document.documentElement.style.setProperty("--primary", "#c778dd");
                    document.documentElement.style.setProperty("--white", "#000");
                    
                }else{
                    
                    document.documentElement.style.setProperty("--gray", "#abb2bf");
                    document.documentElement.style.setProperty("--background", "#282c33");
                    document.documentElement.style.setProperty("--primary", "#c778dd");
                    document.documentElement.style.setProperty("--white", "#fff");
                }
                
            }} alt="" className="header__right-theme" />
            <div className="header__burger">
                <img src={logo ? menu  : burger} alt="" onClick={() => isModalOpen ? '' : setIsModalOpen(true)} className="header__burger-open" />
                {isModalOpen && <Burger logoInfo={logoInfo} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}
            </div>
        </nav>

    </div>


    </header>
    </>
  )
}

export default Header