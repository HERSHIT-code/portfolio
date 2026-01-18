import { type FC } from 'react'
import { cross, hashTag} from '../../helpers/reExport'
import { NavLink } from 'react-router-dom'
import './Burger.scss'
import { useTranslation } from 'react-i18next'

interface BurgerProps{
    logoInfo: string
    isModalOpen: boolean
    setIsModalOpen: (isModalOpen: boolean) => void
    changeLang: () => void
}

const Burger:FC<BurgerProps> = ({ logoInfo, isModalOpen, setIsModalOpen, changeLang }) => {
  const {t, i18n} = useTranslation()
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
                <p className="burger__bottom-link">{t('headerHome')}</p>
                </NavLink>
                <NavLink to='/projects' className="burger__bottom-links">
                <img src={hashTag} alt="" />
                <p className="burger__bottom-link">{t('headerProjects')}</p>
                </NavLink>
                <NavLink to='/about' className="burger__bottom-links">
                <img src={hashTag} alt="" />
                <p className="burger__bottom-link">{t('headerAbout')}</p>
                </NavLink>
                <NavLink to='/contacts' className="burger__bottom-links">
                <img src={hashTag} alt="" />
                <p className="burger__bottom-link">{t('headerContacts')}</p>
                </NavLink>
                <p className="burger__bottom-lang" style={{ cursor: 'pointer' }} onClick={() => changeLang()}>{i18n.language == 'ru' ? 'RU' : 'EN'}</p>
         </div>
    </div>
  )
}

export default Burger