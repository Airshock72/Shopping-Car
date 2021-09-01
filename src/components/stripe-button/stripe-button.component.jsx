import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Izm7KDjdF7YEwBzPV9IrwYN4rHICrpjIPonT6WMMsTzDMF2RWfvEyjTGCpLYU1GdzsU5PlGI4g00AdnUtctxeEa00OwBUO33O";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Shopping Car"
      billingAddress
      shippingAddress
      image="https://i.etsystatic.com/17857814/r/il/92fc9a/1985989227/il_570xN.1985989227_4wze.jpg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
