import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() { // Document is a component that is rendered by Next.js on the server side. it is used to augment your application's <html> and <body> tags.
  return (
    <Html lang="en">
      <Head>
      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossOrigin="anonymous"
/>
      </Head>
      <body> 
        <Main /> {/* // Main is the main content of the page rendered by Next.js. it is a React component that must be rendered in your custom Document. */}
        <NextScript /> {/* // NextScript is a component that contains the scripts that are needed in order for your Next.js page to properly work. */}
      </body> {/* // The scripts loaded here won't be shared between pages. So if you navigate from one page to another, the scripts on the page you navigate to won't be loaded. */}
    </Html>
  )
}
