import styled from "styled-components";

export const Container = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
border-bottom: 1px solid #3E3B47;
background: ${({theme})=>theme.COLORS.TERNARY_COLOR};

>div{
  color: ${({theme})=>theme.COLORS.WHITE};
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
  text-align: end;
}
`