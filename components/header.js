import Link from 'next/link'
import colors from '../theme/styles'
import Navigation from './navigation'

export default () => (
  <header>
    <div>
      <h1>
        <Link href="/">
          <a title="fernahh.com.br">
            <strong>fernahh</strong>.com.br
          </a>
        </Link>
      </h1>
      <h2>desenvolvedor e de buenas na web.</h2>
    </div>

    <Navigation />

    <style jsx>{`
      header {
        overflow: hidden;
        margin-bottom: 4em;
      }

      header > div {
        margin-top: 1em;
        text-align: center;
      }

        @media screen and (min-width: 768px) {
          header > div {
            float: left;
            width: 40%;
            text-align: left;
          }
        }

      h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 1.2em;
        font-weight: normal;
      }

      a {
        color: ${colors.adjacent};
        border: 0;
        text-decoration: none;
      }

        a:hover {
          color: ${colors.black};
        }

      h2 {
        margin-top: 0;
        color: ${colors.grey};
        font-size: .9em;
        font-weight: normal;
      }
    `}</style>
  </header>
)
