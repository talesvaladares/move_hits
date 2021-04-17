import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const Content = styled.main`

  height: calc(100% - 10rem);
  max-width: 1100px;
  margin: 5rem auto;
  padding: 0 2rem;

  margin-bottom: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
    font-size: 3rem;
    font-weight: normal;
    margin-bottom: 2rem;
  }
`;