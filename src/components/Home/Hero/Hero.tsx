
import styles from './Hero.module.sass'

export const Hero = () =>{

    return(
        <section className={styles.Hero}>
            <h1>
                
                <img 
                    src="/images/landing1.png" 
                    alt="Project 1" 
                    width='200'
                    height='200'
                    align='center'
                />
                Welcome!
                <img 
                    src="/images/landing1.png" 
                    alt="Project 1" 
                    width='200'
                    height='200'
                    align='center'
                />
            </h1>
            <h2> Hi, thank you for visiting my personal website where I share about me. </h2>
        </section>
    )
}