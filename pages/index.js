import Link from 'next/link'
import Layout from '../layouts/layout'
import Content from '../components/content'
import posts from '../data/posts'
import colors from '../theme/styles'

const getPosts = () => posts.map(post => Object.assign({
  path: `/posts/${post.slug}`
}, post))

export default () => (
  <Layout>
    <ul>
      {
        getPosts().map(post => (
          <div key={post.id}>
            <Content content={post}/>
          </div>
        ))
      }
    </ul>

    <style jsx>{`
      ul {
        display: block;
        max-width: 620px;
        margin: auto;
        list-style-type: none;
      }
    `}</style>
  </Layout>
)
