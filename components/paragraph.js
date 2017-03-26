import colors from '../theme/styles'

export default ({ children }) => (
  <p>
    { children }

    <style jsx>{`
      p {
        font-family: 'Open Sans', sans-serif;
        font-size: 1em;
        line-height: 1.8em;
      }
    `}</style>
  </p>
)
