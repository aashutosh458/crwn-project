import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Mnc8vSB3FmEbQQL9osAEEGwWX0egfVHL4Nny6SZxHosE5sTMgtg4yDTcw9xYOW4RsGYoXg9wQ2yFtMAU4EUSZOk00In1wbBXr';


    const onToken = token => {
        console.log(token);
        alert('Payment Successful'); 
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description='{`your total is $${price}`}'
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );

};
export default StripeCheckoutButton; 