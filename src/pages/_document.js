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
          <meta charset='utf-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <meta name='description' content='Description' />
          <meta name='keywords' content='Keywords' />

          <link rel="manifest" href={`${process.env.pathPrefix}/manifest.json`} />
          <link rel='mask-icon' href={`${process.env.pathPrefix}/icons/icon-16x16.png`} color='#5bbad5' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <link rel='icon' href={`${process.env.pathPrefix}/icons/icon-16x16.png`} type='image/png' sizes='16x16' />
          <link rel='icon' href={`${process.env.pathPrefix}/icons/icon-32x32.png`} type='image/png' sizes='32x32' />
          <link rel="apple-touch-icon" href={`${process.env.pathPrefix}/icons/apple-icon.png`}></link>
          <meta name="theme-color" content="#317EFB"/>
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
