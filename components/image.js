import colors from '../theme/styles'

export default ({ src, alt }) => (
  <span>
    <img src={src} alt={alt} />

    <style jsx>{`
      img {
        display: block;
        max-width: 90%;
        margin: 0 auto;
        padding: 4px;
        border: 1px solid ${colors.greyLight};
      }
    `}</style>
  </span>
)
