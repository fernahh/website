import Link from 'next/link'
import colors from '../theme/styles'

const isPost = link => link.includes('post')

export default ({ href, children }) => (
  <span>
    {
      isPost(href) ?
        <Link href={href} prefetch><a>{ children }</a></Link> :
        <a href={href} target="_blank">{ children }</a>
    }
    <style jsx>{`
      a {
        text-decoration: none;
        color: ${colors.adjacent};
        border: 0;
      }

        a:hover,
        a:active,
        a:focus {
          color: ${colors.black};
        }
    `}</style>
  </span>
)
