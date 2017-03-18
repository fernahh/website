import Highlight from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/styles'

const customStyle = {
  padding: '16px 0',
  overflow: 'auto',
  border: '1px solid #ebecec',
  borderRadius: '3px',
  boxSizing: 'border-box',
  backgroundColor: '#f8f8f8',
  fontSize: '1.2em'
}

const Snippet = ({ language, children }) => (
  <Highlight language={language} style={tomorrow} customStyle={customStyle}>
    { children }
  </Highlight>
)

const Code = ({ children }) => (
  <code>
    { children }
  </code>
)

export { Snippet, Code }
