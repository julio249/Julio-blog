"use client"
import Link from 'next/link'
import styles from './Catregories.module.sass'
import React, { useEffect } from 'react'

interface CategoryProps{
    category: string
}

export const Categories = () => {
    
    const scrollTo = (section: string) => {
        // Check if document object is available (once reaches client)
        if (typeof window !== 'undefined') {
            // Find the target element by ID or using a CSS selector
            const targetProjects = document.getElementById(section);
            
            // Scroll to the target element
            if (targetProjects) {
                targetProjects.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    

    useEffect(() => {
        const gridItems = document.querySelectorAll(`.${styles.grid__item}`);
        gridItems.forEach((item, index) => {
            // Delay animation for each item to create a staggered effect
            item.style.animationDelay = `${index * 0.5}s`;
        });
    }, []);


    return(
        <div className={styles.grid}>
            
            <div onClick={() =>{ scrollTo('skillsSection')}} className={styles.grid__item}>
                Technologies
            </div>
            <div onClick={() =>{ scrollTo('projectsSection')}} className={styles.grid__item}>
                Projects
            </div>
            <div onClick={() =>{ scrollTo('experienceSection')}} className={styles.grid__item}>
                Expecience
            </div>

            <Link href="/HobiesAndMore/" className={styles.grid__item}>
                Hobies and More
            </Link>
            
        </div>
    )
}