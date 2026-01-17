import React, { type FC } from 'react'
import './About.scss'
import { about, hashTag } from '../../helpers/reExport'
import { useTranslation } from 'react-i18next'

const About:FC = () => {
    const { t } = useTranslation()
  return (
    <div className="container">
        <div className="about">
            <h2 className="about__title"><img src={hashTag} alt="" /> {t("headerAbout")} <span className="about__line"></span></h2>
            <div className="about__block">
                <div className="about__left">
                    <p className="about__left-text">{t("aboutLeftTextOne")}</p>
                    <p className="about__left-text">{t("aboutLeftTextTwo")}</p>
                    <p className="about__left-text">
                    {t("aboutLeftTextThree")}</p>
                    
                </div>
                <div className="about__right">
                    <img src={about} alt="" className="about__right-img" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About