import React from 'react'
import styles from './Navbar2.module.css'
import logo from '../../assets/images/logo.svg'
import { FiShoppingCart } from "react-icons/fi";


const Navbar2 = () => {
  return (
    <>
    <div className={styles.Navbar2}>
        <div className={styles.Printivo}>
        <img src={logo} alt="" />
        </div>
        <div>
            <ul className={styles.list}>
                <li>All Products</li>
                <li>Become a Reseller</li>
                <li>Merch Store</li>
                <li>Marketplace</li>
            </ul>
        </div>
        <div className={styles.gensign}>
            <ol className={styles.sign}>
                <li className={styles.in}>Sign In</li>
                <li>Create Account</li>
            </ol>
        </div>
        <span className={styles.Cart}>
        <FiShoppingCart size={24}/>

        </span>
    </div>
    
    </>
  )
}

export default Navbar2