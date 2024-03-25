import styles from './TravelArticle.module.sass'

export const TravelArticle: React.FC = () => {
    return (
        <nav>

            <div className={styles.container}>
                <h2 className={styles.container__subheader}>Travel</h2>
                <p> 
                    I had just graduated from highschool when I first traveled abroad, and I've been fortunate enough to visit some other incredible destinations. Each travel has left a lasting impression on me, filled with unforgettable experiences, breathtaking landscapes, and encounters with diverse cultures. Here I share some of the remarkable places I've had the privilege to explore.
                </p>
            </div>
            <div className={styles.container}>
                <h2>England</h2>
                <div className={styles.slider}>
                    <img 
                        className={styles.slider__img}
                        src="/images/Travel/england1.jpg" 
                        alt="Cinque Terre"
                        width='300'
                        height='500'
                        />
                    <img 
                        className={styles.slider__img}
                        src="/images/Travel/england2.jpg" 
                        alt="Cinque Terre"
                        width='300'
                        height='500'
                        />
                    <img 
                        className={styles.slider__img}
                        src="/images/Travel/england3.jpg" 
                        alt="Cinque Terre"
                        width='300'
                        height='500'
                    />
                    <img 
                        className={styles.slider__img}
                        src="/images/Travel/england4.jpg" 
                        alt="Cinque Terre"
                        width='300'
                        height='500'
                    />
                    <img 
                        className={styles.slider__img}
                        src="/images/Travel/england5.jpg" 
                        alt="Cinque Terre"
                        width='600'
                        height='500'
                        />
                </div> 
                {/* <p>In 2018 I traveled to England to learn english. I lived in a lovely city called Cambridge where I attended to Anglia Ruskin University for this English course. While I was there I visited so many cities and towns such as York, oxford, Salisbury and of course London where I would go every weekend I was able to.</p> */}
                
            </div>
            <div className={styles.container}>
                <h2>Netherlands</h2>
                <div className={styles.slider}>
                    <img className={styles.slider__img}
                        src="/images/Travel/NL4.jpg" 
                        alt="Cinque Terre"
                        width='300'
                        height='500'
                        />
                    <img className={styles.slider__img}
                        src="/images/Travel/NL1.jpg" 
                        alt="Cinque Terre"
                        width='900'
                        height='500'
                        />
                    <img className={styles.slider__img}
                        src="/images/Travel/NL3.jpg" 
                        alt="Cinque Terre"
                        width='300'
                        height='500'
                    />
                    <img className={styles.slider__img}
                        src="/images/Travel/NL2.jpg" 
                        alt="Cinque Terre"
                        width='900'
                        height='500'
                        />
                </div> 
                {/* <p>In 2018 I traveled to England to learn english. I lived in a lovely city called Cambridge where I attended to Anglia Ruskin University for this English course. While I was there I visited so many cities and towns such as York, oxford, Salisbury and of course London where I would go every weekend I was able to.</p> */}
                
            </div>
            <div className={styles.container}>
                <h2>France</h2>
                <div className={styles.slider}>
                    <img className={styles.slider__img}
                        src="/images/Travel/FNCE1.jpg" 
                        alt="Cinque Terre"
                        width='300'
                        height='500'
                        />
                    <img className={styles.slider__img}
                        src="/images/Travel/FNCE2.jpg" 
                        alt="Cinque Terre"
                        width='300'
                        height='500'
                        />
                </div>
            </div>
            <div className={styles.container}>
                <h2>United States</h2>
                <div className={styles.slider}>
                    <img className={styles.slider__img}
                        src="/images/Travel/US1.jpg" 
                        alt="Cinque Terre"
                        width='360'
                        height='500'
                        />
                    <img className={styles.slider__img}
                        src="/images/Travel/US2.jpg" 
                        alt="Cinque Terre"
                        width='300'
                        height='500'
                        />
                    <img className={styles.slider__img}
                        src="/images/Travel/US3.jpg" 
                        alt="Cinque Terre"
                        width='300'
                        height='500'
                        />
                    <img className={styles.slider__img}
                        src="/images/Travel/US4.jpg" 
                        alt="Cinque Terre"
                        width='300'
                        height='500'
                        />
                </div>
            </div>

        </nav>
        
    );
};