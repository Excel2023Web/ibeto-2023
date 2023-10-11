import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Innovations for a Better Tomorrow (IBeTo) is a technical innovations competition hosted by Govt.
          Model Engineering College, Kochi as part of their annual national-level technical symposium,
          Excel 2023."
        />
        <meta property="og:site_name" content="IBeTo | Excel 2023" />
        <meta property="og:title" content="IBeTo | Excel 2023" />
        <meta property="og:url" content="https://ibeto.excelmec.org/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Innovations for a Better Tomorrow (IBeTo) is a technical innovations competition hosted by Govt.
          Model Engineering College, Kochi as part of their annual national-level technical symposium,
          Excel 2023."
        />
        <meta property="og:locale" content="---  ---" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />

        <meta itemProp="name" content="IBeTo | Excel 2023" />
        <meta itemProp="url" content="https://ibeto.excelmec.org/" />
        <meta
          itemProp="description"
          content="Innovations for a Better Tomorrow (IBeTo) is a technical innovations competition hosted by Govt.
          Model Engineering College, Kochi as part of their annual national-level technical symposium,
          Excel 2023."
        />
        <meta itemProp="thumbnailUrl" content="" />
        <meta name="twitter:site" content="@excelmec" />
        <meta name="twitter:creator" content="@excelmec" />
        <meta name="twitter:url" content="https://ibeto.excelmec.org/" />
        <meta name="twitter:title" content="IBeTo | Excel 2023" />
        <meta
          name="twitter:description"
          content="Innovations for a Better Tomorrow (IBeTo) is a technical innovations competition hosted by Govt.
          Model Engineering College, Kochi as part of their annual national-level technical symposium,
          Excel 2023."
        />
        <meta name="twitter:card" content="summary" />
        {/* <link rel="icon" href="./favicon.ico" sizes="any" /> */}
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&family=Poppins:wght@200;400;500;600;800&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@500;700&display=swap"
          rel="stylesheet"
        ></link>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-YM8D4MCC6B`}
        />
        <Script strategy="lazyOnload">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-YM8D4MCC6B', {
        page_path: window.location.pathname,
        });
    `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
