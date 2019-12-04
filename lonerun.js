
console.log('Standalone testing of api module...')

require('.')({method: 'POST', url: '/api/route', headers: {custom: 'token'}},
  {payload: 'content'}).then(console.log).catch(console.log)

setTimeout(()=>{}, 1e4)