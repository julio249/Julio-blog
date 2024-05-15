import { cardDetails } from './Carousel-config'
import CarouselItem from './CarouselItem'
import styles from './Skills.module.sass'
import Image from 'next/image'

export const Skills = () => {

    return(
    
        <div id='skillsSection' className={styles.carousel}>
            <h1 className={styles.carousel__subheader}>Techologies</h1>
            <div className={styles.carousel__container}>
                <div className={styles.carousel__track}>
                    
                    {Object.keys(cardDetails).map((detailKey) => {
                        return (
                            <CarouselItem 
                                key={detailKey}
                                imgUrl={cardDetails[detailKey].imgUrl}
                                imgTitle={cardDetails[detailKey].title}
                            ></CarouselItem>
                        )}
                    )}
                    {Object.keys(cardDetails).map((detailKey) => {
                        return (
                            <CarouselItem 
                                key={`${detailKey}-duplicate`}
                                imgUrl={cardDetails[detailKey].imgUrl}
                                imgTitle={cardDetails[detailKey].title}
                            ></CarouselItem>
                        );
                    })}
                    {Object.keys(cardDetails).map((detailKey) => {
                        return (
                            <CarouselItem 
                                key={`${detailKey}-duplicate`}
                                imgUrl={cardDetails[detailKey].imgUrl}
                                imgTitle={cardDetails[detailKey].title}
                            ></CarouselItem>
                        );
                    })}
                    
                </div>

            </div>
        </div>
    )
}

