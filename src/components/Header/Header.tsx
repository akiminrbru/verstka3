import React, {FC} from 'react';
import styles from './Header.module.scss';
import img from '../../assets/img/header.png'
import logo from '../../assets/img/logo.png';

interface HeaderProps {
}

const Header: FC<HeaderProps> = () => (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <div className={styles.nav__container}>
                <div className={styles.nav__inner}>
                    <div>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#">Why Qubit?</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Solutions</a></li>
                            <li><a href="#">Customers</a></li>
                            <li><a href="#">Case studies</a></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">More</a></li>
                        </ul>
                    </div>
                    <div className={styles.nav__login}>
                        <button>Book a demo</button>
                        <a href="#">Log In</a>
                    </div>
                </div>
            </div>
        </nav>
        <div className={styles.header__container}>
            <div className={styles.header__inner}>
                <p className={styles.header__text1}>Driving growth with personalization.</p>
                <h1>
                    Make ecommerce <br/>
                    <span>More personal.</span>
                </h1>
                <p className={styles.header__text2}>
                    Hundreds of brands use Qubit CommerceAI  to power <br/>
                    the next generation of product recommendations, <br/>
                    badging and insights to build exceptional customer  <br/>
                    experiences.
                </p>
                <div className={styles.header__btns}>
                    <input placeholder="Enter your email" type="text"/>
                    <button>Book a demo</button>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
