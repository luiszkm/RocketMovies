import {Container} from './styles.js'

export function Button ({title, icon,secondary_button =false}){

  return(
    <Container secondary_button ={secondary_button} > 
      {icon}
      {title}
    </Container>
  )
}