import styled from 'styled-components';


export const Container = styled.div`

  width: 1050px;


  display: flex;
  align-items: center;

  padding: 2rem;
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