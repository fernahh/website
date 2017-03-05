export default ({ children }) => (
  <h1>
    { children }

    <style jsx>{`
      h1 {
        margin-top: 0;
        font-size: 3em;
        font-weight: 600;
        letter-spacing: -1.79px;
        line-height: 1.1em;
      }
    `}</style>
  </h1>
)
