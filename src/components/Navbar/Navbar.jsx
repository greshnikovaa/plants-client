import React from 'react';
import styles from './Navbar.module.css'
import logo from '../../assets/img/Group.png'
import {Search, Cart2, BoxArrowRight} from 'react-bootstrap-icons'
import Button from '../UI/button/Button'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <img alt='logo' src={logo}/>
            <ul className={styles.list}>
                <li className={styles.active}>Home</li>
                <li>Shop</li>
                <li>Plant Care</li>
                <li>Blogs</li>
            </ul>
            <div className={styles.btns}>
                <Search size={20}/>
                <div className={styles.cart}>
                    <Cart2 size={22}/>
                    <span className={styles.count_cart}>1</span>
                </div>
                <Button>
                    <BoxArrowRight size={20}/>
                    <span>Login</span>
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;