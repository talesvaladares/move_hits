import Document, { Html, Head, NextScript, Main, DocumentContext } from 'next/document'
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument  extends Document{

  static async getInitialProps(ctx: DocumentContext){
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try{
      ctx.renderPage = () => (
        originalRenderPage({
          enhanceApp : (App) => (props) =>(
            sheet.collectStyles(<App {...props}/>)
          )
        })
      );

      const initialProps = await Document.getInitialProps(ctx);
      
      return {
        ...initialProps,
        styles : (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }

    }
    finally{
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href="favicon-32x32.png" type="image/png"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
       
      </Html>
    )
  }
}