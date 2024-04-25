const TOKEN_KEY = 'USER_TOKEN'
const setToken = (token: string) => {
  sessionStorage.setItem(TOKEN_KEY, token)
}

const getToken = () => {
  return sessionStorage.getItem(TOKEN_KEY)
}

const removeToken = () => {
  sessionStorage.removeItem(TOKEN_KEY)
}

export { setToken, getToken, removeToken }
