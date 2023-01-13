import React from 'react'

function Item(props) {

    return (

            <div className="glassBox">
                <div className="glassBox__imgBox">
                    <img src={props.image} alt=""  />
                    <h3 className="glassBox__title">{props.title}</h3>
                </div>
                <div className="glassBox__content">
                    {props.price}$
                    <div className='btn_add' id={props.id}>Add To Card</div>
                    </div>
            </div>

    )
}

export default Item