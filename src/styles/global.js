import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
:root{
  font-size: 62.5%;

}
body{
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
  background-color:  ${({ theme }) => theme.COLORS.MAIN_BG};
  color:  ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Roboto Slab', serif;
;
}
.sr-only {
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
.hide{
  display: none;
}
button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }
  button:hover, a:hover{
    cursor: pointer;
    filter: brightness(0.9);
  }


`