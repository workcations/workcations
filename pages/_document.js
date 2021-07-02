import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { GA_TRACKING_ID } from "../components/ga";

/* <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
      rel="stylesheet"
    />*/

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    function handleCollectStyles(App) {
      return (props) => {
        return sheet.collectStyles(<App {...props} />);
      };
    }

    const page = renderPage((App) => handleCollectStyles(App));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    /*const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();*/
    return (
      <Html lang="en">
        <Head>
          {this.props.styleTags}
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `,
            }}
          />
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <link rel="preconnect" href="https://d1xmqx9e0b6ljd.cloudfront.net" />
          <link
            rel="dns-prefetch"
            href="https://d1xmqx9e0b6ljd.cloudfront.net"
          />
        </Head>
        <body>
          <Main className="root" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

/*

          <script
            dangerouslySetInnerHTML={{
              __html: `(function() {window.__insp = window.__insp || [];__insp.push(['wid', 1236824723]);var ldinsp = function(){if(typeof window.__inspld != "undefined") return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=1236824723&r=' + Math.floor(new Date().getTime()/3600000); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };setTimeout(ldinsp, 0);})();`,
            }}
          />

          */
