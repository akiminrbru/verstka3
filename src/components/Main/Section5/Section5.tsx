import React, {FC} from 'react';
import styles from './Section5.module.scss';
import InfoCard from "./InfoCard/InfoCard";
import recommend from '../../../assets/img/recommend.svg';
import badging from '../../../assets/img/badging.svg';
import perscontent from '../../../assets/img/perscontent.svg';
import search from '../../../assets/img/search.svg';
import AI from '../../../assets/img/AI.svg';
import integrations from '../../../assets/img/integrations.svg';

interface Section5Props {
}

const Section5: FC<Section5Props> = () => (
    <section className={styles.section5}>
        <h2>What you can do with Qubit.</h2>
        <div className={styles.section5__content}>
            <InfoCard image={recommend} title={"1:1 Product recommendations"} description={"Use deep learning recommendations to engage customers in seconds."}/>
            <InfoCard image={badging} title={"1:1 Product badging"} description={"Guide discovery with personalized product badging. Push sales with social proofing."}/>
            <InfoCard image={perscontent} title={"Personalized content"} description={"Your customers are unique. Present them with content that shows you know them."}/>
            <InfoCard image={search} title={"Product insights"} description={"A platform packed with insights helping you discover the hard hitting things you can do next."}/>
            <InfoCard image={AI} title={"CommerceAI"} description={"Your customer's behavioral data is telling you a story. Use predictive and affinity based algorithms to serve them better."}/>
            <InfoCard image={integrations} title={"Platform integrations"} description={"Connect Qubit to any tool via API. Import data or trigger an experience on any platform."}/>
        </div>
    </section>
);

export default Section5;
