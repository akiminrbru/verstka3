import React, {FC} from 'react';
import styles from './Section9.module.scss';
import back from '../../../assets/img/back.png';

interface Section9Props {
}

const Section9: FC<Section9Props> = () => (
    <section className={styles.section9}>
        <div className={styles.section9__container}>
            <div className={styles.section9__inner}>
                <h2>Book a demo today.</h2>
                <div className={styles.section9__btns}>
                    <input placeholder="Enter your email" type="text"/>
                    <button>Book a demo</button>
                </div>
            </div>
        </div>
    </section>
);

export default Section9;
