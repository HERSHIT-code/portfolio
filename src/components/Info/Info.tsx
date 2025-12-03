import React, { type FC } from 'react'
import { Link } from 'react-router-dom'
import './Info.scss'
import Button from '../Button/Button'
import { dots, guy, kavichki, logoLight } from '../../helpers/reExport'

const Info:FC= () => {
  return (
    <>
    <div className="container">
    <div className="info">
        <div className="info__left">
            <h2 className="info__left-title">Elias is a <p>web designer</p>  and <p>front-end developer</p></h2>
            <p className="info__left-text">He crafts responsive websites where technologies meet creativity
            </p>
            <Button adress='/contacts'/>
        </div>
        <div className="info__right">
            <img src={guy} alt="" className="info__right-img" />
            <img src={logoLight} alt="" className="info__right-effect-logo" />
            <img src={dots} alt="" className="info__right-effect-dots" />
            <p className="info__right-text"> <div></div> Currently working on <p>Portfolio</p> </p>
        </div>
        </div>
        <div className="phrases">
            <h2 className="phrases__first">
                With great power comes great electricity bill
                <img src={kavichki} alt="" className="phrases__first-effect" />
            </h2>
            <h2 className="phrases__second">
                - Dr. Who
                <img src={kavichki} alt="" className="phrases__second-effect" />
            </h2>

        
    </div>
    </div>
    </>
  )
}

export default Info