import styles from './Footer.module.sass'

export const Footer = () => {
    return(
        <div className={styles.foot}>
            <ul className={styles.foot__ul}>
                <li className={styles.foot__li}><a className={styles.foot__a} href="https://www.linkedin.com/in/julio-morales-79453a1a4">Linked In</a></li>
                <li className={styles.foot__li}><a className={styles.foot__a} href="mailto:moralesjulio249@gmail.com">Email</a></li>
                <li className={styles.foot__li}><a className={styles.foot__a} href="https://github.com/julio249">Github</a></li>
                <li className={styles.foot__li}><a className={styles.foot__a} href="https://discord.com/channels/@me">Discord</a></li>
                <li className={styles.foot__li} >
                    <p>👋</p>
                </li>
            </ul>
        </div>
    )
}