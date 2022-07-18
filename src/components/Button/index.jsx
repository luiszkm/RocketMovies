import {Container} from './styles.js'

export function Button ({title, icon}){

  return(
    <Container>
      {icon}
      {title}
    </Container>
  )
}