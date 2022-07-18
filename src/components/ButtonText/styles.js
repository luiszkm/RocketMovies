import styled from "styled-components";

export const Container = styled.button`

background: none;
color: ${({ theme, isActive }) => isActive? theme.COLORS.LIGHT_PINK: theme.COLORS.SECONDARY_COLOR};
border: none;
font-size: 1.6rem;


`

