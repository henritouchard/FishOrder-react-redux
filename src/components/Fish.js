import React from 'react';
import { formatPrice } from '../helpers';

const Fish = (props) => {
    const { details } = props;
    const isAvailable = details.status === 'available';
    const buttonText = isAvailable ? 'Add To Order' : 'Sold Out';
    return (
        <li className="menu-fish">
            <img src={details.image} alt="" />
            <h3>
                {details.name}
                <span className="price">{formatPrice(details.price)}</span>
            </h3>
            <p>{details.desc}</p>
            <button onClick={() => props.addToOrder(props.index)} disabled={!isAvailable}>{buttonText}</button>
        </li>
    )
}

export default Fish;