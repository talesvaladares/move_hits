import Link from 'next/link';
import Head from 'next/head';
import {Header} from './components/Header';
import {Container, Content} from '../styles/pages/home';
import {Card} from './components/Card';
import {Footer} from './components/Footer';

import characteres from '../services/characters.json';
export default function Home (){
  return (
   <>
   <Head>
     <title>Personagens</title>
   </Head>
    <Header/>
    <Container>
      <Content>
        {
          characteres.map(char => {
            return (
              <Link href={`/char/${char.name}`} key={char.name}>
                <a>
                <Card
                  name={char.name}
                  image={char.image}
                />
              </a>
              </Link>
            );
          })
        }
      </Content>
      
    </Container>
    <Footer/>
   </>
  )
}