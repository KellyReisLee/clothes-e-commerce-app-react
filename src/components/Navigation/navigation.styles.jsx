import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 1rem;
padding: 1rem;
align-items: center;
`

export const ImageContainer = styled.div`
width:100%;
height: 100S%;
padding: 25px;
`


export const NavLinkComp = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
gap: 1rem;

`

export const NavLinkItem = styled(Link)`
    cursor: pointer;
    color: #777;
    font-size: 1.15rem;
    font-weight: 600;

`


