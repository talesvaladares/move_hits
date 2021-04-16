import {Container, Header, Footer} from './styles';

interface CardProps {
  name: string;
  image: string;
}

export function Card({name, image}:CardProps){
  return (
    <Container>
      <Header>
        <img src={`/images/${image}`} alt={name}  />
      </Header>
      <Footer>
        <h3>{name}</h3>
      </Footer>
    </Container>
  );
}