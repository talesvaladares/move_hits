import styled from 'styled-components';
import {shade} from 'polished';


export const Container = styled.header`

  top:0;
  height: 5rem;
  width: 100vw;
  background: var(--red);
`;

export const Content = styled.div`
  max-width: 1110px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  nav {
    margin-left: 5rem;
    height: 5rem;

    a {
      display:flex;
      align-items: center;
      height: 5rem;
      color: #fff;
      font-weight: bold;
      font-size: 2rem;

      transition: color 0.2s;
      &:hover{
        color: ${shade(0.2, '#fff')};
      }

    }
  }
`