

import Data from "../../../consts/data";
import EquipmentCardBag from "../../components/cards/equipment_card_bag/equipment_card_bag";
import { useState } from "react";
import { loadStripe } from '@stripe/stripe-js';
import { publicKey } from "../../../consts/consts";



function ShoppingBag() {
    const [myBag, setMyBag] = useState(Data.MyBag);


    const handleCheckout = async () => {
        try {
            const stripe = await loadStripe(publicKey);
    
            if (!stripe) {
                throw new Error('Failed to initialize Stripe');
            }
    
            const lineItems = myBag.map(item => ({
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: item.name,
                        images: [item.img]
                    },
                    unit_amount: Math.round(item.price * 100)
                },
                quantity: 1
            }));
    
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                line_items: lineItems,
                mode: 'payment',
                successUrl: 'https://yourwebsite.com/success',
                cancelUrl: 'https://yourwebsite.com/cancel',
            });
    
            console.log(session); // Check if session is created successfully
        } catch (error) {
            console.error("Error during checkout:", error);
            // Handle error - you might want to set an error state in your component
        }
    };
    




    const removeFromBag = (id) => {
        const updatedBag = myBag.filter(item => item.id !== id);
        setMyBag(updatedBag);
        Data.MyBag = updatedBag;
    };

    const taxRate = 10.3;

    const calculateTotalAmount = () => {
        let total = 0;

        myBag.forEach(equipment => {
            total += equipment.price;
        });

        return total.toFixed(2);
    };

    const calculateTotalWithTaxes = () => {
        const total = calculateTotalAmount();
        const taxes = (total * taxRate) / 100;
        return (parseFloat(total) + taxes).toFixed(2); 
    };

    return(
        <div className="my_bag_page">
            <section className="my_bag_items">
            {myBag.map(equipment => (
                    <EquipmentCardBag 
                        key={equipment.id} 
                        img={equipment.img} 
                        name={equipment.name} 
                        price={equipment.price} 
                        oldprice={equipment.oldprice} 
                        catigury={equipment.catigury} 
                        id={equipment.id}
                        removeFromBag={removeFromBag} 
                    />
                ))}
            </section>
            <section className="my_bag_buy_form">
                <div className="from_amounts">
                    <span className="total_amount">
                        <label>Total Amount:</label>
                        <p>${calculateTotalAmount()}</p>
                    </span>
                    <span className="total_amount">
                        <label>Taxes:</label>
                        <p>${((calculateTotalAmount() * taxRate) / 100).toFixed(2)}</p>
                    </span>
                    <span className="total_amount">
                        <label>Total:</label>
                        <p>${calculateTotalWithTaxes()}</p>
                    </span>
                </div>
                <button onClick={handleCheckout}>
                    Check Out :  ${calculateTotalWithTaxes()}
                </button>
            </section>
        </div>
    )
}

export default ShoppingBag;