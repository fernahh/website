import Container from '../components/container'
import Occurrence from '../components/occurrence'
import Heading from '../components/heading'
import Layout from './layout'

export default ({ title, date, children }) => (
  <Layout>
    <Container>
      <article>
        <header>
          {
            date ? <Occurrence date={date} /> : ''
          }
          <Heading>{title}</Heading>
        </header>
        <section>{ children }</section>
      </article>
    </Container>
  </Layout>
)
