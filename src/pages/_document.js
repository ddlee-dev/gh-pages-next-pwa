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
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content='Description' />
        <meta name='keywords' content='Keywords' />
        <title>Next.js PWA Example</title>

        <link rel="manifest" href="/manifest.json" />
        <link href='/icons/icon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
        <link href='/icons/icon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
        <link rel="apple-touch-icon" href="/icons/apple-icon.png"></link>
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
