import React from 'react';
import styles from './Cactus.module.css'
import palma_img from '../../assets/img/image 7.png'
import palma2_img from '../../assets/img/image-2.png'
import Button from '../UI/button/Button';

const Cactus = () => {
    return (
        <div className={styles.mein_sides}>
            <div className={styles.side}>
                <img alt='palma' src={palma_img} />
                <div className={styles.tekst}>
                    <h2>Summer cactus <br/> & succulents</h2>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants</p>
                    <Button>Find More -></Button>
                </div>
            </div>
            <div className={styles.side}>
                <img alt='palma2' src={palma2_img} />
                <div className={styles.tekst}>
                    <h2>Styling Trends <br/> & much more</h2>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants</p>
                    <Button>Find More -></Button>
                </div>
            </div>
        </div>
    );
};

export default Cactus;