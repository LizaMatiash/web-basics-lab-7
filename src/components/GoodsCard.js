import React from "react"

function GoodsCard(props) {
    return (
        <div className="card">
            <img width={200} height={200} src={props.src} alt=''/>
            <p>{props.name}</p>
            <p>Cost: {props.number} grn</p>
        </div>
    )
}

export default GoodsCard
