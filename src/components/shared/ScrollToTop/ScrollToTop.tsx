"use client"

import styles from './ScrollToTop.module.sass'

export const ScrollToTop = ({id}) => {
    const handlClick = () => {
        var myDiv = document.getElementById(id);
        myDiv?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        console.log('click ')
    }
    return(
        <div className={styles.TopDiv} onClick={handlClick}>
            <img width="70" height="70" src="https://img.icons8.com/ios-filled/50/ffd700/up-squared.png" alt="up-squared"/>
            
        </div>
    )
}