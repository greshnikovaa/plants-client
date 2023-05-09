import React from 'react';
import styles from './Blog.module.css'
import card1_img from '../../assets/img/blog-1.png'
import card2_img from '../../assets/img/blog-2.png'
import card3_img from '../../assets/img/blog-3.png'
import card4_img from '../../assets/img/blog-4.png'

const Blog = () => {
    return (
         <div className={styles.mein_container}>
            <h1>Our Blog Posts</h1>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
            <div className={styles.cards}>
                <div className={styles.card}>                   
                    <img alt='card1' src={card1_img} />
                    <div className={styles.card_txt}>
                    <h4>September 12  I Read in 6 minutes</h4>
                    <h2>Cactus & Succulent <br/>Care Tips</h2>
                    <h5>Cacti are succulents are easy care plants for any home or patio. </h5>
                    <p>Read More -></p></div>
                </div>
                <div className={styles.card}>                   
                    <img alt='card2' src={card2_img} />
                    <div className={styles.card_txt}>
                    <h4>September 13  I Read in 6 minutes</h4>
                    <h2>Top 10 Succulents for <br/>Your Home</h2>
                    <h5>Best in hanging baskets. Prefers medium to high light.</h5>
                    <p>Read More -></p></div>
                </div>
                <div className={styles.card}>
                    <img alt='card3' src={card3_img} />
                    <div className={styles.card_txt}>
                    <h4>September 14  I Read in 6 minutes</h4>
                    <h2>Cactus & Succulent <br/>Care Tips</h2>
                    <h5>Cacti are succulents are easy care plants for any home or patio. </h5>
                    <p className={styles.green_tekst}>Read More -></p></div>
                </div>
                <div className={styles.card}>
                    <img alt='card4' src={card4_img} />
                    <div className={styles.card_txt}>
                    <h4>September 15  I Read in 6 minutes</h4>
                    <h2>Top 10 Succulents for <br/>Your Home</h2>
                    <h5>Best in hanging baskets. Prefers medium to high light.</h5>
                    <p>Read More -></p></div>
                </div>
            </div>
        </div>
    );
};

export default Blog;