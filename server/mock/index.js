// eslint-disable-next-line @typescript-eslint/no-var-requires
const TEST_API = require('./test')
const USER_API = require('./user')

const API_LIST = [...USER_API, ...TEST_API]

module.exports = API_LIST
