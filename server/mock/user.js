// eslint-disable-next-line @typescript-eslint/no-var-requires
const Mock = require('mockjs')
const Random = Mock.Random
const USER_API = [
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return {
        errorCode: 0,
        data: {
          id: Random.id(),
          username: Random.title(),
          nickname: Random.cname(),
        },
      }
    },
  },
  // 注册
  {
    url: '/api/user/register',
    method: 'post',
    response: () => {
      return {
        errorCode: 0,
      }
    },
  },
  // 登录
  {
    url: '/api/user/login',
    method: 'post',
    response: () => {
      return {
        errorCode: 0,
        data: {
          token: Random.word(20), // 实际用jwt替换
        },
      }
    },
  },
]
module.exports = USER_API
