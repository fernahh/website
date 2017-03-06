import colors from '../theme/styles'

export default ({ date, local, event }) => (
  <h3>
    <time datetime={date}>
      Publicado em: {date}
    </time>
    {
      (local && event)
      ? <span>| {local} | {event}</span>
      : ''
    }

    <style jsx>{`
      h3 {
        color: ${colors.grey};
        font-size: .75em;
        font-weight: normal;
      }
    `}</style>
  </h3>
)
