import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Container } from "./styles";
import {AiOutlinePlus} from "react-icons/ai"
import { Button } from "../../components/Button";
export function Home(){


  return(
    <Container>
      <Header />
    <Section 
    title='Meus Filmes'
     button={
     <Button 
     icon={<AiOutlinePlus/>}
     title='Adicionar novo filme'/>}>
    
    </Section>  

    </Container>
  )
}