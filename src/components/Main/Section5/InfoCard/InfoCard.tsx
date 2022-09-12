import React, {FC} from 'react';
import styles from './InfoCard.module.scss';

interface InfoCardProps {
    image: string;
    title: string;
    description: string;
}

const InfoCard: FC<InfoCardProps> = ({image, title, description}) => {
    return (
        <div className={styles.infoCard}>
            <img src={image} alt="photo"/>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    );
};

export default InfoCard;