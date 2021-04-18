import styled from 'styled-components';

export const Container = styled.div`

  height: 28rem;
  width: 20rem;

  padding: 2rem;
  
  border: 1px solid var(--red);
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  transition: border-color 0.2s;

  &:hover{
    border-width: 2px;
    border-color:#4B0082;
  }

  @media(max-width:768px){
   width: 18rem;
   height: 18rem;
  }

`;

export const Header = styled.header`

  display: flex;
  justify-content: center;

  height: 80%;

  img {
    /* @media(max-width:768px){
      width: 18rem;
      width: 18rem;
    } */
  }
`;

export const Footer = styled.footer`

`;