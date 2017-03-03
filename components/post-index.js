import Link from 'next/link'
import colors from '../theme/styles'
import HR from './hr'
import Time from './time'

const PostIndex = ({ post }) => (
  <li>
    <Time date={post.date}/>

    <h2>
      <Link href={post.path} as={post.id} prefetch>
        <a>{post.title}</a>
      </Link>
    </h2>

    <p>{post.description}</p>

    <HR />

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

export default PostIndex
