import style from './Calendar.module.css'

import MonthCard from '../MonthCard'
import MonthBubble from '../MonthBubble'

function Calendar() {

    const months = [
        {
            name: "January",
            time: 8,
        },
        {
            name: "February",
            time: 5,
        },
        {
            name: "March",
            time: 10,
        },
        {
            name: "April",
            time: 7,
        },
        {
            name: "May",
            time: 9,
        },
        {
            name: "June",
            time: 8,
        },
        {
            name: "July",
            time: 11,
        },
        {
            name: "August",
            time: 9,
        },
        {
            name: "September",
            time: 6,
        },
        {
            name: "October",
            time: 8,
        },
        {
            name: "November",
            time: 10,
        },
        {
            name: "December",
            time: 7,
        },
    ]

    return (
        <div className={style.calendarWrapper}>
            {
                months.map((month, id) => {
                    return (
                        <MonthBubble key={id} month={month} />
                    )
                })
            }
        </div>
    )
}

export default Calendar
