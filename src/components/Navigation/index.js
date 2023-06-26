import logo from '../../logo.svg'
import style from './Navigation.module.css'

function Navigation() {
    return (
        <nav className={style.navBar}>
            <img src={logo} alt="logo" className={style.logo} />
            <ul className={style.navList}>
                <li>Home</li>
                <li>Profile</li>
            </ul>
        </nav>
    )
}

export default Navigation
