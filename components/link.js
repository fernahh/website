import Link from 'next/link'
import colors from '../theme/styles'

const isInternalLink = link => /^[a-z][a-z0-9+.-]*:/.test(link)

export default ({ href, children, slug}) => (
  <span>
    {
      isInternalLink(href) ?
        <a href={href} target="_blank"> {children} </a> :
        <Link href={href} as={slug} prefetch><a>{ children }</a></Link>
    }
    <style jsx>{`
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
  </span>
)
