import styled from "styled-components";

export const Container = styled.button`
width: 100%;
height: 5.6rem;
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
background: ${({theme ,secondary_button })=> secondary_button ?theme.COLORS.BG_BLACK : theme.COLORS.LIGHT_PINK};
color: ${({theme ,secondary_button })=> secondary_button ? theme.COLORS.LIGHT_PINK :theme.COLORS.BG_BLACK};
border-radius: 8px;
padding: 1rem;
`