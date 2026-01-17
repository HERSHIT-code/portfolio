import { type FC } from 'react'
import { hashTag } from '../../helpers/reExport'
import './Skills.scss'
import { useTranslation } from 'react-i18next'

const Skills:FC = () => {
    const { t } = useTranslation()
  return (
    <div className="container">
        <div className="skills">
            <h2 className="skills__title"><img src={hashTag} alt="" /> {t("skills")} <span className="skills__line"></span></h2>
            
            <div className="skills__block">
                <h2 className="skills__soon">{t("api")}</h2>
            </div>
        </div>
    </div>
  )
}

export default Skills