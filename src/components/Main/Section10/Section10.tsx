import React, {FC} from 'react';
import styles from './Section10.module.scss';
import winter from '../../../assets/img/huawinter.png'
import facebook from '../../../assets/img/facebook.svg';
import twitter from '../../../assets/img/twitter.svg';
import linkedin from '../../../assets/img/linkedin.svg';
import instagram from '../../../assets/img/instagram.svg';
import youtube from '../../../assets/img/youtube.svg';

interface Section10Props {
}

const Section10: FC<Section10Props> = () => (
    <section className={styles.section10}>
        <img src={winter} alt="winter"/>
        <p>Connect with us</p>
        <div className={styles.section10__images}>
            <img src={facebook} alt="facebook"/>
            <img src={twitter} alt="twitter"/>
            <img src={linkedin} alt="linkedin"/>
            <img src={instagram} alt="instagram"/>
            <img src={youtube} alt="youtube"/>
        </div>
    </section>
);

export default Section10;
