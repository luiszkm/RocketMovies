import styled from "styled-components";

export const Container = styled.button`
width: 100%;
background-color: hsla(349, 100%, 76%, 0.05);
border-radius: 16px;
color:  ${({ theme }) => theme.COLORS.WHITE_400};
height: fit-content;
padding: 3.2rem;
gap: 1.5rem;
display: flex;
flex-direction: column;
align-items: flex-start;

>footer{
  display: flex;
  align-items: center;
  gap: 8px;
}
`