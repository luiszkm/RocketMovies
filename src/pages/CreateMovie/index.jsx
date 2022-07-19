import { Container, Form } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';

export function CreateMovie() {

  return (
    <Container>
      <Header />
      <main>

        <ButtonText title='voltar' isActive />
        <h2>Novo Filme</h2>

        <Form>
          <div>

            <Input className="sr-only"
              placeholder="Pesquisar pelo título" />
          </div>
        </Form>

      </main>
    </Container>
  )
}