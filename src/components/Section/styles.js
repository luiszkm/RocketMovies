import styled from "styled-components";


export const Container = styled.section`
width: 100%;

display: flex;
flex-direction: column;
text-align: center;
gap: 2.4rem;
padding: 1rem;
background-color: ${({ theme,secondary_section})=>secondary_section ?theme.COLORS.BG_BLACK : theme.COLORS.TERNARY_COLOR};
&&.secondary_section{
  display: flex;
  flex-direction: row;
  text-align: center;
  
}
>header{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  
}
`