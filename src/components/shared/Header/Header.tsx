import Link from 'next/link'
import styles from './Header.module.sass'
import Image from 'next/image'

export const Header = () => {

    return(
        <header className={styles.Header}>
            <ul className={styles.Header__list}>
                <div className={styles.Header__Home}>
                    <Link
                        href="/" 
                        rel="noopener noreferrer"
                        className={styles.Header__Home}
                    >
                        home
                    </Link>
                </div>
                <div className={styles.Header__contact}>
                    contact
                    <div className={styles.Header__dropdownmenu}>

                        <Link
                            href="https://www.linkedin.com/in/julio-morales-79453a1a4" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Image width="38" height="38" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>
                              Linked in
                        </Link>
                        <a 
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=moralesjulio249@gmail.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Image width="38" height="38" src="https://img.icons8.com/arcade/64/new-post--v1.png" alt="new-post--v1"/>
                              Email
                        </a>
                        <a 
                            href="https://github.com/julio249"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Image width="50" height="50" src="https://img.icons8.com/ios-filled/50/1A1A1A/github.png" alt="github"/>
                            GitHub
                        </a>
                        <a 
                            href="https://discord.com/channels/@me"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Image width="48" height="48" src="https://img.icons8.com/fluency/48/discord-logo.png" alt="discord-logo"/>
                              Discord
                        </a>
                    </div>
                </div>

            </ul>
        </header>
    )
}