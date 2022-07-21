import { Container } from "./styles";

export function Section({title,subtitle ,secondary_section =false, children, button}){

  return(
    <Container className={secondary_section}
    secondary_section={secondary_section}>
     <header>
     <h2>{title}</h2>
        {button}
      </header> 
      
      {children}
    </Container>
  )
}