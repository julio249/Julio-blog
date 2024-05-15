
import styles from './Hero.module.sass'
import Image from 'next/image'

export const Hero = () =>{

    return(
        <section className={styles.Hero}>
            <h1>
                
                <Image 
                    src="/images/landing1.png" 
                    alt="Project 1" 
                    width='200'
                    height='200'
                />
                Welcome!
                <Image 
                    src="/images/landing1.png" 
                    alt="Project 1" 
                    width='200'
                    height='200'
                />
            </h1>
            <h2> Hi, I'm Julio, thank you for visiting my website where I share about me. </h2>
        </section>
    )
}