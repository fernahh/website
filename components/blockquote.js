export default ({ children }) => (
  <blockquote>
    { children }

    <style jsx>{`
      blockquote {
        position: relative;
        margin: 40px 0;
        padding: 40px 0;
        font-size: 2em;
        font-weight: 700;
        line-height: 1.4em;
        letter-spacing: -0.5px;
      }

      blockquote:before,
      blockquote:after {
        content: '';
        position: absolute;
        left: 0;
        display: block;
        width: 20px;
        height: 2px;
        background: black;
      }

      blockquote:before {
        top: 0;
      }

      blockquote:after {
        bottom: 0;
      }
    `}</style>
  </blockquote>
)
