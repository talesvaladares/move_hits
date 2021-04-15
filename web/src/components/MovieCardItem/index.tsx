import {ReactNode} from 'react';
import { Container } from "./styles";

interface MovieCardItemProps {
  children: ReactNode;
}

export function MovieCardItem ({children}: MovieCardItemProps ) {
  return (
    <Container>
      <p>{children}</p>
    </Container>
  )
}