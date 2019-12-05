const c = console.log

module.exports = async ({method, url, headers}, body, dev=!process.env.PORT)=> {
  console.log({method, url, headers, body})

  url = url.slice(5)

  if (url == 'guest') return [{x: 2, y: 4}, {x: 7, y: 11}]

  if (url == 'user') {
    const { sid, token } = JSON.parse(headers.session)

    const sessions = [{id: 1, token: 'abc'}, {id: 2, token: 'dfg'}]

    if (sessions.find(s => s.id==sid && s.token==token))
      return {personal: "info"}

  }


  // return {response: 'from api'}
  throw 'no such api'
}