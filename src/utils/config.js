const host = 'http://rap2api.taobao.org/app/mock/83449'

const api = {
  lists: '/user/lists',
  remove: '/user/remove',
  add: '/user/add',
  update: '/user/update'
}

Object.keys(api).forEach(key => {
  api[key] = host + api[key]
})

module.exports = {
  api
}