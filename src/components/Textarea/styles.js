import styled from "styled-components";

export const Container = styled.textarea`
width: 100%;
height:27rem;
background-color: ${({ theme }) => theme.COLORS.MAIN_BG};
color:${({ theme }) => theme.COLORS.WHITE};

border: none;
resize: none;
outline: none;
margin-bottom: .8rem;
border-radius: 1rem;
padding:1.6rem;
&::placeholder{
  color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
}

`