import style from './MonthCard.module.css'

function MonthCard({month}) {
    return (
        <div className={style.monthCardBorder}>
            <div className={`${style.monthCard} ${style.polygon}`} >
                <div className={style.monthImage}></div>
                <div className={style.monthLines}></div>
                <div className={style.monthContent}>
                    <h1 className={style.monthName}>{month.name}</h1>
                </div>
            </div>
        </div>
    )
}

export default MonthCard
