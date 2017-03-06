import Link from 'next/link'
import colors from '../theme/styles'

const isPost = link => link.includes('post')

export default ({ href, children, slug}) => (
  <span>
    {
      isPost(href) ?
        <Link href={href} as={slug} prefetch><a>{ children }</a></Link> :
        <a href={href} target="_blank">{ children }</a>
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
