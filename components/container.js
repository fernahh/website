export default ({ children }) => (
  <div>
    { children }

    <style jsx>{`
      div {
        max-width: 620px;
        margin: 0 auto;
      }
    `}</style>
  </div>
)
