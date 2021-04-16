import styled from 'styled-components';

export const Container = styled.div`

  margin-top: 5rem;
  margin-bottom: 5rem;
 
  
  display: flex;
  justify-content: center;
  
`;

export const Content = styled.div`

  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;

 
`;