import React from "react";
 
export default function OrderInfo(props) {
    return (
        <div className="order-info">
            <img src={`/img/${props.item.imgName}`} className='order-img' />
            <p className="order-name">{props.item.gunName}</p>
            <span>{props.item.price} руб.</span>
            <button className="order-delete" onClick={()=>props.handleClick(props.id)}>удалить заказ</button>
        </div>
    )
}