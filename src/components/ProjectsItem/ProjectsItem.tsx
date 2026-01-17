import { type FC } from 'react'

import './ProjectsItem.scss'
import { useTranslation } from 'react-i18next'

interface IItem{
    item: any
}

const ProjectsItem:FC<IItem> = ({ item }) => {
    const { t } = useTranslation()
    

  return (
    <div className="projects__item" onClick={() => window.open(item.homepage ? item.homepage : item.html_url)}>
      <div className="projects__item-img-box">
        <h2 className="projects__item-img">{t("api")}</h2>
      </div>
        
        <p className="projects__item-langs">REACT, JS, TS, HTML, SCSS</p> 
        <div className="projects__item-text-box">
          <h2 className="projects__item-title">{item.name}</h2>
          <p className="projects__item-description">{item.description ? item.description : t("noDiscription")}</p>
          <a href={item.html_url} className="projects__item-btn">{t("visit")} <span>{'<~>'}</span></a>
        </div>
        
    </div>
  )
}

export default ProjectsItem