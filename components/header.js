import Link from 'next/link'
import Navigation from './navigation'

export default () => (
  <header>
    <div className="Header_Title">
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
      .Header_Title {
        margin-top: 1em;
        text-align: center;
      }

      @media screen and (min-width: 768px) {
        .Header_Title {
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
        color: #44484a;
        border-color: transparent;
      }

      h1 a:hover {
        color: #000000;
      }

      h2 {
        margin-top: 0;
        font-size: .9em;
        font-weight: normal;
        color: #aaaaaa;
      }
    `}</style>
  </header>
)