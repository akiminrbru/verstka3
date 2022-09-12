import React, {FC} from 'react';
import styles from './Section6.module.scss';
import girl1 from '../../../assets/img/girl1.png';
import girl2 from '../../../assets/img/girl2.png';
import girl3 from '../../../assets/img/girl3.png';
import cliniq from '../../../assets/img/cliniq.png';
import riverisland from '../../../assets/img/riverisland.png';
import mm from '../../../assets/img/mm.png';


interface Section6Props {
}


const Section6: FC<Section6Props> = () => (
    <section className={styles.section6}>
        <div className={styles.section6__container}>
            <div className={styles.section6__inner}>
                <h2>Trusted by leading brands.</h2>
                <div className={styles.section6__images}>
                    <div className={styles.section6__box}>
                        <img src={girl1} alt="girl1"/>
                        <img className={styles.section6__box_title} src={cliniq} alt="cliniq"/>
                        <p>Clinique builds relationships with millions of customers each year.</p>
                    </div>
                    <div className={styles.section6__box}>
                        <img src={girl2} alt="girl2"/>
                        <img className={styles.section6__box_title} src={riverisland} alt="riverisland"/>
                        <p>River Island transforms the customer experience with personalization.</p>
                    </div>
                    <div className={styles.section6__box}>
                        <img src={girl3} alt="girl3"/>
                        <img className={styles.section6__box_title} src={mm} alt="mm"/>
                        <p>MandM Direct drives increase in revenue with deep learning recs</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


export default Section6;
