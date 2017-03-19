import Layout from './layout'
import Container from '../components/container'
import Occurrence from '../components/occurrence'
import Heading from '../components/heading'

export default ({ title, date, children }) => (
  <Layout>
    <Container>
      <article>
        <header>
          <Occurrence date={date} />
          <Heading>{title}</Heading>
        </header>
        <section>{ children }</section>
      </article>
    </Container>
  </Layout>
)
