import React, {FC} from 'react';
import styles from './Section3.module.scss';
import search from '../../../assets/img/search.svg';
import person from '../../../assets/img/person.svg';
import more from '../../../assets/img/more.svg';

interface Section3Props {
}

const Section3: FC<Section3Props> = () => (
    <section className={styles.section3}>
        <h2>Qubit CommerceAI.</h2>
        <p>The new way to drive growth.</p>
        <div className={styles.section3__content}>
            <div>
                <img src={search} alt="search"/>
                <h5>More insight</h5>
                <p>
                    Learn which products drive performance and <br/>
                    which don't, through automated insights you <br/>
                    can action.
                </p>
            </div>
            <div>
                <img src={person} alt="person"/>
                <h5>More personal</h5>
                <p>
                    Qubit CommerceAI generates a model per <br/>
                    shopper to make every customer interaction <br/>
                    more relevant.
                </p>
            </div>
            <div>
                <img src={more} alt="more"/>
                <h5>More effective</h5>
                <p>
                    Qubit fuses data, intent, and design tools to <br/>
                    enable your team to create more effective <br/>
                    customer experiences.
                </p>
            </div>
        </div>
    </section>
);

export default Section3;
