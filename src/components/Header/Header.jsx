import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react';
import styles from './Header.module.css'
import kust from '../../assets/img/01 1.png'
import Button from '../UI/button/Button'
    

const Header = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <header>   
            <Slider {...settings}>
                <div className={styles.mein_container}>
                    <div className = {styles.container}>
                        <div className={styles.left}>
                            <p className={styles.zagolovok}>Welcome to GreenShop</p>
                            <h1>Let’s Make a <br/>Better <span className={styles.green_txt}>Planet</span></h1>
                            <p className={styles.tekst}>We are an online plant shop offering a wide range of cheap and trendy plants. Use <br/>
                            our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                            <Button className={styles.btn}>
                                <span>SHOP NOW</span>
                            </Button>
                        </div>
                        <div className={styles.right}>
                            {/* <img className={styles.kust_little} alt='kust' src={kust}/> */}
                            <img className={styles.kust_big} alt='kust' src={kust}/>           
                        </div>
                    </div>
                    <h1 className={styles.troetochie}>. <span className={styles.green_txt}>. </span>.</h1>
                </div>
                <div className={styles.mein_container}>
                    <div className = {styles.container}>
                        <div className={styles.left}>
                            <p className={styles.zagolovok}>Welcome to GreenShop</p>
                            <h1>Let’s Make a <br/>Better <span className={styles.green_txt}>Planet</span></h1>
                            <p className={styles.tekst}>We are an online plant shop offering a wide range of cheap and trendy plants. Use <br/>
                            our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                            <Button className={styles.btn}>
                                <span>SHOP NOW</span>
                            </Button>
                        </div>
                        <div className={styles.right}>
                            {/* <img className={styles.kust_little} alt='kust' src={kust}/> */}
                            <img className={styles.kust_big} alt='kust' src={kust}/>           
                        </div>
                    </div>
                    <h1 className={styles.troetochie}>. <span className={styles.green_txt}>. </span>.</h1>
                </div>
                <div className={styles.mein_container}>
                    <div className = {styles.container}>
                        <div className={styles.left}>
                            <p className={styles.zagolovok}>Welcome to GreenShop</p>
                            <h1>Let’s Make a <br/>Better <span className={styles.green_txt}>Planet</span></h1>
                            <p className={styles.tekst}>We are an online plant shop offering a wide range of cheap and trendy plants. Use <br/>
                            our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                            <Button className={styles.btn}>
                                <span>SHOP NOW</span>
                            </Button>
                        </div>
                        <div className={styles.right}>
                            {/* <img className={styles.kust_little} alt='kust' src={kust}/> */}
                            <img className={styles.kust_big} alt='kust' src={kust}/>           
                        </div>
                    </div>
                    <h1 className={styles.troetochie}>. <span className={styles.green_txt}>. </span>.</h1>
                </div>
            </Slider>
        </header>
    );
};

export default Header;