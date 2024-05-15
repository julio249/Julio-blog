import React from "react";
import Image from 'next/image'
import styles from './Skills.module.sass'

export default function CarouselItem({ imgUrl, imgTitle }) {
  return (
    <div className={styles.carousel__iconBox}>
      <Image width="50" height="50" src={imgUrl} alt={imgTitle}/>
      {imgTitle}
    </div>
  );
}