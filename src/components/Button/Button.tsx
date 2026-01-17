import  { type FC } from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'
import { t } from 'i18next';
interface IButton {
    adress: string;
    img?: string;

}

const Button:FC<IButton> = ({adress, img}) => {
  return (
    <>
    <Link to={adress} className="button">{t("more")}{img && <img src={img} alt="" />}  </Link>
    </>
  )
}

export default Button