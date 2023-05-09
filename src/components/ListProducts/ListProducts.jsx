import React from 'react'
import styles from './ListProducts.module.css'
import imgProduct1 from '../../assets/img/banner-0.png'
import imgProduct2 from '../../assets/img/image-1.png'
import imgProduct3 from '../../assets/img/image-2.png'
import imgProduct4 from '../../assets/img/image-3.png'
import imgProduct5 from '../../assets/img/image-4.png'
import imgProduct6 from '../../assets/img/image-5.png'
import imgProduct7 from '../../assets/img/image-6.png'
import imgProduct8 from '../../assets/img/image-7.png'
import imgProduct9 from '../../assets/img/image-8.png'
import CardProduct from '../CardProduct/CardProduct'

const ListProducts = () => {
    const products = [
        {
           id: 1,
           title: "Barberton Daisy",
           price: 119.00,
           img: imgProduct1
        },
        {
           id: 2,
           title: "Angel Wing Begonia",
           price: 75.00,
           img: imgProduct2
        },
        {
           id: 3,
           title: "African Violet",
           price: 121.00,
           img: imgProduct3
        },
        {
           id: 4,
           title: "Beach Spider Lily",
           price: 45.00,
           img: imgProduct4
        },
        {
           id: 5,
           title: "Blushing Bromeliad",
           price: 93.00,
           img: imgProduct5
        },
        {
           id: 6,
           title: "Aluminum Plant",
           price: 67.00,
           img: imgProduct6
        },
        {
           id: 7,
           title: "Bird's Nest Fern",
           price: 134.00,
           img: imgProduct7
        },
        {
           id: 8,
           title: "Broadleaf Lady Palm",
           price: 56.00,
           img: imgProduct8
        },
        {
           id: 9,
           title: "Chinese Evergreen",
           price: 34.00,
           img: imgProduct9
        }
     ]
    return (
        <div className={styles.products}>
            {products.map((product) =>
                <CardProduct key={product.id} product={product}/>
            )}
        </div>
    );
};
export default ListProducts