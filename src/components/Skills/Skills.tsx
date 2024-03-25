import styles from './Skills.module.sass'
import Image from 'next/image'

export const Skills = () => {

    return(
    
        <div id='skillsSection' className={styles.Carrusel}>
            <h1 className={styles.Carrusel__subheader}>Techologies</h1>
            <div className={styles.Carrusel__container}>
                <div className={styles.Carrusel__iconBoxContainer}>
                    <div className={styles.Carrusel__iconBox}>
                        <Image width="48" height="48" src="https://img.icons8.com/color/48/c-plus-plus-logo.png" alt="c-plus-plus-logo"/>
                        c++
                    </div>
                    <div className={styles.Carrusel__iconBox}>
                        <Image width="48" height="48" src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
                        Java
                    </div >
                    <div className={styles.Carrusel__iconBox}>
                        <Image width="48" height="48" src="https://img.icons8.com/fluency/48/javascript.png" alt="javascript"/>
                        JavaScript
                    </div>
                    <div className={styles.Carrusel__iconBox}>
                        <Image width="24" height="24" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo"/>
                        React.js
                    </div>
                    <div className={styles.Carrusel__iconBox}>
                        <Image width="48" height="48" src="https://img.icons8.com/fluency/48/nextjs.png" alt="nextjs"/>
                        Next.js
                    </div>
                    <div className={styles.Carrusel__iconBox}>
                        <Image width="48" height="48" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
                        Python
                    </div>
                    <div className={styles.Carrusel__iconBox}>
                        <Image width="53" height="53" src="https://img.icons8.com/external-vectorslab-flat-vectorslab/53/external-Database-Management-seo-and-marketing-vectorslab-flat-vectorslab.png" alt="external-Database-Management-seo-and-marketing-vectorslab-flat-vectorslab"/>
                        DBMS
                    </div>
                    <div className={styles.Carrusel__iconBox}>
                        <Image width="48" height="48" src="https://img.icons8.com/color/48/git.png" alt="git"/>
                        Git
                    </div>
                    <div className={styles.Carrusel__iconBox}>
                        <Image width="50" height="50" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/>
                        GitHub
                    </div>
                </div>
            </div>
        </div>
    )
}

