import React, {FC} from 'react';
import styles from './Section8.module.scss';
import ecosystem from '../../../assets/img/ecosystem.png'

interface Section8Props {
}


const Section8: FC<Section8Props> = () => (
    <section className={styles.section8}>
        <div className={styles.section8__container}>
            <div className={styles.section8__inner}>
                <div>
                    <h2>A connected ecosystem.</h2>
                    <p>
                        The Qubit personalization platform is designed with enterprise and high-growth businesses in mind. <br/>
                        Our open ecosystem approach means you can connect any data source and deliver personalization across any channel.
                    </p>
                    <button>See our integrations</button>
                </div>
                <div>
                    <img src={ecosystem} alt="ecosystem"/>
                </div>
            </div>
        </div>
    </section>
);

export default Section8;
