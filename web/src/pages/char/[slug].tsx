import {GetStaticProps, GetStaticPaths} from 'next';
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
import movements from '../../services/movements.json';

type CharSelected = {
  name: String[];
  move: String[][];

}

interface CharacterProps {
  slug: string;
  charSelected: CharSelected; 
}

export default function Character ({slug, charSelected}: CharacterProps){

 

  return (
    <>
      <Head>
        <title>{slug}</title>
      </Head>
      <Header/>
      <Container>
        <h2>{slug}</h2>
      {
        charSelected.name.map((charName, index) => {
          return (
            <MovieCardItem key={index}>
              {charName}:
              {
                charSelected.move[index].map((m, index)=> {
                  switch(m){
                    case "tras":
                      return  <FiArrowLeft size={30} key={index}/>;
                    case "baixo":
                      return  <FiArrowDown size={30} key={index}/>;
                    case "frente":
                      return  <FiArrowRight size={30} key={index}/>;
                    case "cima":
                      return  <FiArrowUp size={30} key={index}/>;
                    case "diagonalBaixoTras":
                      return  <FiArrowDownLeft size={30} key={index}/>;
                    case "diagonalBaixoFrente":
                      return  <FiArrowDownRight size={30} key={index}/>;
                    case "diagonalCimaTras":
                      return  <FiArrowUpLeft size={30} key={index}/>;
                    case "diagonalCimaFrente":
                      return  <FiArrowUpRight size={30} key={index}/>;
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
//usado apenas em paginas que tem carregamento dinamico
//paginas que são tem os colchetes por volta
export const getStaticPaths: GetStaticPaths = async () => {
  return {
      paths: [],
      fallback: 'blocking'
  }
}
export const  getStaticProps: GetStaticProps = async({params}) => {

  const {slug} = params;

  const index = characteres.findIndex(char => char.name === slug);
  const charSelected = movements[index];

  return {
    props: {slug, charSelected},
    revalidate: 1000 * 60 * 10 //10minutos
  }

}