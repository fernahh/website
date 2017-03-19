import colors from '../theme/styles'
import Hr from './hr'
import IndexContentLink from './index-content-link'
import Occurrence from './occurrence'

const IndexContent = ({ content }) => (
  <li>
    <Occurrence
      date={content.date}
      local={content.local}
      event={content.event}
    />

    <h2>
      <IndexContentLink href={content.path}>
        {content.title}
      </IndexContentLink>
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
    `}</style>
  </li>
)

export default IndexContent
