import Layout from './layout'

export default ({ children }) => (
  <Layout>
    <article>
      { children }

      <style jsx>{`
        article {
          max-width: 640px;
          margin: 0 auto;
          margin-bottom: 4em;
          padding-left: 10px;
          padding-right: 10px;
          overflow: hidden;
        }
      `}</style>
    </article>
  </Layout>
)
