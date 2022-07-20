import styled from "styled-components";

export const Container = styled.div`

width: 100%;
display: flex;
height: 5.6rem;
align-items: center;
display: flex;
justify-content: center;
background-color: ${({theme})=>theme.COLORS.SECONDARY_COLOR};
color: ${({theme})=>theme.COLORS.GRAY_400};
border-radius: 1rem;
margin-bottom: 8px;
padding: 19px 24px;
background: #262529;

&.sr-only{
  opacity: 0;
  width: 1px;
  height: 1px;
  position: absolute;
  margin: -1px;
  white-space: nowrap;
  overflow: hidden;
  border-width: 0;
  clip: rect(0, 0, 0, 0);
}

>input{
  height: 100%;
  width: 100%;
  max-width: 63rem;
  padding:1.6rem;
  color:${({theme})=> theme.COLORS.WHITE};
  outline: none;
  

  background: transparent; 
  &::placeholder{
    color:${({theme})=> theme.COLORS.GRAY_400};
  }
  
}
`