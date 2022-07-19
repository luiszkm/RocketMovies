import { Container } from './styles';
import {AiOutlineStar} from 'react-icons/ai'
import {Tag} from '../Tag'; 

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
      <footer>
        <Tag title= 'naruto'/>
        <Tag title= 'bleach'/>
      </footer>
    </Container>
  )
}