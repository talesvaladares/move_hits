import styled from 'styled-components';


export const Content = styled.div`
  margin-top: 5rem;

  padding: 1rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;


  @media(max-width:1024px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width:768px){
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.25rem;
  }

`;