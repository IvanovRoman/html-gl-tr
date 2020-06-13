const translate = require('./index')
const html = require('./data')

// const html = '<p><i>I</i> love <a href="#">you</a>!</p><span>Frentch</span>'

demo = async () => {
  const result = await translate(html, {
    from: 'pl',
    to: 'ru',
  })
  console.log(result)
}

demo()
