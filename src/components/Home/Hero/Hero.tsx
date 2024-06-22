
import styles from './Hero.module.sass'
import Image from 'next/image'

export const Hero = () =>{

    return(
        <section className={styles.Hero}>
            <div className={styles.Hero__container}>
            
                
    
                <div className={styles.Hero__intro}> 
                    <h1 className={styles.Hero__welcome}>Welcome!</h1> 
                    <p className={styles.Hero__paragraph}>Hi, my name is Julio, I'm a developer.<br></br> Explore my work and let's connect!</p>
                </div>
                <div className={styles.Hero__image}>
                    <Image 
                        src="/images/profileblackandwhite.JPG" 
                        alt="profilePic" 
                        width='380'
                        height='600'
                    />

                </div>
            

            </div>
        </section>
    )
}