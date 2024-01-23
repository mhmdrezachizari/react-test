import React from 'react'
import styles from './new.module.css'; 
import { BsCashCoin } from "react-icons/bs";
import { useState } from 'react';
function card({data}) {
  const [resultbuy, setresultbuy] = useState([])
   const submitHandler= (e) =>{
    console.log(e);
    return
  }
  return (
<div className={styles.div1}>
    <h5 className={styles.title1}>{data.title}</h5>
    <h6 className={styles.price1}>price is : {data.price}  <BsCashCoin /> </h6>
    <img src={data.image} alt="" className={styles.sty}/>
    <button onClick={submitHandler}>buy</button>
    <button>delete</button>
</div>
)
}

export default card