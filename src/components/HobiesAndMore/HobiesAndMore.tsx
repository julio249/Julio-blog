import Link from 'next/link'
import styles from './HobiesAndMore.module.sass'
import { ScrollToTop } from '../shared/ScrollToTop'

export const HobiesAndMore = () => {
    return(
        <div id='HobiesAndMoreTop'>
            <h1 className={styles.container__subheader}>Hobies And More</h1>
            <nav className={styles.container}>
                <Link href='/HobiesAndMore/Travel' className={styles.container__item}>
                    
                        <h2>Travel</h2>
                        <p className={styles.container__paragraph}>A glimpse of where I have been</p>
                    
                </Link>
                <Link href='/HobiesAndMore/College' className={styles.container__item}>
                    
                        <h2>College</h2>
                        <p className={styles.container__paragraph}>Life at the University of Arkansas</p>
                    
                </Link>
                <Link href='/HobiesAndMore/Gallery' className={styles.container__item}>
                    
                        <h2>Gallery</h2>
                        <p className={styles.container__paragraph}>A little of everything</p>
                    
                </Link>
            </nav>
            <ScrollToTop id={'HobiesAndMoreTop'}/>
        </div>
    )
}