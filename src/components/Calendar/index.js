import MonthCard from '../MonthCard'
import style from './Calendar.module.css'

function Calendar() {
    return (
        <div className={style.calendarWrapper}>
            <MonthCard />
        </div>
    )
}

export default Calendar
