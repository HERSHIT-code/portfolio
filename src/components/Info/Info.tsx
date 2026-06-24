import { type FC } from 'react'
import { motion } from 'framer-motion'

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

const Info: FC = () => {
    const { data } = getRepos()
    const { t } = useTranslation()

    return (
        <>
            <div className="container">

                {/* INFO секция — левая часть слева, правая справа */}
                <div className="info">

                    {/* Левая часть — въезжает слева */}
                    <motion.div
                        className="info__left"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h2 className="info__left-title">
                            {t("infoLeftTitleOne")}
                            <p>{t("infoLeftTitleTwo")}</p>
                            {t("infoLeftTitleThree")}
                            <p>{t("infoLeftTitleFour")}</p>
                        </h2>
                        <p className="info__left-text">{t("infoLeftText")}</p>
                        <Button adress='/contacts' />
                    </motion.div>

                    {/* Правая часть — въезжает справа */}
                    <motion.div
                        className="info__right"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <motion.img
                            src={guy}
                            alt=""
                            className="info__right-img"
                            initial={{ opacity: 0, scale: 0.85 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                        />
                        <motion.img
                            src={logoLight}
                            alt=""
                            className="info__right-effect-logo"
                            initial={{ opacity: 0, rotate: -30 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                        />
                        <motion.img
                            src={dots}
                            alt=""
                            className="info__right-effect-dots"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                        />
                        <motion.p
                            className="info__right-text"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                        >
                            <div></div>
                            {t('infoRightTextOne')}
                            <p>{t('infoRightTextTwo')}</p>
                        </motion.p>
                    </motion.div>
                </div>

                {/* PHRASES секция — первая слева, вторая справа */}
                <div className="phrases">
                    <motion.h2
                        className="phrases__first"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {t("phrasesFirst")}
                        <img src={kavichki} alt="" className="phrases__first-effect" />
                    </motion.h2>

                    <motion.h2
                        className="phrases__second"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                        - {t("phrasesSecond")}
                        <img src={kavichki} alt="" className="phrases__second-effect" />
                    </motion.h2>
                </div>

                {/* PROJECTS секция — заголовок сверху, карточки снизу */}
                {/* PROJECTS секция — заголовок сверху, карточки снизу */}
<div className="projects">
    <motion.div
        className="projects__top"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, ease: "easeOut" }}
    >
        <div className="projects__top-title">
            <img src={hashTag} alt="" className="projects__top-title-img" />
            <h2 className="projects__top-title-title">{t("headerProjects")}</h2>
        </div>
        <span className="projects__top-line"></span>
    </motion.div>

    {/* Карточки — чётные снизу, нечётные сверху */}
    <div className="projects__block">
    {data && data.slice(0, 3).map((item: any, i: number) => (
    <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
    >
        <ProjectsItem item={item} />
    </motion.div>
))}

</div>
<motion.div
    className="projects__link"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5, ease: "easeOut" }}
>
    <a href="/projects" className="projects__link-text">View all {"==>"}</a>
</motion.div>
</div>

            </div>

            {/* Остальные секции — появляются снизу */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <Skills />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <About />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <Contacts />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <Footer />
            </motion.div>
        </>
    )
}

export default Info