import React from 'react'
import { discord, email, hashTag } from '../../helpers/reExport'
import './Contacts.scss'
import { useTranslation } from 'react-i18next'

const Contacts = () => {
    const { t } = useTranslation()
  return (
    <div className="container">
        <div className="contacts">
            <h2 className="contacts__title"><img src={hashTag} alt="" /> {t("headerContacts")} <span className="contacts__line"></span></h2>
            <div className="contacts__block">
                <div className="contacts__left">
                    <p className="contacts__left-text">{t("contactsLeftText")}</p>
                </div>
                <div className="contacts__right">
                    <p className="contacts__right-title">{t("contactsRightTitle")}</p>
                    <a href='' className="contacts__right-text"><img src={discord} alt="" /> clurryy</a>
                    <a href='' className="contacts__right-text"><img src={email} alt="" /> scorpotpro@gmail.com</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacts