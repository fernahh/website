import colors from '../theme/styles'
import Hr from './hr'
import ContentLink from './content-link'
import Occurrence from './occurrence'

const Content = ({ content }) => (
  <li>
    <Occurrence
      date={content.date}
      local={content.local}
      event={content.event}
    />

    <h2>
      <ContentLink href={content.path} slug={content.slug}>
        {content.title}
      </ContentLink>
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
