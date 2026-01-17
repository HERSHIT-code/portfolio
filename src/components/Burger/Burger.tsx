import { type FC } from 'react'
import { cross, hashTag, logoDefault } from '../../helpers/reExport'
import { NavLink } from 'react-router-dom'
import './Burger.scss'

interface BurgerProps{
    logoInfo: string
    isModalOpen: boolean
    setIsModalOpen: (isModalOpen: boolean) => void
}

const Burger:FC<BurgerProps> = ({ logoInfo, isModalOpen, setIsModalOpen }) => {
  return (
    <div className="burger">
         <div className="burger__top">
            <div className="burger__top-logo">
                <img className="burger__top-logo-img" src={logoInfo} alt="Logo" />
                    <h2 className="burger__top-logo-title">Alios</h2>
            </div>
            <img src={cross} alt="" onClick={() => isModalOpen ? setIsModalOpen(false) : ''} className="burger__top-close" />

         </div>
         <div className="burger__bottom">
            <NavLink to='/' className="burger__bottom-links">
                <img src={hashTag} alt="" />
                <p className="burger__bottom-link">home</p>
                </NavLink>
                <NavLink to='/projects' className="burger__bottom-links">
                <img src={hashTag} alt="" />
                <p className="burger__bottom-link">projects</p>
                </NavLink>
                <NavLink to='/about' className="burger__bottom-links">
                <img src={hashTag} alt="" />
                <p className="burger__bottom-link">aboutMe</p>
                </NavLink>
                <NavLink to='/contacts' className="burger__bottom-links">
                <img src={hashTag} alt="" />
                <p className="burger__bottom-link">contacts</p>

                </NavLink>
                <p className="burger__bottom-lang">EN</p>
         </div>
    </div>
  )
}

export default Burger