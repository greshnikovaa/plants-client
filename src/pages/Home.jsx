import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import styles from './Home.module.css'
import Button from '../components/UI/button/Button';
import sale_img from '../assets/img/Super Sale Banner.png'
import ListProducts from '../components/ListProducts/ListProducts'
import Cactus from '../components/Cactus/Cactus'
import Blog from '../components/Blog/Blog'


const Home = () => {
    return (
        <div className='container'>
            <Navbar/>
            <Header/>
            <section className={styles.section}>
                <div className={styles.left}>
                    <h3>Categories</h3>
                    <ul>
                        <li className={styles.green_tekst}>House Plants</li>
                        <li>Potter Plants</li>
                        <li>Seeds</li>
                        <li>Small Plants</li>
                        <li>Big Plants</li>
                        <li>Succulents</li>
                        <li>Trerrariums</li>
                        <li>Gardening</li>
                        <li>Accessories</li>
                    </ul>
                    <h3>Price Range</h3>
                    <Button className={styles.btn}>Filter</Button>
                    <h3>Size</h3>
                    <div className={styles.sizes}> 
                    <ul>
                        <li className={styles.two_sides}><span>Small</span><span>(119)</span></li>
                        <li className={styles.two_sides}><span>Medium</span><span>(86)</span></li>
                        <li className={styles.two_sides}><span>Large</span><span>(78)</span></li>
                    </ul>
                    </div>
                    <img alt='sale' src={sale_img} />
                </div>
                <div className={styles.right}>
                    <div className={styles.option_page}>
                        <ul className={styles.box_option_page}>
                            <li className={styles.option_active}>All Plants</li>
                            <li>New Arrivals</li>
                            <li>Sale</li>
                        </ul>
                        <div>
                            <span>Short by:</span>
                            <select className={styles.select} name='select'>
                                <option value="1">Default sorting</option>
                                <option value="2">Зеленый</option>
                                <option value="3">Желтый</option>
                            </select>
                        </div>
                    </div> 
                <ListProducts/>
                </div>
            </section>
            <Cactus/>
            <Blog/>
        </div>
        
    );
};

export default Home;