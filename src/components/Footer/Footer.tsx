import { type FC } from 'react'
import './Footer.scss'  
import { discord, email, hashTag, logoDefault } from '../../helpers/reExport'
import { NavLink } from 'react-router-dom'
import { t } from 'i18next'

const Footer:FC = () => {
  return (
    <footer className="footer">
       
        <div className="container">
            <div className="footer__top">
                <div className="footer__left">
                    <div className="footer__left-box">
                        <p className="footer__left-box-title"><img src={logoDefault} alt="" /> Alios </p>
                        <p className="footer__left-box-text">scorpotpro@gmail.com</p>
                    </div>
                    <p className="footer__left-text">{t("footerLeftText")}</p>
                </div>
                <div className="footer__right">
                    <p className="footer__right-text">Media</p>
                    <div className="footer__right-box">
                        <a href="" className="footer__right-box-link"><img src={discord} alt="" /></a>
                        <a href="" className="footer__right-box-link"><img src={email} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <p className="footer__bottom-text">© Copyright 2022. Made by Alias</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer