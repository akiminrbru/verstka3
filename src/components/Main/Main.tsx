import React, {FC} from 'react';
import styles from './Main.module.scss';
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import Section6 from "./Section6/Section6";
import Section7 from "./Section7/Section7";
import Section8 from "./Section8/Section8";
import Section9 from "./Section9/Section9";
import Section10 from "./Section10/Section10";

interface MainProps {
}

const Main: FC<MainProps> = () => (
    <main className={styles.main}>
        <div className={styles.main__container}>
            <div className={styles.main__inner}>
                <Section1/>
                <Section2/>
                <Section3/>
            </div>
        </div>
        <Section4/>
        <div className={styles.main__container}>
            <div className={styles.main__inner}>
                <Section5/>
            </div>
        </div>
        <Section6/>
        <div className={styles.main__container}>
            <div className={styles.main__inner}>
                <Section7/>
            </div>
        </div>
        <Section8/>
        <Section9/>
        <div className={styles.main__container}>
            <div className={styles.main__inner}>
                <Section10/>
            </div>
        </div>
    </main>
);

export default Main;
