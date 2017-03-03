import Link from 'next/link'
import Layout from '../layouts/layout'
import posts from '../data/posts'
import colors from '../theme/styles'
import PostIndex from '../components/post-index'

const getPosts = () => posts.map(post => Object.assign({
  path: `/posts/${post.id}`
}, post))

export default () => (
  <Layout>
    <ul>
      {
        getPosts().map(post => (
          <div>
            <PostIndex key={post.id} post={post}/>
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
