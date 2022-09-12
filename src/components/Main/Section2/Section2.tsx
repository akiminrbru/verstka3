import React, {FC} from 'react';
import styles from './Section2.module.scss';
import MoneyCard from "./MoneyCard/MoneyCard";

interface Section2Props {
}

const Section2: FC<Section2Props> = () => (
    <section className={styles.section2}>
        <div className={styles.section2__content}>
            <h2>
                Grow 2.5x faster than <br/>
                your competitors.
            </h2>
            <div className={styles.section2__btn}>
                <button>Book a demo</button>
                <a href="#">Meet our customers &gt;</a>
            </div>
            <div className={styles.section2__text}>
                <p>*PwC audited methodology.</p>
                <a href="#">Read the report</a>
            </div>
        </div>
        <div className={styles.section2__cards}>
            <MoneyCard title={"140%"} description1={"Qubit's top customers"} description2={"annual growth rate."}/>
            <MoneyCard title={"9.5m"} description1={"Personalized experiences"} description2={"delivered every hour."}/>
            <MoneyCard title={"$20bn"} description1={"Online sales generated"} description2={"by our customers in 2020."}/>
            <MoneyCard title={"4.4m"} description1={"Shoppers influenced"} description2={"by Qubit every day."}/>
            <MoneyCard title={"364"} description1={"Ecommerce stores are"} description2={"growing faster with Qubit."}/>
            <MoneyCard title={"$1.6bn"} description1={"Incremental revenue generated"} description2={"by our customers in 2020.*"}/>
        </div>
    </section>
);

export default Section2;
