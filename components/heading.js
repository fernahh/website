export default ({ children }) => (
  <h1>
    { children }

    <style jsx>{`
      h1 {
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 2em;
        font-weight: 600;
        line-height: 1.2em;
        letter-spacing: -1.79px;
        transition: all 200ms ease-in-out;
      }
    `}</style>
  </h1>
)
