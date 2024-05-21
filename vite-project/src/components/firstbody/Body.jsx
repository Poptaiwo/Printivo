import React from "react";
import img from "../../assets/images/hand-card.png";
import styles from "./Body.module.css";
import { FiSearch } from "react-icons/fi";

const Body = () => {
  const categories = [
    {
      title: "Two sided bussiness card",
      heading: "Starting at",
      price: "14,000",
      buttonText: "Browse Two sided",
    },
    {
      title: "Two sided bussiness card",
      heading: "Starting at",
      price: "14,000",
      buttonText: "Browse Two sided",
    },
    {
      title: "Two sided bussiness card",
      img: img,
      heading: "Starting at",
      price: "14,000",
      buttonText: "Browse Two sided",
    },
    {
      title: "Two sided bussiness card",
      heading: "Starting at",
      price: "14,000",
      buttonText: "Browse Two sided",
    },
  ];

  return (
    <section className={styles.prints}>
      {/* {categories.map( item => {
        <div>
          <img src={item.img} alt="" />
        </div>
      } )} */}
      <div className={styles.printsText}>
        <div className={styles.printsTextPrimary}>
          <h1>Quality Prints</h1>
          <h3>Shipped to your doorstep</h3>
        </div>
        <div className={styles.printsTextSub}>
          <h6>What would you like to print today?</h6>
          <input
            type="text"
            placeholder="Search for Business cards, T-shirts, Mugs, etc"
          />
          <span className={styles.searchIcon}>
            <FiSearch size={24} />
          </span>
        </div>
      </div>
      <div className={styles.handCard}>
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default Body;
