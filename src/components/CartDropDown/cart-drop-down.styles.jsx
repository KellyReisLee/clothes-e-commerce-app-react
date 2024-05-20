import styled from "styled-components";
import {
  BaseButton,
  GoogleSignInButton,
  Inverted
} from '../Button/button.styles'

export const CartContainer = styled.div`
position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 90px;
right: 40px;
z-index: 5;

${BaseButton},${GoogleSignInButton},${Inverted}{
  width: 100%;
  cursor: pointer;
}

`


export const EmptyMessage = styled.p`
    font-size: 20px;
    margin: 100px auto;
    color: #777;

`


export const CartItems = styled.div`
height: 240px;
display: flex;
flex-direction: column;
overflow: scroll;
gap: 0.4rem;
`


  // .link button {
  //   width: 100%;
  //   cursor: pointer;
  // }

