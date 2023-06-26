import style from './HomePage.module.css'
import Calendar from "../../components/Calendar"

function HomePage() {
    return (
        <main className={style.main}>
            <Calendar />
        </main>
    )
}

export default HomePage
