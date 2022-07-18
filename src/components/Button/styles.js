import styled from "styled-components";

export const Container = styled.button`
cursor: pointer;
display: flex;
align-items: center;
gap: 8px;
background: ${({theme})=>theme.COLORS.LIGHT_PINK};
border-radius: 8px;
padding: 1rem;
`