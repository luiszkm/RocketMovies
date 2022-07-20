import styled from "styled-components";

export const Container = styled.div`

max-width: 768px;
width: 100%;
min-height: 100vh;
margin: 0 auto;

>main{
  padding: 4rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
}
`


export const Form = styled.div`

width: 100%;

display: flex;
flex-direction: column;
align-items: center;
padding: 4rem 1rem;

gap: 4rem;
>div{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
`