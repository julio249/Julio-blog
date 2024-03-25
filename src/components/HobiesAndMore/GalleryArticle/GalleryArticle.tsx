import styles from './GalleryArticle.module.sass'

export const GalleryArticle: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__row}>
                <div className={styles.container__column}>

                        <img 
                            src="/images/Gallery/gallery1.jpg" 
                            alt="Image 1"
                        />
                        <img 
                            src="/images/Gallery/gallery2.jpg" 
                            alt="Image 1"
                        />
                        <img 
                            src="/images/Gallery/gallery3.jpg" 
                            alt="Image 1"
                        />
                        <img 
                            src="/images/Gallery/gallery8.jpg" 
                            alt="Image 1"
                        />
                </div>
                <div className={styles.container__column}>

                        <img 
                            src="/images/Gallery/gallery5.jpg" 
                            alt="Image 1"
                        />
                        <img 
                            src="/images/Gallery/gallery4.jpg" 
                            alt="Image 1"
                        />
                        <img 
                            src="/images/Gallery/gallery9.jpg" 
                            alt="Image 1"
                        />
                        
                        
                </div>
                <div className={styles.container__column}>
                    <img 
                        src="/images/Gallery/gallery7.jpg" 
                        alt="Image 1"
                    />
                    <img 
                            src="/images/Gallery/gallery6.jpg" 
                            alt="Image 1"
                        />
                </div>
            </div>

        </div>

        
    );
};