import isAbsUrl from 'is-absolute-url'
import Link from 'next/link'
import colors from '../theme/styles'

export default ({ href, title, children }) => (
  <span>
    {
      isAbsUrl(href) ?
        <a href={href} title={title} target="_blank">{children}</a> :
        <Link href={href} title={title} prefetch><a>{children}</a></Link>
    }

    <style jsx>{`
      a {
        color: ${colors.link};
        text-decoration: none;
        border-bottom: 1px dashed ${colors.link};
        transition: all 200ms ease-in-out;
      }

      a:hover {
        color: ${colors.linkHover};
        border-bottom-color: ${colors.linkHover};
      }
    `}</style>
  </span>
)
