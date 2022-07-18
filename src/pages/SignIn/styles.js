import styled from "styled-components";

import backgroundImg from "../../assets/Background.png"

export const Container = styled.div`
min-height: 100vh;
display: flex;
align-items: stretch;

`

export const  Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

export  const  background = styled.div`

flex:1;
background: url(${backgroundImg})
no-repeat center center;
background-size:cover;


`