import React, { FC } from 'react';
import styles from './MoneyCard.module.scss';

interface MoneyCardProps {
    title: string;
    description1: string;
    description2: string;
}

const MoneyCard: FC<MoneyCardProps> = ({title, description1, description2}) => {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>
                {description1} <br/>
                {description2}
            </p>
        </div>
    );
};

export default MoneyCard;