import React, {FC} from 'react';
import styles from './BeautyCard.module.scss';
import beauty from '../../../../assets/img/beauty.svg';

interface BeautyCardProps {
    image: string;
    title: string;
    description1: string;
    description2: string;
}

const BeautyCard: FC<BeautyCardProps> = ({image, title, description1, description2}) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__image}>
                <img src={image} alt="photo"/>
                <p>{title}</p>
            </div>
            <p className={styles.card__text1}>{description1}</p>
            <p className={styles.card__text2}>{description2}</p>
        </div>
    );
};

export default BeautyCard;