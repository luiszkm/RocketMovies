import { Container, Form ,Background} from "./styles";
import {Input} from "../../components/Input"

export function SignIn(){


  return(
    <Container>
      <h1>RocketMovies</h1>
      <Form>
        <Input
        placeholder="E-mail" />

      </Form>
      <Background/>
      </Container>
  )
}