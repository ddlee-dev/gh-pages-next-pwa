import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <title>Next.js PWA Example</title>

          <link rel='apple-touch-icon' href='/static/icons/apple-touch-icon.png' />
          <link rel='manifest' href='/static/manifest.json' />
          <link rel='shortcut icon' href='/favicon.ico' />
              
          <meta property='og:type' content='website' />
          <meta property='og:title' content='PWA App' />
          <meta property='og:description' content='Best PWA App in the world' />
          <meta property='og:site_name' content='PWA App' />
          <meta property='og:url' content='https://inquisitive-entropy.github.io/gh-pages-next-pwa/' />
          <meta property='og:image' content='https://inquisitive-entropy.github.io/gh-pages-next-pwa/static/icons/apple-touch-icon.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
