import Link from 'next/link'
import styles from './Expecience.module.sass'
import Image from 'next/image'


export const Expecience =() => {
    return(
        <div id="experienceSection">
            <h1 className={styles.experienceSection__subheader}> Expecience </h1>

            <nav className={styles.experienceSection}>
                <Link 
                    href={'https://vendoorapp.com/'} 
                    className={styles.experienceSection__item}
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <Image 
                        src="/images/intern.png" 
                        alt="" 
                        width='300'
                        height='250'
                    />
                    <p>Intern</p>
                </Link>
                <div className={styles.experienceSection__item}>
                    <Image 
                        src="/images/callCenter.png" 
                        alt="" 
                        width='300'
                        height='250'
                    />
                    <p>Customer Service Representative</p>
                    
                </div>
                <Link 
                    href={'https://uark-cviu.github.io/people.html'} 
                    className={styles.experienceSection__item}
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                
                    <Image 
                        src="/images/researchAssistant.png" 
                        alt="" 
                        width='300'
                        height='250'
                    />
                    <p>Research Assistant</p>
                </Link>
                <div className={styles.experienceSection__item}>
                
                    <Image 
                        src="/images/studentAmbassor.png" 
                        alt="" 
                        width='300'
                        height='250'
                    />
                    <p>Student Ambassor</p>
                </div>
                <div className={styles.experienceSection__item}>
                    <Image 
                        src="/images/foodService.png" 
                        alt="" 
                        width='300'
                        height='250'
                    />
                    <p>Food service</p>
                </div>
                
                
                
            </nav>
        </div>
    )
}