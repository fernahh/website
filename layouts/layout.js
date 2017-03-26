import Head from 'next/head'
import colors from '../theme/styles'
import Header from '../components/header'

export default ({ children }) => (
  <div>
    <Head>
      <title>@fernahh, desenvolvedor e de buenas na web</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Coisas que eu, @fernahh, quero que todos saibam." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700"
        rel="stylesheet" type="text/css" />
    </Head>

    <Header />

    { children }

    <style jsx global>{`
      *, *:after, *:before {
        box-sizing: border-box;
      }

      body {
        background-color: ${colors.white};
        color: ${colors.adjacent};
        font-family: 'Open Sans', sans-serif;
        line-height: 1.8em;
      }
    `}</style>

    <style jsx>{`
      div {
        max-width: 720px;
        margin: auto;
        margin-bottom: 4em;
        padding-left: 1em;
        padding-right: 1em;
        overflow: hidden;
      }
    `}</style>
  </div>
)
