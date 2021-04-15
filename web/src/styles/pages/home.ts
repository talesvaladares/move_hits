import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
 
  
  display: flex;
  justify-content: center;
  
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
`;