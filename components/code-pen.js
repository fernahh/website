export default ({ id, name, tab = 'Result' }) => (
  <iframe
    height="265"
    scrolling="no"
    title={name}
    src={`//codepen.io/lfernahh/embed/${id}/?height=265&theme-id=0&default-tab=${tab},result&embed-version=2`}
    frameBorder="no"
    allowTransparency="true"
    allowFullScreen="true"
    style={{width: '100%'}}>
  </iframe>
)
