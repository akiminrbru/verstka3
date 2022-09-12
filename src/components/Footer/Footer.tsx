import React, {FC} from 'react';
import styles from './Footer.module.scss';
import logo2 from '../../assets/img/logo2.png'

interface FooterProps {
}

const Footer: FC<FooterProps> = () => (
    <footer className={styles.footer}>
        <div className={styles.footer__container}>
            <div className={styles.footer__inner}>
                <div className={styles.footer__content}>
                    <div>
                        <h3>Featured Capabilities</h3>
                        <ul>
                            <li>A/B testing</li>
                            <li>Abandonment recovery</li>
                            <li>Customer insights</li>
                            <li>Customer polling and feedback</li>
                            <li>Customer segmentation</li>
                            <li>Data collection</li>
                            <li>Ecommerce merchandising</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Info</h3>
                        <ul>
                            <li>Custom machine learning</li>
                            <li>Journey Personalization</li>
                            <li>Mobile app personalization</li>
                            <li>Cross-channel personalization</li>
                            <li>Social proofing</li>
                            <li>Website personalization</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Products</h3>
                        <ul>
                            <li>1:1 Product recommendations</li>
                            <li>1:1 Product badging</li>
                            <li>1:1 Journey personalization</li>
                            <li>Personalized content</li>
                            <li>Product insights</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Resources</h3>
                        <ul>
                            <li>Resources</li>
                            <li>Customers</li>
                            <li>Qubit Blog.</li>
                            <li>Glossary</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Company</h3>
                        <ul>
                            <li>Why Qubit?</li>
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Working with us</h3>
                        <ul>
                            <li>Legal</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footer__logo}>
                    <img src={logo2} alt="qubit"/>
                    <p>© 2021 Qubit. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
