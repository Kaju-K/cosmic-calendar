import style from './ErrorPage.module.css'
import Navigation from '../../components/Navigation'

function ErrorPage() {
    return (
        <>
        <Navigation />
        <main className='main'>
            <h1 className={style.title}>Page not Found on the Universe History</h1>
        </main>
        </>
    )
}

export default ErrorPage
