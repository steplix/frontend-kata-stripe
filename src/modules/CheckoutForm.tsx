import React from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to the CardElement
    const cardElement = elements.getElement(CardNumberElement);

    // Use the createToken method to create a token
    const {token, error} = await stripe.createToken(cardElement);

    if (error) {
      console.error("ERROR: ", error);
    } else {
      // Send the token to your server
      stripeTokenHandler(token);
    }
  };

  const stripeTokenHandler = (token: any) => {
    // Send the token to your server and handle the payment server-side
    // Example: Use fetch to send the token to your server
    // fetch('/charge', {
    //   method: 'POST',
    //   body: JSON.stringify({ token: token.id }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
  };

  return (
    <div className="flex w-full min-h-screen items-center justify-center">
      <form className="max-w-[500px] w-full" onSubmit={handleSubmit}>
        <CardNumberElement className="stripe-element" />
        <CardExpiryElement className="stripe-element" />
        <CardCvcElement className="stripe-element" />
        <button
          className="text-center bg-black text-white p-1 w-full"
          disabled={!stripe}
          type="submit"
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
