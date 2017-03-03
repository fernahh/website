import colors from '../theme/styles'

export default ({ date }) => (
  <time datetime={date}>
    Publicado em: {date}

    <style jsx>{`
      time {
        color: ${colors.grey};
        font-size: .75em;
      }
    `}</style>
  </time>
)
