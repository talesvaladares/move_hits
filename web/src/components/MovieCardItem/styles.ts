import styled from 'styled-components';


export const Container = styled.div`

  width: 800px;
  max-width: 800px;

  display: flex;
  align-items: center;
  /* justify-content: center; */

  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

  p {
    font-size: 2rem;
    display: flex;
    align-items: center;
  }

  & + div {
    margin-top: 1rem;
  }

  &:last-child{
    margin-bottom: 5rem;
  }
`;