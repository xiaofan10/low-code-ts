// eslint-disable-next-line @typescript-eslint/no-var-requires
const Mock = require('mockjs')
const Random = Mock.Random
const TEST_API = [
  {
    url: '/api/test',
    method: 'get',
    response: () => {
      return {
        errorCode: 0,
        data: {
          id: Random.id(),
          name: Random.cname(),
        },
      }
    },
  },
  {
    url: '/api/query',
    method: 'post',
    response: () => {
      return {
        errorCode: 0,
        data: {
          id: Random.id(),
          name: Random.cname(),
        },
      }
    },
  },
  {
    url: '/api/questions/:id',
    method: 'get',
    response: () => {
      return {
        errorCode: 0,
        data: {
          id: Random.id(),
          name: Random.cname(),
        },
      }
    },
  },
]
module.exports = TEST_API
