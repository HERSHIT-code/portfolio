import React, { type FC } from 'react'
import { Link } from 'react-router-dom'
import './Info.scss'
import Button from '../Button/Button'
import { dots, guy, hashTag, kavichki, logoLight } from '../../helpers/reExport'
import { getRepos } from '../../api/common'
import ProjectsItem from '../ProjectsItem/ProjectsItem'
import Skills from '../Skills/Skills'
import About from '../About/About'
import Contacts from '../Contacts/Contacts'
import Footer from '../Footer/Footer'
import { useTranslation } from 'react-i18next'

const Info:FC= () => {
    const { data } = getRepos()
    console.log(data);
    const { t } = useTranslation()
    
  return (
    <>
    <div className="container">
    <div className="info">
        <div className="info__left">
            <h2 className="info__left-title">{t("infoLeftTitleOne")}<p>{t("infoLeftTitleTwo")}</p> {t("infoLeftTitleThree")}<p>{t("infoLeftTitleFour")}</p></h2>
            <p className="info__left-text">{t("infoLeftText")}
            </p>
            <Button adress='/contacts'/>
        </div>
        <div className="info__right">
            <img src={guy} alt="" className="info__right-img" />
            <img src={logoLight} alt="" className="info__right-effect-logo" />
            <img src={dots} alt="" className="info__right-effect-dots" />
            <p className="info__right-text"> <div></div>{t('infoRightTextOne')} <p>{t('infoRightTextTwo')}</p> </p>
        </div>
        </div>
        <div className="phrases">
            <h2 className="phrases__first">
                {t("phrasesFirst")}
                <img src={kavichki} alt="" className="phrases__first-effect" />
            </h2>
            <h2 className="phrases__second">
                - {t("phrasesSecond")}
                <img src={kavichki} alt="" className="phrases__second-effect" />
            </h2>

        
    </div>
    <div className="projects">
        <div className="projects__top">
            <div className="projects__top-title">
                <img src={hashTag} alt="" className="projects__top-title-img" />
                <h2 className="projects__top-title-title">{t("headerProjects")}</h2>
                
            </div>
            <span className="projects__top-line"></span>
        </div>
        <div className="projects__block">
            {data && data.map((item:any, i:any) =>(
                console.log(item),
                
                <ProjectsItem key={item.id} item={item} />
            ))}
        </div>
    </div>
    </div>
    <Skills/>
    <About/>
    <Contacts/>
    <Footer/>
    </>
  )
}

export default Info