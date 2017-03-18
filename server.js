const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const _find = require('lodash/find')

const posts = require('./data/posts.json')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  createServer((req, res) => {
    const { pathname } = parse(req.url)
    const shouldRedirect = _find(posts, post => `/${post.slug}` === pathname)

    if (shouldRedirect) {
      res.writeHead(301, { Location: `posts${pathname}` })
      res.end()
      return
    }

    handle(req, res)
  })
  .listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
