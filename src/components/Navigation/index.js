import { NavLink } from 'react-router-dom'
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
            <NavLink
                to='/'
                className={({ isActive, isPending }) =>
                    isActive ? `${style.navLink} ${style.navLinkActive}` : style.navLink
                }
            >
                Home
            </NavLink>
            <NavLink
                to='/calendar'
                className={({ isActive, isPending }) =>
                    isActive ? `${style.navLink} ${style.navLinkActive}` : style.navLink
                }
            >
                Calendar
            </NavLink>
        </nav>
    )
}

export default Navigation
