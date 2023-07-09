import { Link } from 'react-router-dom'
import style from './HomePage.module.css'

function HomePage() {
    return (
        <div className={style.contentWrapper}>
            <h1 className={style.title}>Cosmic Calendar</h1>
            <p>The Cosmic Calendar is a method to visualize the chronology of the universe, scaling the 13.8 billion years (age of the universe) to a single year in order to help intuit it for pedagogical purposes in science education or popular science.</p>
            <p>In this visualization, the Big Bang took place at the beginning of January 1 at midnight, and the current moment maps onto the end of December 31 just before midnight.  At this scale, there are 437.5 years per cosmic second, 1.575 million years per cosmic hour, and 37.8 million years per cosmic day.</p>
            <p>The concept was popularized by Carl Sagan in his 1977 book The Dragons of Eden and on his 1980 television series Cosmos.</p>
            <div className={style.buttonWrapper}>
                <Link to={'/calendar'} className={style.calendarButton}>See Calendar</Link>
            </div>
        </div>
    )
}

export default HomePage
