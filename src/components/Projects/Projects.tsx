import Link from 'next/link'
import styles from './Projects.module.sass'

export const Projects = () => {

    return(
        <div id="projectsSection">

            <h1 className={styles.projectsSection__subheader}> Projects </h1>
            <nav  className={styles.projectsSection}>

                <Link 
                    href={'https://furute-world.vercel.app/'} 
                    className={styles.projectsSection__Item} 
                    target="_blank" 
                    rel="noopener noreferrer"
                > 
                    <img 
                        src="/images/store.png" 
                        alt="Project 1" 
                        width='300'
                        height='200'
                    />
                    <p>Shopping web application wiht Next.js</p>
                </Link>
                
                <Link 
                    href={'https://github.com/julio249/mobile_programming'} 
                    className={styles.projectsSection__Item}
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img 
                        src="/images/dasthub.png" 
                        alt="Project 3" 
                        width='300'
                        height='200'
                    />
                    <p> Mobile App for finding art and concerts made in Kotlin</p>
                </Link>

                
                <Link 
                    href={'https://github.com/julio249/Mario/tree/main/Assigment3/a3'} 
                    className={styles.projectsSection__Item}
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img 
                        src="/images/Mario.png" 
                        alt="Project 3" 
                        width='300'
                        height='200'
                    />
                    <p>Mario made in Java</p>
                </Link>

                <Link 
                    href={'https://julio249.github.io/TodoMachine/'} 
                    className={styles.projectsSection__Item}
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img 
                        src="/images/TODOMachine.png" 
                        alt="Project 2" 
                        width='300'
                        height='200'
                    />
                    <p>TODO Machine with React.js</p>
                </Link>
                
                <Link 
                    href={'https://github.com/julio249/self-driving-car'} 
                    className={styles.projectsSection__Item}
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img 
                        src="/images/car.png" 
                        alt="Project 3" 
                        width='300'
                        height='200'
                    />
                    <p>self-moving car with JavaScript</p>
                </Link>
                <Link 
                    href={'https://github.com/julio249/segment-intersection'}
                    className={styles.projectsSection__Item}
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img 
                        src="/images/segment_intersection.png" 
                        alt="Project 3" 
                        width='300'
                        height='200'
                    />
                    <p>segment intersection with HTML and JavaScript</p>
                </Link>
            </nav>
        </div>
    )
}