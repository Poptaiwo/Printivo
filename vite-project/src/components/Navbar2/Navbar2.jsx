import React from 'react'
import styles from './Navbar2.module.css'

const Navbar2 = () => {
  return (
    <>
    <div className={styles.Navbar2}>
        <h2 className={styles.Printivo}>Printivo</h2>
        <div>
            <ul className={styles.list}>
                <li>All Products</li>
                <li>Become a Reseller</li>
                <li>Merch Store</li>
                <li>Marketplace</li>
            </ul>
        </div>
        <div>
            <ol className={styles.sign}>
                <li><a href="#">Sign In</a></li>
                <li><a href="#">Create an account</a></li>
            </ol>
        </div>
    </div>
    </>
  )
}

export default Navbar2