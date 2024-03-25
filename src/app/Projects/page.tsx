import { ReactNode } from "react";
import styles from './ProjectsLayout.module.sass'
import Image from 'next/image'
import Link from "next/link";

export default function ProjectsLayout({children} : {children: ReactNode}){
    return(
        <main className={styles.ProjectsLayout}>
            Projects:
            <nav>
                <ul className={styles.ProjectsLayout__list}>
                    <Image 
                        src="/images/store.png"
                        alt='store'
                        width={500}
                        height={500}
                    />
                    <li className={styles.ProjectsLayout__chip}>
                        Shopping web application {/*add link later*/}
                    </li>
                </ul>
            </nav>
            {children}
        </main>
    )
}