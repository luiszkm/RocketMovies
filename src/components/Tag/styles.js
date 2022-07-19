import styled from "styled-components";



export const Container = styled.span`
display: flex;
align-items: center;
width: fit-content;
background-color: ${({ theme }) => theme.COLORS.BLACK_300};
color: ${({ theme }) => theme.COLORS.WHITE_400};
font-size: 1.2rem;
padding: 0.5rem 1.4rem;
border-radius: 0.5rem;
margin-right: 6px;

`