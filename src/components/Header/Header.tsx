import { useState, type FC } from "react"
import { Link, NavLink } from "react-router-dom"
import { hashTag, logoDefault, logoLight } from "../../helpers/reExport"
import "./Header.scss"

const Header:FC = () => {
    const [logo, setLogo] = useState(true)
    const logoInfo = logo ? logoDefault : logoLight
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
                <p className="header__right-link">home</p>
                </NavLink>
                <NavLink to='/projects' className="header__right-links">
                <img src={hashTag} alt="" />
                <p className="header__right-link">projects</p>
                </NavLink>
                <NavLink to='/about' className="header__right-links">
                <img src={hashTag} alt="" />
                <p className="header__right-link">about me</p>
                </NavLink>
                <NavLink to='/contacts' className="header__right-links">
                <img src={hashTag} alt="" />
                <p className="header__right-link">contacts</p>

                </NavLink>
                <p className="header__right-lang">EN</p>
                
            </div>
            <img src={logoInfo} onClick={() => setLogo(!logo)} alt="" className="header__right-theme" />
        </nav>

    </div>


    </header>
    </>
  )
}

export default Header