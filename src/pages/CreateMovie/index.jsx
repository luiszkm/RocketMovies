import { Container, Form } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';

import { AiOutlineArrowLeft, AiOutlineSearch, AiOutlineStar, AiFillDelete, AiOutlineSave } from 'react-icons/ai';
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

            <Input
              className=""
              placeholder="Pesquisar pelo título"
              icon={AiOutlineSearch} />

            <Input
              placeholder="Sua nota de 0 a 5"
              icon={AiOutlineStar} />

          </div>
          <Textarea placeholder='observações' />

          <Section
            title='marcadores'
            secondary_section>
            <Tag title='naruto' />
            <Tag title='naruto' />
            <Tag title='naruto' />
            <Tag title='naruto' />
          </Section>
          <div>
            <Button
              secondary_button
              title='Excluir filme'
              icon={<AiFillDelete />} />

            <Button title='Salvar filme'
              icon={<AiOutlineSave />} />


          </div>
        </Form>

      </main>
    </Container>
  )
}