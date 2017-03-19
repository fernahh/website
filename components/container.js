export default ({ children }) => (
  <div>
    { children }

    <style jsx>{`
      div {
        max-width: 620px;
        margin: 0 auto;
        padding-left: 10px;
        padding-right: 10px;
        overflow: hidden;
      }
    `}</style>
  </div>
)
