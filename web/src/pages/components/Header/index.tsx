import Link from 'next/link'
import {Container, Content} from './styles'
export function Header () {
  return (
    <Container>
      <Content>
        <nav>
          <Link href="/">
            <a>
              Real Bout Fatal Fury
            </a>
          </Link>
        </nav>
      </Content>
    </Container>
  );
};