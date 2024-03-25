import styles from './CollegeArticle.module.sass'
import Image from 'next/image'

export const CollegeArticle: React.FC = () => {
    return (
        <nav>

            <div className={styles.container}>
                <h2 className={styles.container__subheader}>College Article</h2>
                <p>As I sit down to reflect on my college journey, I'm filled with a whirlwind of emotions. It feels like just yesterday when I stepped onto campus as a wide-eyed freshman, unsure of what the next four years would hold. Now, as I prepare to graduate, I find myself reminiscing about the highs and lows, the challenges and triumphs, that have shaped my college experience.</p>
            </div>
            <div className={styles.container}>
                {/* <h2>England</h2> */}
                <div className={styles.slider}>
                    <Image 
                        className={styles.slider__Image}
                        src="/images/College/college7.jpg" 
                        alt="Cinque Terre"
                        width='600'
                        height='500'
                        />
                    <Image 
                        className={styles.slider__Image}
                        src="/images/College/college6.jpg" 
                        alt="Cinque Terre"
                        width='250'
                        height='500'
                        />
                    <Image 
                        className={styles.slider__Image}
                        src="/images/College/college1.jpg" 
                        alt="Cinque Terre"
                        width='250'
                        height='500'
                        />
                    <Image 
                        className={styles.slider__Image}
                        src="/images/College/college5.jpg" 
                        alt="Cinque Terre"
                        width='250'
                        height='500'
                        />
                    <Image 
                        className={styles.slider__Image}
                        src="/images/College/college2.jpg" 
                        alt="Cinque Terre"
                        width='250'
                        height='500'
                        />
                    <Image 
                        className={styles.slider__Image}
                        src="/images/College/college3.jpg" 
                        alt="Cinque Terre"
                        width='250'
                        height='500'
                        />
                    <Image 
                        className={styles.slider__Image}
                        src="/images/College/college4.jpg" 
                        alt="Cinque Terre"
                        width='250'
                        height='500'
                        />
                    <Image 
                        className={styles.slider__Image}
                        src="/images/College/college5.jpg" 
                        alt="Cinque Terre"
                        width='250'
                        height='500'
                        />
                    
                    
                    <Image 
                        className={styles.slider__Image}
                        src="/images/College/college8.jpg" 
                        alt="Cinque Terre"
                        width='250'
                        height='500'
                        />
                    
                </div>
            </div>
        </nav>
    );
};