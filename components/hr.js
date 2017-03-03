import colors from '../theme/styles'

export default () => (
  <div>
    <hr />
    <style jsx>{`
      hr {
        display: block;
        width: 45%;
        height: 1px;
        margin-top: 1em;
        margin-bottom: 1em;

        background-color: ${colors.greyLight};
        border: 0;

        clear: both;
      }

        @media screen and (min-width: 768px) {
          hr {
            width:35%;
            margin-top: 2em;
            margin-bottom: 2.5em
          }
        }
    `}</style>
  </div>
)
