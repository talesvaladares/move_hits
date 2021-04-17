import styled from 'styled-components';

export const Container = styled.div`

 
  margin: 0 auto;
  padding: 0 2rem;
  
  display: flex;
  justify-content: center;
  
`;

export const Content = styled.div`

  max-width: 1100px;
  min-height : (100vh - 10rem);

  margin: 5rem auto;
  padding: 2rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;


  @media(max-width:1024px){
    grid-template-columns: repeat(3, 1fr);
  }

`;