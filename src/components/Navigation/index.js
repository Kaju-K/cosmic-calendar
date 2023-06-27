import logo from '../../logo.svg'
import style from './Navigation.module.css'

import { useEffect, useState } from 'react'

function Navigation() {
    const [cssNav, setCssNav] = useState({})

    useEffect(() => {
        function scrollingPage() {
            let backgroundCssNav = {...cssNav}
            if (!window.scrollY) {
                backgroundCssNav.background = "transparent"
            } else {
                backgroundCssNav.background = "#0D0D0D80"
            }
            setCssNav(backgroundCssNav)
        }
        window.addEventListener("scroll", scrollingPage)
        return () => {window.removeEventListener("scroll", scrollingPage)}
    })

    return (
        <nav className={style.navBar} style={ cssNav }>
            <img src={logo} alt="logo" className={style.logo} />
            <ul className={style.navList}>
                <li>Home</li>
                <li>Calendar</li>
            </ul>
        </nav>
    )
}

export default Navigation
