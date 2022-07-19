import { Container } from './styles';
import {AiOutlineStar} from 'react-icons'
export function Note({title,descriptions}){

  return(
    <Container>
      <h3>{title}</h3>
      <div>
        <AiOutlineStar/>
      </div>
      <p>
        {descriptions}
      </p>
    </Container>
  )
}