import React from 'react'
import styles from "./Nav.module.css" 

const Nav = () => {
  return (
    <div>
      <div className={styles.Nav}>
      <div>
      <ol className={styles.list}>
        <li>Cost Calculator</li>
        <li>Discover Stores</li>
        <li>Track Orders</li>
      </ol>
      </div>
      <div className={styles.number}>
      Need help? Call: <br />
      +2347069000083
      or
      +2349035000505
      </div>
      </div>
    </div>
  )
}

export default Nav