import style from './EventBubble.module.css'
// import background from './BigBang.png'

function EventBubble({event}) {
    return (
        <>
            <div
                className={style.bubble}
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className={style.eventContent}>
                    <p className={style.eventDate}>{event.fk_day}{event.time ? ` - ${event.time}` : null}</p>
                    <p className={style.event}>
                        {event.event}
                    </p>
                </div>
            </div>
        </>
    )
}

export default EventBubble
