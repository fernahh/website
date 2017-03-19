import Head from 'next/head'
import Article from '../layouts/article'
import Heading from '../components/heading'
import Content from '../components/index-content'
import talks from '../data/talks'

export default () => (
  <Article title="Talks">
    <Head>
      <title>Palestras | @fernahh</title>
    </Head>

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
        padding-left: 0;
        list-style-type: none;
      }
    `}</style>
  </Article>
)
