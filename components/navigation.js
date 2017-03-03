import Link from 'next/link'
import navigationLinks from '../data/navigation-links'
import colors from '../theme/styles'

export default () => (
  <nav>
    <ul>
      {
        navigationLinks.map(link => (
          <li key={link.id}>
            <Link href={link.href}>
              <a title={link.title}>{link.name}</a>
            </Link>
          </li>
        ))
      }
    </ul>

    <style jsx>{`
      @media screen and (min-width: 768px) {
        nav {
          float: right;
          width: 60%;
          margin-top: 1em;
        }
      }

      ul {
        padding-left: 0;
        text-align: center;
        list-style-type: none;
      }

        @media screen and (min-width: 768px) {
          ul {
            text-align: right
          }
        }

      ul li {
        display: inline-block;
        margin-right: .9em
      }

      ul li:last-child {
        margin-right: 0
      }

      ul li a {
        position: relative;
        z-index: 10;
        color: ${colors.grey};
        font-size: .9em;
        letter-spacing: -1px;
        line-height: 2em;
        text-transform: lowercase;
        border: 0
      }

        ul li a:hover,
        ul li a:active,
        ul li a:focus {
          color: ${colors.black};
        }
    `}</style>
  </nav>
)
