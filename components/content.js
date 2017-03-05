import Link from 'next/link'
import colors from '../theme/styles'
import Hr from './hr'
import Time from './time'

const Content = ({ content }) => (
  <li>
    <Time date={content.date}/>

    <h2>
      <Link href={content.path} as={content.id} prefetch>
        <a>{content.title}</a>
      </Link>
    </h2>

    <p>{content.description}</p>

    <Hr />

    <style jsx>{`
      li {
        margin-bottom: 2em;
      }

      h2 {
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 2em;
        font-weight: 600;
        line-height: 1.2em;
        letter-spacing: -1.79px;
        transition: all 200ms ease-in-out;
      }

      a {
        color: ${colors.adjacent};
        border: 0;
      }

        a:hover,
        a:active,
        a:focus {
          color: ${colors.black};
        }
    `}</style>
  </li>
)

export default Content
