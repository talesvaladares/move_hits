import styled from 'styled-components';


export const Container = styled.div`

  width: min(90vw, 1050px);


  display: flex;
  align-items: center;

  padding: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

  p {
    font-size: 2rem;
    display: flex;
    align-items: center;
    
    display: flex;
    align-items: center;

    span{
      display: flex;
      align-items: center;
    }
  }

  & + div {
    margin-top: 1rem;
  }

  &:last-child{
    margin-bottom: 5rem;
  }

  @media(max-width: 1093px){
    p{
      font-size: 1.6rem;
    }

    @media(max-width: 982px){
      p{
        font-size: 1.4rem;
      }

      svg{
        width: 20px;
        height: 20px;
      }

    } 

    @media(max-width: 773px){
      justify-content: center;

      p{
        display: flex;
        flex-direction: column;
      }
    }

    @media(max-width: 425px){

      p{
        span{
          flex-wrap: wrap;
        }
      }
    }

    
  
  }
`;