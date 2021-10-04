import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setPrice } from '../features/priceSlice';

import '../style/PlansSubscription.css';

export const PlansSubscription = ({description,cost,children,}) => {
    // color
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (cost) =>{
        dispatch(setPrice(cost));
        history.push("/checkout");
    }

    return (
        <div className="plansSubscription">
            <div className="plansSubscriotion__description">
                <h2>{children}</h2>
                <h3>{description}<span>${cost}</span></h3>
            </div>
            <button
            className="plansSubscription__btn"
            onClick={ ()=> handleClick(cost) }
            >
                Subscribe
            </button>
        </div>
    )
}

// className={
//     (color)
//     ? (" plansSubscription__btn plansSubscription__btn_gray")
//     :("plansSubscription__btn")
// }