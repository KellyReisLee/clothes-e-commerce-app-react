import styled from "styled-components";


import Button from '../Button/Button'


export const PaymentFormContainer = styled.div`
height: 310px;
display: flex;
flex-direction: column;
align-items: center;
padding: 0.9rem 2rem;
color: #555;
background-color: #e1e1e1;

`

export const FormContainer = styled.form`
  height: 100px;
  width: 100%;
  padding: 1rem;
`

export const Title = styled.h2`
margin-bottom: 1rem;
`


export const ButtonCheckout = styled(Button)`
width: 100%;
height: 50px;
margin-top: 2rem;

`

export const TotalPrice = styled.h3`
color: #555;
font-size: 3rem;
margin-bottom: 1rem;

`