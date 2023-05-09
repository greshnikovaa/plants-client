import React from 'react'
import styles from './CardProduct.module.css'
import {Cart2, Heart, Search} from 'react-bootstrap-icons' 

const CardProduct = ({product}) => {
    console.log(product)
    return (
        <div className={styles.card}>
            <div className={styles.box_img}><img className={styles.img} alt='product' src={product.img}></img></div>
            <div className={styles.icons}>
                <Cart2/>
                <Heart/>
                <Search/>
            </div>
            <h4 className={styles.title}>{product.title}</h4>
            <p className={styles.price}>{product.price}</p>
        </div>
    );
};
export default CardProduct