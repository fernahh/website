import Link from 'next/link'
import Navigation from './navigation'
import colors from '../theme/styles'

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

      h1 a {
        color: ${colors.adjacent};
        border-color: transparent;
      }

      h1 a:hover {
        color: ${colors.black};
      }

      h2 {
        margin-top: 0;
        font-size: .9em;
        font-weight: normal;
        color: ${colors.grey};
      }
    `}</style>
  </header>
)
