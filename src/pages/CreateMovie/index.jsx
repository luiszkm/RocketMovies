import { Container, Form } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Textarea } from '../../components/Textarea';


export function CreateMovie() {

  return (
    <Container>
      <Header />
      <main>

        <ButtonText title='voltar' isActive icon={<AiOutlineArrowLeft />} />
        <h2>Novo Filme</h2>

        <Form>
          <div>

            <Input className=""
              placeholder="Pesquisar pelo título" />
            <Input placeholder="Sua nota de 0 a 5" />
          </div>
          <Textarea placeholder ='observações' />
          <div>
            <Button title='Excluir filme' secondary_button />
            <Button title='Salvar filme' />


          </div>
        </Form>

      </main>
    </Container>
  )
}