import Link from 'next/link'
import Article from '../layouts/article'
import Heading from '../components/heading'
import Content from '../components/content'
import talks from '../data/talks'

export default () => (
  <Article>
    <Heading>Talks</Heading>

    <ul>
      {
        talks.map(talk => (
          <div key={talk.id}>
            <Content content={talk}/>
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
  </Article>
)
