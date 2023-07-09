import style from './Calendar.module.css'

// import MonthCard from '../MonthCard'
import MonthBubble from '../MonthBubble'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Calendar() {
    const [months, setMonths] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/api/months`)
        .then(res => {
            res.json()
            .then(res => {
                setMonths(res)
            })
            .catch(e => {console.log(e)})
        })
        .catch(e => {console.log(e)})
    }, [])

    return (
        <div className={style.calendarWrapper}>
            {
                months ? months.map((month) => {
                    return (
                        <Link to={`/${month.month}`} className={style.monthLink}>
                            <MonthBubble key={month.id} month={month} />
                        </Link>
                    )
                }) : null
            }
        </div>
    )
}

export default Calendar
