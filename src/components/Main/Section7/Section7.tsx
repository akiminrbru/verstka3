import React, {FC} from 'react';
import styles from './Section7.module.scss';
import BeautyCard from "./BeautyCard/BeautyCard";
import beauty from '../../../assets/img/beauty.svg';
import fashion from '../../../assets/img/fashion.svg';
import luxury from '../../../assets/img/luxury.svg';
import airlines from '../../../assets/img/airlines.svg';
import travel from '../../../assets/img/travel.svg';
import onlinebetting from '../../../assets/img/onlinebetting.svg';


interface Section7Props {
}

const Section7: FC<Section7Props> = () => (
    <section className={styles.section7}>
        <h3>We specialize in your industry.</h3>
        <p>Learn how we are delivering personalization at scale across sectors.</p>
        <div className={styles.section7__content}>
            <BeautyCard image={beauty} title={"Beauty and cosmetics"} description1={"Discover relevant products. Push samples. Upsell and replenish."} description2={"Explore our solutions for beauty and cosmetics."}/>
            <BeautyCard image={fashion} title={"Fashion"} description1={"Supercharge merchandising. Reach your best customers."} description2={"Explore our solutions for fashion."}/>
            <BeautyCard image={luxury} title={"Luxury"} description1={"Drive brand experience online. Look after your VIPs."} description2={"Explore our solutions for luxury."}/>
            <BeautyCard image={airlines} title={"Airlines"} description1={"Increase loyalty. Boost ancillary sales. Capture every opportunity."} description2={"Explore our solutions for airlines."}/>
            <BeautyCard image={travel} title={"Travel & tourism"} description1={"Be persuasive. Inspire travellers. Drive revenue."} description2={"Explore our solutions for travel and tourism."}/>
            <BeautyCard image={onlinebetting} title={"Online betting"} description1={"Bring events to life. Personalize in real time. Be responsible."} description2={"Explore our solutions for online betting."}/>
        </div>
    </section>
);

export default Section7;
