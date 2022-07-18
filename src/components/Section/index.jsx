import { Container } from "./styles";

export function Section({title, children, button}){

  return(
    <Container>
     <header>
      <h2>{title}</h2>
        {button}
      </header> 
      
      {children}
    </Container>
  )
}