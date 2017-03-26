import colors from '../theme/styles'

export default ({ date, local, event }) => (
  <h3>
    <time dateTime={date}>
      Publicado em: {date}
    </time>
    {
      (local && event) ? <span>| {local} | {event}</span> : ''
    }

    <style jsx>{`
      h3 {
        margin-bottom: 0;
        color: ${colors.grey};
        font-size: .75em;
        font-weight: normal;
        text-transform: uppercase;
      }
    `}</style>
  </h3>
)
