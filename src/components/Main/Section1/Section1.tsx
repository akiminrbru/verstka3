import React, {FC} from 'react';
import styles from './Section1.module.scss';
import barbour from '../../../assets/img/barbor.png';
import katespade from '../../../assets/img/katespade.png';
import lvmh from '../../../assets/img/lvmh.png';
import esteelauder from '../../../assets/img/esteelauder.png';
import dx from '../../../assets/img/dx.png';
import riverisland from '../../../assets/img/riverisland.png';
import radisson from '../../../assets/img/radisson.png';
import gstarraw from '../../../assets/img/gstarraw.png';
import borderbottom from '../../../assets/img/borderbottom.svg';

interface Section1Props {
}

const Section1: FC<Section1Props> = () => (
    <section className={styles.section1}>
        <h4>Trusted by world-class brands.</h4>
        <div className={styles.section1__images}>
            <img src={barbour} alt="barbour"/>
            <img src={katespade} alt="katespade"/>
            <img src={lvmh} alt="lvmh"/>
            <img src={esteelauder} alt="katespade"/>
            <img src={dx} alt="barbour"/>
            <img src={riverisland} alt="katespade"/>
            <img src={radisson} alt="barbour"/>
            <img src={gstarraw} alt="katespade"/>
        </div>
        <p><a href="#">Meet our customers &gt;</a></p>
    </section>
);

export default Section1;
