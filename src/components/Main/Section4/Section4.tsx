import React, {FC} from 'react';
import styles from './Section4.module.scss';
import campaign from '../../../assets/img/mycampaign.png';

interface Section4Props {
}

const Section4: FC<Section4Props> = () => (
    <section className={styles.section4}>
        <div className={styles.section4__container}>
            <div className={styles.section4__inner}>
                <h2>All the power. Easy to use.</h2>
                <p>By collaborating with real ecommerce teams we've built the next-gen personalization tool. No code. No clunkiness.</p>
                <img src={campaign} alt="mycampaign"/>
                <div className={styles.section4__btns}>
                    <button className={styles.section4__btns_btn1}>See products</button>
                    <button className={styles.section4__btns_btn2}>Book a demo</button>
                </div>
            </div>
        </div>
    </section>
);

export default Section4;
