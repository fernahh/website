import Link from 'next/link'
import Layout from '../layouts/layout'
import Content from '../components/content'
import Container from '../components/container'
import posts from '../data/posts'
import colors from '../theme/styles'

const getPosts = () => posts.map(post => Object.assign({
  path: `/posts/${post.slug}`
}, post))

export default () => (
  <Layout>
    <Container>
      <ul>
        {
          getPosts().map(post => (
            <div key={post.id}>
              <Content content={post}/>
            </div>
          ))
        }
      </ul>
    </Container>

    <style jsx>{`
      ul {
        display: block;
        padding-left: 0;
        list-style-type: none;
      }
    `}</style>
  </Layout>
)
