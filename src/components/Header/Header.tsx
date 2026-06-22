import { useState, type FC } from "react"
import { Link, NavLink } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { burger, hashTag, logoDefault, logoLight, menu } from "../../helpers/reExport"
import "./Header.scss"
import Burger from "../Burger/Burger"
import { useTranslation } from "react-i18next"

const Header: FC = () => {
    const [logo, setLogo] = useState(false)
    const logoInfo = logo ? logoDefault : logoLight
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [theme, setTheme] = useState("light")

    const { t, i18n } = useTranslation()
    const changeLang = () => {
        const newLang = i18n.language == 'ru' ? 'en' : 'ru'
        i18n.changeLanguage(newLang)
    }

    const toggleTheme = () => {
        setLogo(!logo)
        theme === "light" ? setTheme("dark") : setTheme("light")
        if (theme === "light") {
            document.documentElement.style.setProperty("--gray", "#282c33")
            document.documentElement.style.setProperty("--background", "#abb2bf")
            document.documentElement.style.setProperty("--primary", "#c778dd")
            document.documentElement.style.setProperty("--white", "#000")
        } else {
            document.documentElement.style.setProperty("--gray", "#abb2bf")
            document.documentElement.style.setProperty("--background", "#282c33")
            document.documentElement.style.setProperty("--primary", "#c778dd")
            document.documentElement.style.setProperty("--white", "#fff")
        }
    }

    const navLinks = [
        { to: '/', label: t("headerHome") },
        { to: '/projects', label: t("headerProjects") },
        { to: '/about', label: t("headerAbout") },
        { to: '/contacts', label: t("headerContacts") },
    ]

    return (
        <>
            {/* Хедер появляется сверху — 1 секунда */}
            <motion.header
                className="header"
                initial={{ y: -80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="container">
                    <nav className="header__nav">

                        {/* Логотип въезжает слева — 1 секунда */}
                        <motion.div
                            className="header__left"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                        >
                            <Link to='/' className="header__left-logo">
                                <motion.img
                                    className="header__left-logo-img"
                                    src={logoInfo}
                                    alt="Logo"
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                />
                                <h2 className="header__left-logo-title">Alios</h2>
                            </Link>
                        </motion.div>

                        {/* Навигационные ссылки — stagger по 1 секунде */}
                        <div className="header__right">
                            {navLinks.map(({ to, label }, i) => (
                                <motion.div
                                    key={to}
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: 0.15 * i, duration: 1, ease: "easeOut" }}
                                >
                                    <NavLink to={to} className="header__right-links">
                                        <motion.img
                                            src={hashTag}
                                            alt=""
                                            whileHover={{ rotate: 15, scale: 1.2 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        />
                                        <p className="header__right-link">{label}</p>
                                    </NavLink>
                                </motion.div>
                            ))}

                            {/* Кнопка языка */}
                            <motion.p
                                className="header__right-lang"
                                style={{ cursor: 'pointer' }}
                                onClick={changeLang}
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                                whileHover={{ scale: 1.15, color: "#c778dd" }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {i18n.language == 'ru' ? 'RU' : 'EN'}
                            </motion.p>
                        </div>

                        {/* Кнопка темы */}
                        <motion.img
                            src={logoInfo}
                            onClick={toggleTheme}
                            alt=""
                            className="header__right-theme"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ rotate: 180, scale: 0.9 }}
                        />

                        {/* Бургер */}
                        <motion.div
                            className="header__burger"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                        >
                            <motion.img
                                src={logo ? menu : burger}
                                alt=""
                                onClick={() => isModalOpen ? '' : setIsModalOpen(true)}
                                className="header__burger-open"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.85 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            />

                            {/* Бургер-меню плавно выезжает справа */}
                            <AnimatePresence>
                                {isModalOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, x: "100%" }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: "100%" }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30, duration: 1 }}
                                    >
                                        <Burger
                                            logoInfo={logoInfo}
                                            isModalOpen={isModalOpen}
                                            setIsModalOpen={setIsModalOpen}
                                            changeLang={changeLang}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                    </nav>
                </div>
            </motion.header>
        </>
    )
}

export default Header