import { Container, Form } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';

import {AiOutlineArrowLeft} from'react-icons/ai';


export function CreateMovie() {

  return (
    <Container>
      <Header />
      <main>

        <ButtonText title='voltar' isActive icon={<AiOutlineArrowLeft/>}/>
        <h2>Novo Filme</h2>

        <Form>
          <div>

            <Input className=""
              placeholder="Pesquisar pelo título" />
              <Input placeholder="Pesquisar pelo título" />
          </div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <div>
            <Button title='Excluir filme' secondary_button/>
            <Button title='Salvar filme'/>

            
          </div>
        </Form>

      </main>
    </Container>
  )
}