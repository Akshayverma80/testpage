import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/badge.png" />
        <meta name="theme-color" content="#000000" />
        {/* <!-- added by me --> */}
        {/* <!-- Primary Meta Tags --> */}
    <meta name="title"
    content="ITIL® 4 Foundation: The Guiding Principles • Ajit • DocView® Digital Badge: ITIL® 4 Foundation: The Guiding Principles"/>
  <meta name="description" content="Web site created using create-react-app"/>

  
        <link rel="apple-touch-icon" href="/badge.png" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        {/* <!-- Bootstrap CSS --> */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
        {/* <!-- Custom Css --> */}
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/newStyle.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
        {/* <!-- Google Font --> */}
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800&display=swap"
            rel="stylesheet" />
        <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet" />
        {/* <!-- Font awesome --> */}
        <link
            href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <script src="/assets/custom.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument