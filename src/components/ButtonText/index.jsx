import { Container } from "./styles";


export function ButtonText ({icon, title, isActive = false, ...rest }){

  return(
    <Container 
    type="button"
    isActive={isActive}
    {...rest}>
      {icon}
      {title}
    </Container>
  )
}
