import styled from 'styled-components';

export const Container = styled.div`

  max-width: 1100px;
  min-height : (100% - 10rem);
  margin: 0 auto;
  padding: 0 2rem;
  
  display: flex;
  justify-content: center;
  
`;

export const Content = styled.div`

  margin-top: 5rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;

`;