import colors from '../theme/styles'
import Hr from './hr'
import IndexContentLink from './index-content-link'
import Occurrence from './occurrence'
import Heading from './heading'
import P from './paragraph'

const IndexContent = ({ content }) => (
  <li>
    <Occurrence
      date={content.date}
      local={content.local}
      event={content.event}
    />

    <Heading>
      <IndexContentLink href={content.path}>
        {content.title}
      </IndexContentLink>
    </Heading>

    <P>{content.description}</P>

    <Hr />

    <style jsx>{`
      li {
        margin-bottom: 2em;
      }
    `}</style>
  </li>
)

export default IndexContent
