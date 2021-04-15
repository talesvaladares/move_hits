import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {Header} from '../../components/Header';
import {MovieCardItem} from '../../components/MovieCardItem';
import { Footer } from '../../components/Footer';


import {
  FiArrowDownLeft,
  FiArrowDownRight,
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpLeft,
  FiArrowUpRight,
  FiArrowUp 
} from 'react-icons/fi'

import {Container} from './styles';


import {characteres} from '../../services/characters';
import {movements} from '../../services/movements';

interface CharacterProps {
  slug: string;
}

export default function Character ({slug}: CharacterProps){

  const index = characteres.findIndex(char => char.name === slug);
  const charSelected = movements[index];

  return (
    <>
      <Head>
        <title>{slug}</title>
      </Head>
      <Header/>
      <Container>
        <h2>{slug}</h2>
      {
        charSelected.name.map((name, index) => {
          return (
            <MovieCardItem key={name}>
              {name}:
              {
                charSelected.movie[index].map((m, index)=> {
                  switch(m){
                    case "tras":
                      return  <FiArrowLeft size={30} key={index}/>;
                      break;
                    case "baixo":
                      return  <FiArrowDown size={30} key={index}/>;
                      break;
                    case "frente":
                      return  <FiArrowRight size={30} key={index}/>;
                      break;
                    case "cima":
                      return  <FiArrowUp size={30} key={index}/>;
                      break;
                    case "diagonalBaixoTras":
                      return  <FiArrowDownLeft size={30} key={index}/>;
                      break;
                    case "diagonalBaixoFrente":
                      return  <FiArrowDownRight size={30} key={index}/>;
                      break;
                    case "diagonalCimaTras":
                      return  <FiArrowUpLeft size={30} key={index}/>;
                      break;
                    case "diagonalCimaFrente":
                      return  <FiArrowUpRight size={30} key={index}/>;
                      break;
                    default:
                      return m;
                  }
                })
              }            
            </MovieCardItem>
          )
        })
        
      }
      
      </Container>
      <Footer/>
    </>
    
  );
}
export const getServerSideProps : GetServerSideProps = async({req, params}) => {

  const {slug} = params;

  return {
    props: {slug}
  }

}