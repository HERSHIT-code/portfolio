import  { type FC } from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'
interface IButton {
    adress: string;
    img?: string;

}

const Button:FC<IButton> = ({adress, img}) => {
  return (
    <>
    <Link to={adress} className="button">Contact me! {img && <img src={img} alt="" />}  </Link>
    </>
  )
}

export default Button