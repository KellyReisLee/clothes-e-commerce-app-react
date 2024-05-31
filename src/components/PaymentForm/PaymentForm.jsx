import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {useState  } from 'react';
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { useSelector } from "react-redux";
import {selectCartTotal } from "../../store/cart/cart-selector.js";
import {selectCurrentUser } from "../../store/user/user-selector.js";


import React from "react";
import { FormContainer, PaymentFormContainer, ButtonCheckout, Title, TotalPrice } from "./PaymentForm.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const totalValueCart = useSelector(selectCartTotal)
  const currentUser = useSelector(selectCurrentUser)
  const[processPayment, setProcessPayment] = useState(false)

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setProcessPayment(true)
    const response = await fetch('/.netlify/functions/create-payment-intent',{
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({amount: 10000})
    } ).then(res => res.json())
    console.log(response)
    const {client_secret} = response.paymentIntent
    console.log(client_secret)

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details:{
          name: currentUser ? currentUser.displayName : currentUser.email
        }
      }
    })
    setProcessPayment('concluded')

    
    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!');
      }
    }
    
  };

  console.log(processPayment)

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <Title>Credit Card Payment:</Title>
        <TotalPrice>$ {totalValueCart}</TotalPrice>
        <CardElement options={{ hidePostalCode: true }} />
        <ButtonCheckout disabled={processPayment === 'concluded' && true} buttonType={processPayment !== 'concluded'?BUTTON_TYPE_CLASSES.base :BUTTON_TYPE_CLASSES.concluded}>{
          processPayment !== 'concluded'? 'Pay now': 'Payment Concluded!'
        }</ButtonCheckout>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
