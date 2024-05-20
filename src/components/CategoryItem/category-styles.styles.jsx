import styled from "styled-components";


export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image:${({ imageurlitem }) => `url(${imageurlitem})`};
`

export const Body = styled.div`
    height: 110px;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
   

    h2 {
      font-weight: bold;
      margin: 0 6px 0;
      font-size: 22px;
      color: #4a4a4a;
      text-transform: uppercase;
      
    }

    p {
      font-weight: lighter;
      font-size: 16px;
    }
`


export const ContainerCategory = styled.div`
  min-width: 50%;
  height: 41vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  overflow: hidden;
  flex: 1;
  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }
  }
  

  
`
