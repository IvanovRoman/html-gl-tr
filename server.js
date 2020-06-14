const express = require('express')
const axios = require('axios')

const app = express()
const port = 3000

const translate = require('./index')
const html = require('./data')


app.get('/page', async (req, res) => {
  if (!req.query.url) {
    res.send("Нет ссылки на страницу")
    res.end()
  }
  if (!req.query.src) {
    res.send("Нет исходного языка")
    res.end()
  }
  if (!req.query.dest) {
    res.send("Нет конечного языка")
    res.end()
  }

  const linkToPage = req.query.url
  const src = req.query.src
  const dest = req.query.dest

  res.set({ 'content-type': 'text/html; charset=utf-8' })
  axios.get(linkToPage).then(async (resp) => {
    const result = await translate(resp.data, {
      from: src,
      to: dest,
    })
    res.send(result)
  });
  // const result = await translate(html, {
  //   from: 'pl',
  //   to: 'ru',
  // })
  // console.log(result)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))