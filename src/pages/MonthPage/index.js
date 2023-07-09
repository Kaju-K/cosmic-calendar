import { useEffect, useState } from "react"
import { Link, useLoaderData, useParams } from "react-router-dom"
import EventBubble from "../../components/EventBubble"

import style from './MonthPage.module.css'

function MonthPage() {
    const params = useParams()
    const month = params.month

    const [events, setEvents] = useState([])

    const dataLoaded = useLoaderData()

    useEffect(() => {
        const compareEvents = (a, b) => {
            if (a.fk_day !== b.fk_day) {
                return a.fk_day - b.fk_day; // Sort by fk_day
            } else {
                // If fk_day is the same, sort by time
                const timeA = new Date(`2000-01-01T${a.time}`);
                const timeB = new Date(`2000-01-01T${b.time}`);
                return timeA - timeB;
            }
        }
        
        setEvents(dataLoaded.data.sort(compareEvents))
        
    }, [dataLoaded])

    return (
        <div className={style.eventWrapper}>
            <p className={style.monthName}>{month}</p>

            {
                events.length ? 
                events.map(event => {
                    return <EventBubble key={event.id} event={event} movement={false} width={'50%'} />
                })
                : (
                    <div style={{alignSelf: "center", color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.8)', borderRadius: '1rem', padding: '2rem', }}>
                        <p>Not a very interesting month, still searching for events to add here</p>
                        <div className={style.buttonWrapper}>
                            <Link to={'/calendar'} className={style.calendarButton}>Back to Calendar</Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default MonthPage
