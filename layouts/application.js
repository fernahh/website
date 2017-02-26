import Head from 'next/head'
import { colors } from '../theme/styles'

export default ({ children }) => (
  <div>
    <Head>
      <title>fernahh.com.br</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
      <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css' />
    </Head>

    { children }

    <style jsx global>{`
      *, *:after, *:before {
        box-sizing: border-box;
      }

      body {
        background-color: ${colors.white};

        color: ${colors.adjacent};
        font-family: 'Open Sans', sans-serif;
        font-size: 1em;
        line-height: 1.8em;
      }

      a {
        color: ${colors.link};
        text-decoration: none;

        border-bottom: 1px dashed ${colors.link};

        transition: all 200ms ease-in-out;
      }

      a:hover {
        color: ${colors.linkHover};

        border-bottom-color: ${colors.linkHover};
      }
    `}</style>
  </div>
)
