import React from 'react';
import { useSelector } from 'react-redux';

import { selectPrice } from '../features/priceSlice';
import '../style/PaypalScreen.css';


import ReactDOM from "react-dom"

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export const PaypalScreen = () => {

    const price = useSelector(selectPrice);

    const createOrder= (data, actions) => {
        return actions.order.create({
            purchase_units: [
            {
                description: "Netflix subscription",
                amount: {
                currency_code: "USD",
                value: price,
                }
            },
            ],
        });
}
        const onApprove = async(data, actions) => {
            return await actions.order.capture();
        };

            return (
                <div className="paypalScreen">
                    <section className="payoalScreen_btn">
                        <PayPalButton
                            createOrder={(data, actions) =>createOrder(data, actions)}
                            onApprove={(data, actions) =>onApprove(data, actions)}
                        />
                    </section>
                </div>
            );
}









    // render() {
    //     return (
    //     <div className="paypalScreen">
    //         <PayPalButton
    //         createOrder={(data, actions) =>createOrder(data, actions)}
    //         onApprove={(data, actions) =>onApprove(data, actions)}/>
    //     </div>
    //     );
    // }