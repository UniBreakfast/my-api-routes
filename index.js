module.exports = async ({method, url, headers}, body, dev=!process.env.PORT)=> {
  console.log('api imported')
  console.log({method, url, headers, body})
  return {response: 'from api'}
  throw 'no such api'
}