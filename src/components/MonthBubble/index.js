import style from './MonthBubble.module.css'
import background from './BigBang.png'

function MonthBubble({month}) {
    return (
        <>
            <style children={`
                @keyframes bubbleMovement {
                    0%, 100% {
                        translate: 0 -10px;
                    }
                    50% {
                        translate: 0 10px;
                    }
                }

                @keyframes textMovement {
                    0%, 100% {
                        translate: 0 3px;
                        rotate: -1deg;
                    }
                    50% {
                        translate: 0 -3px;
                        rotate: 1deg;
                    }
                }
            `} />
            <div
                className={style.bubble}
                style={{
                    animation: `bubbleMovement ${month.time}s ease-in-out infinite`
                }}
            >
                <img src={background} className={style.bubbleBackground} alt='background'/>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h1
                    className={style.monthName}
                    style={{
                        animation: `textMovement ${month.time}s ease-in-out infinite`
                    }}
                >
                    {month.name}
                </h1>
            </div>
        </>
    )
}

export default MonthBubble
