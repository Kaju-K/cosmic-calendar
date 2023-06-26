import style from './MonthCard.module.css'

function MonthCard() {
    return (
        <div className={style.monthCard} >
            <div className={style.monthImage}></div>
            <div className={style.monthLines}></div>
            <div className={style.monthContent}>
                <h1 className={style.monthName}>January</h1>
            </div>
        </div>
    )
}

export default MonthCard
