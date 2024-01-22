import React from 'react'
import styles from './new.module.css'; 
import { BsCashCoin } from "react-icons/bs";
function card({data}) {
  return (
<div className={ styles.div1}>
    <h5 className={styles.title1}>{data.title}</h5>
    <h6 className={styles.price1}>price is : {data.price} <BsCashCoin /></h6>
    <img src={data.image} alt="" className={styles.sty}/>
</div>
)
}

export default card